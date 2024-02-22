import { Button, Card, CardContent, CardMedia, Chip, Grid, Typography } from "@mui/material";
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
import { ArticleSummary } from "../types";
import { useNavigate } from "react-router-dom";
import { formateDate } from "../utils/formatDate";

type Props = {
  article: ArticleSummary;
  last?: boolean;
};

function ArticleSummary({ article, last = false }: Props) {
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
        }}
      >
        <TimelineSeparator>
          <TimelineDot />
          {!last ? <TimelineConnector /> : null}
        </TimelineSeparator>
        <TimelineContent>
          <Grid container spacing={2} marginLeft={2} marginBottom={12}>
            <Grid item xs={4}>
              <Grid container spacing={2} direction={"column"}>
                <Typography variant="caption" marginBottom={2}>
                  {formateDate(article.posted.seconds)}
                </Typography>
                <Typography variant="h4" marginBottom={2}>
                  {article.title}
                </Typography>
                <Grid container spacing={1}>
                  {article.tags.map((tag) => {
                    return (
                      <Grid item key={"d" + tag}>
                        <Chip color="primary" label={tag} />
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={8}>
              <Card>
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
                      <Button variant="contained" disableElevation onClick={() => handleNav({ to: article.postId })}>
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
      <Grid container spacing={2} marginLeft={0} sx={{ display: { xs: "flex", md: "none" }, marginBottom: "2rem" }}>
        <Grid item xs={12}>
          <Typography variant="caption" marginBottom={2}>
            {formateDate(article.posted.seconds)}
          </Typography>
          <Typography variant="h4" marginBottom={2}>
            {article.title}
          </Typography>
          <Grid container spacing={1}>
            {article.tags.map((tag) => {
              return (
                <Grid item key={tag}>
                  <Chip color="primary" label={tag} />
                </Grid>
              );
            })}
          </Grid>
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
                  <Typography variant="body1">{article.summary.slice(0, 250)}...</Typography>
                </Grid>
                <Grid item xs={12} display={"flex"} justifyContent={"flex-end"}>
                  <Button variant="contained" disableElevation onClick={() => handleNav({ to: article.postId })}>
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
