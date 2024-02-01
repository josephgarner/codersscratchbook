import React, { useContext, useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { Article, ArticleSummary } from "../types";
import { db } from "../firebase";

type GetArticleProps = {
  id: string;
};

type ValueProp = {
  article: Article | null;
  articleSummaries: Array<ArticleSummary>;
  getArticle: ({ id }: GetArticleProps) => void;
};

type ContextProp = {
  children: React.ReactNode;
};

export const AppContext = React.createContext({} as ValueProp);

export default function Context({ children }: ContextProp) {
  const [article, setArticle] = useState<Article | null>(null);
  const [articleSummaries, setArticleSummaries] = useState<Array<ArticleSummary>>([]);

  const getArticle = ({ id }: GetArticleProps) => {
    onSnapshot(collection(db, `articles`), (query) => {
      const doc = query.docs.filter((doc) => doc.id === id);
      if (doc.length === 1) {
        const data = doc[0].data();
        setArticle({
          documentId: id,
          title: data.Title,
          postId: data.postId,
          summary: data.summary,
          tags: data.tags,
          posted: data.posted,
        });
      }
    });
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, `articles`), (query) => {
      const articles = query.docs.map((doc) => {
        const data = doc.data();
        return {
          documentId: doc.id,
          title: data.Title,
          postId: data.postId,
          summary: data.summary,
          tags: data.tags,
          posted: data.posted,
        };
      });
      setArticleSummaries(articles);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  console.log(articleSummaries);

  return <AppContext.Provider value={{ article, getArticle, articleSummaries }}>{children}</AppContext.Provider>;
}

export const useGlobalContext = (): ValueProp => {
  return useContext(AppContext);
};
