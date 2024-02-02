import { Button, Card, CardContent, CardMedia, Chip, Grid, Stack, Typography } from "@mui/material";
import { TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
import { ArticleSummary } from "../types";
import { useNavigate } from "react-router-dom";
import { formateDate } from "../utils/formatDate";

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
                <Typography variant="caption" marginBottom={2}>
                  {formateDate(article.posted.seconds)}
                </Typography>
                <Typography variant="h4" marginBottom={2}>
                  {article.title}
                </Typography>
                <Stack direction="row" spacing={1}>
                  {article.tags.map((tag) => {
                    return <Chip key={"d" + tag} color="primary" label={tag} />;
                  })}
                </Stack>
              </Grid>
            </Grid>
            <Grid item xs={8}>
              <Card onClick={() => handleNav({ to: article.postId })}>
                <CardMedia
                  sx={{ height: 320 }}
                  image={`/assets/${article.postId}/featured.jpg`}
                  title="My Desktop Pal featured image"
                />
                <CardContent>
                  <Grid container direction={"column"} spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="body1">{article.summary}</Typography>
                    </Grid>
                    <Grid item xs={12} display={"flex"} justifyContent={"flex-end"}>
                      <Button variant="contained" disableElevation>
                        Read on
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TimelineContent>
      </TimelineItem>
      <Grid container spacing={2} marginLeft={2} sx={{ display: { xs: "flex", md: "none" }, marginBottom: "2rem" }}>
        <Grid item xs={12}>
          <Typography variant="caption" marginBottom={2}>
            {formateDate(article.posted.seconds)}
          </Typography>
          <Typography variant="h4" marginBottom={2}>
            {article.title}
          </Typography>
          <Stack direction="row" spacing={1}>
            {article.tags.map((tag) => {
              return <Chip key={tag} color="primary" label={tag} />;
            })}
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Card onClick={() => handleNav({ to: article.postId })}>
            <CardMedia
              sx={{ height: 320 }}
              image={`/assets/${article.postId}/featured.jpg`}
              title="My Desktop Pal featured image"
            />
            <CardContent>
              <Grid container direction={"column"} spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="body1">{article.summary}</Typography>
                </Grid>
                <Grid item xs={12} display={"flex"} justifyContent={"flex-end"}>
                  <Button variant="contained" disableElevation>
                    Read on
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default ArticleSummary;
