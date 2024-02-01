import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Article() {
  const [writtenWord, setArticle] = useState();

  const params = useParams();
  const articleId = params.articleId;

  useEffect(() => {
    import(`../posts/${articleId}.mdx`)
      .then((module) => {
        setArticle(module.default);
      })
      .catch((err) => {
        console.log(err);
        setArticle(undefined);
      });
  }, [articleId]);

  return (
    <Grid container spacing={2} justifyContent={"center"} style={{ marginBottom: "5rem" }}>
      <Grid item xs={12} md={8}>
        <Typography variant="h3">{articleId}</Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        {writtenWord ? writtenWord : "Not Found"}
      </Grid>
    </Grid>
  );
}

export default Article;
