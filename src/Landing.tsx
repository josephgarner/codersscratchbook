import { useGlobalContext } from "./context/articleContext";
import { Timeline, timelineItemClasses } from "@mui/lab";
import ArticleSummary from "./components/articleSummary";
import { Grid, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

function Landing() {
  const { articleSummaries } = useGlobalContext();

  const featured = articleSummaries[0];

  if (featured) {
    return (
      <>
        <Helmet>
          <title>Coders Scratch Book</title>
          <meta name="description" content="The scratchbook of an average developer and tinkerer" />;
          <meta name="keywords" content="react, blog, tinkerer, developer, iot, article" />
          <meta name="author" content="Joseph Garner" />
          <meta property="og:url" content="https://www.codersscratchbook.com/" />
        </Helmet>
        <Grid container spacing={2} marginTop={5}>
          <Grid item xs={12} marginBottom={5}>
            <Typography variant="h3" sx={{ display: { xs: "none", md: "flex" } }} marginLeft={2}>
              Posts
            </Typography>
            <Typography variant="h3" sx={{ display: { xs: "flex", md: "none" } }} marginLeft={2}>
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
              {articleSummaries.map((article) => {
                return <ArticleSummary key={article.documentId} article={article} />;
              })}
            </Timeline>
            <Grid container spacing={2} sx={{ display: { xs: "flex", md: "none" } }}>
              {articleSummaries.map((article) => {
                return <ArticleSummary key={article.documentId} article={article} />;
              })}
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }

  return null;
}

export default Landing;