import { Card, CardContent, CardMedia, Chip, Grid, Stack, Typography } from "@mui/material";
import { TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
import { ArticleSummary } from "../types";
import { useNavigate } from "react-router-dom";

type Props = {
  article: ArticleSummary;
};

function ArticleSummary({ article }: Props) {
  const navigate = useNavigate();

  type NavProps = {
    to: string;
  };

  const handleNav = ({ to }: NavProps) => {
    navigate(`/article/${to}`);
  };

  return (
    <>
      <TimelineItem
        sx={{
          display: { xs: "none", md: "flex" },
          marginBottom: "4rem",
        }}
      >
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <Grid container spacing={2} marginLeft={2}>
            <Grid item xs={4}>
              <Grid container spacing={2} direction={"column"}>
                <Typography variant="caption">1st of Feb 2023</Typography>
                <Typography variant="h4">{article.title}</Typography>
                <Stack direction="row" spacing={1}>
                  <Chip label="3D Print" />
                  <Chip label="IOT" />
                  <Chip label="Rough Around the Edges" />
                </Stack>
              </Grid>
            </Grid>
            <Grid xs={8}>
              <Card onClick={() => handleNav({ to: article.postId })}>
                <CardMedia
                  sx={{ height: 320 }}
                  image={`/assets/${article.postId}/featured.jpg`}
                  title="My Desktop Pal featured image"
                />
                <CardContent>
                  <Typography variant="body1">{article.summary}</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TimelineContent>
      </TimelineItem>
      <Grid container spacing={2} marginLeft={2} sx={{ display: { xs: "flex", md: "none" }, marginBottom: "2rem" }}>
        <Grid item xs={12}>
          <Typography variant="caption">1st of Feb 2023</Typography>
          <Typography variant="h4">{article.title}</Typography>
          <Stack direction="row" spacing={1}>
            <Chip label="3D Print" />
            <Chip label="IOT" />
            <Chip label="Rough Around the Edges" />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <img
            style={{ height: 320, width: "100%", objectFit: "cover" }}
            src={`/assets/${article.postId}/featured.jpg`}
            alt="My Desktop Pal featured image"
          />
        </Grid>
        <CardMedia
          sx={{ height: 320 }}
          image={`/assets/${article.postId}/featured.jpg`}
          title="My Desktop Pal featured image"
        />
        <CardContent>
          <Typography variant="body1">{article.summary}</Typography>
        </CardContent>
      </Grid>
    </>
  );
}

export default ArticleSummary;
