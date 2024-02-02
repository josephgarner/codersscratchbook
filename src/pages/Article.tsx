import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/articleContext";
import { formateDate } from "../utils/formatDate";
import { Helmet } from "react-helmet-async";
import { Chip, Grid, Skeleton, Stack, Typography } from "@mui/material";

function Article() {
  const [writtenWord, setWrittenWord] = useState();
  const { article, getArticle } = useGlobalContext();
  const params = useParams();
  const articleId = params.articleId;

  useEffect(() => {
    if (articleId) {
      getArticle({ id: articleId });
      import(`../posts/${articleId}.mdx`)
        .then((module) => {
          setWrittenWord(module.default);
        })
        .catch((err) => {
          console.log(err);
          setWrittenWord(undefined);
        });
    }
  }, [articleId]);

  const loadingArticle = () => {
    return (
      <>
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
      </>
    );
  };

  if (article) {
    return (
      <Grid container spacing={2} justifyContent={"center"} style={{ marginTop: "3rem", marginBottom: "5rem" }}>
        <Helmet>
          <title>Coders Scratch Book</title>
          <meta name="description" content="The scratchbook of an average developer and tinkerer" />;
          <meta name="keywords" content={article.tags.join(", ")} />
          <meta name="author" content="Joseph Garner" />
          <meta property="og:url" content={`https://www.codersscratchbook.com/${articleId}`} />
        </Helmet>
        <Grid item xs={12} md={8} marginBottom={2}>
          <Typography variant="subtitle1" marginBottom={2}>
            {formateDate(article.posted.seconds)}
          </Typography>
          <Typography variant="h3" marginBottom={2}>
            {article.title}
          </Typography>
          <Stack direction="row" spacing={1}>
            {article.tags.map((tag) => {
              return <Chip key={tag} color="primary" label={tag} />;
            })}
          </Stack>
        </Grid>
        <Grid item xs={12} md={8}>
          {writtenWord ? writtenWord : loadingArticle()}
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container spacing={2} justifyContent={"center"} style={{ marginTop: "3rem", marginBottom: "5rem" }}>
      <Grid item xs={12} md={8} marginBottom={2}>
        <Typography variant="subtitle1" marginBottom={2}>
          <Skeleton animation="wave" />
        </Typography>
        <Typography variant="h3" marginBottom={2}>
          <Skeleton animation="wave" />
        </Typography>
        <Skeleton animation="wave" variant="rectangular" width={210} height={60} />
      </Grid>
      <Grid item xs={12} md={8}>
        {loadingArticle()}
      </Grid>
    </Grid>
  );
}

export default Article;
