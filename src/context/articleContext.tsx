import React, { useContext, useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { ArticleSummary } from "../types";
import { db } from "../firebase";

type GetArticleProps = {
  id: string;
};

type ValueProp = {
  article: ArticleSummary | null;
  articleSummaries: Array<ArticleSummary>;
  getArticle: ({ id }: GetArticleProps) => void;
};

type ContextProp = {
  children: React.ReactNode;
};

export const AppContext = React.createContext({} as ValueProp);

export default function Context({ children }: ContextProp) {
  const [article, setArticle] = useState<ArticleSummary | null>(null);
  const [articleSummaries, setArticleSummaries] = useState<Array<ArticleSummary>>([]);

  const getArticle = ({ id }: GetArticleProps) => {
    onSnapshot(collection(db, `articles`), (query) => {
      const doc = query.docs.filter((doc) => doc.data().postId === id);
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
    const date = new Date();
    const unsubscribe = onSnapshot(collection(db, `articles`), (query) => {
      const articles = query.docs
        .filter((doc) => doc.data().posted.seconds < date.getTime())
        .map((doc) => {
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

  return <AppContext.Provider value={{ article, getArticle, articleSummaries }}>{children}</AppContext.Provider>;
}

export const useGlobalContext = (): ValueProp => {
  return useContext(AppContext);
};
