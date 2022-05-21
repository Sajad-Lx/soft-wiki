import { Box, Grid, Link, Paper, Typography } from "@mui/material";
import Author from "../types/author";

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

export default function Landing(props) {
  // const { post } = props;
  return (
    <>
    <Paper
      elevation={8}
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mt: 1,
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        //   backgroundImage: `url(${post.image})`,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {/* {post.title} */}
              Hello
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {/* {post.description} */}
              Description
            </Typography>
            <Link variant="subtitle1" href="#">
              {/* {post.linkText} */}
              link
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
    </>
  );
}
