import { useGlobalContext } from "../context/articleContext";
import { Timeline, timelineItemClasses } from "@mui/lab";
import ArticleSummary from "../components/articleSummary";
import { Grid, Skeleton, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

function Landing() {
  const { articleSummaries } = useGlobalContext();
  return (
    <>
      <Helmet>
        <title>Coders Scratch Book</title>
        <meta name="description" content="The scratchbook of an average developer and tinkerer" />;
        <meta name="keywords" content="react, blog, tinkerer, developer, iot, article" />
        <meta name="author" content="Joseph Garner" />
        <meta property="og:url" content="https://www.codersscratchbook.com/" />
      </Helmet>
      {articleSummaries.length !== 0 ? (
        <Grid container spacing={2} marginTop={5}>
          <Grid item xs={12} marginBottom={5}>
            <Typography variant="h3" sx={{ display: { xs: "none", md: "flex" } }} marginLeft={2}>
              Posts
            </Typography>
            <Typography variant="h3" sx={{ display: { xs: "flex", md: "none" } }}>
              Posts
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Timeline
              sx={{
                display: { xs: "none", md: "flex" },
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
            >
              {articleSummaries.map((article, index) => {
                return (
                  <ArticleSummary
                    key={article.documentId}
                    article={article}
                    last={index === articleSummaries.length - 1}
                  />
                );
              })}
            </Timeline>
            <Grid container spacing={2} sx={{ display: { xs: "flex", md: "none" } }}>
              {articleSummaries.map((article) => {
                return <ArticleSummary key={article.documentId} article={article} />;
              })}
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={2} marginTop={5}>
          <Grid item xs={12} marginBottom={5}>
            <Typography variant="h5">Loading Posts... </Typography>
          </Grid>
          <Grid item xs={6} marginBottom={5}>
            <Typography variant="subtitle1">
              <Skeleton animation="wave" />
            </Typography>
            <Typography variant="h2" marginBottom={2}>
              <Skeleton animation="wave" />
            </Typography>
          </Grid>
          <Grid item xs={6} marginBottom={5}>
            <Skeleton animation="wave" variant="rectangular" width={"100%"} height={300} />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default Landing;
