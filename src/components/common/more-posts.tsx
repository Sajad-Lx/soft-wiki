import { Box, Grid, Paper, Typography } from "@mui/material";
import Link from "./Link";
import Post from "../../types/post";
import Image from "next/image";

type Props = {
  posts: Post[];
};

const gradient1: string = "#000000b3";
const gradient2: string = "#ffffff00";

const MorePosts = ({ posts }: Props) => {
  return (
    <section>
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {posts.map((post) => (
          <Grid key={post.slug} item sm={12} md={6}>
            <Paper
              sx={{
                minHeight: 200,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                color: post.coverTextColor ? post.coverTextColor : "#fff",
                textShadow: "3px 3px 5px #000",
                borderRadius: "10px",
                background: `linear-gradient(
              to top,
              ${gradient1} 0%,
              ${gradient2} 90%)
              right center,
              url(${post.coverImage}) center / cover no-repeat`,
              }}
            >
              {
                <Image
                  style={{ display: "none" }}
                  src={post.coverImage}
                  alt={`Cover Image for ${post.title}`}
                />
              }
              <Grid container>
                <Link
                  href="/posts/[slug]"
                  as={`/posts/${post.slug}`}
                  noLinkStyle
                >
                  <a>
                    <Box
                      sx={{
                        p: { xs: 3, md: 4 },
                      }}
                    >
                      <Typography
                        component="h5"
                        variant="h5"
                        color="inherit"
                        gutterBottom
                      >
                        {post.title}
                      </Typography>
                      <Typography> - {post.author.name}</Typography>
                    </Box>
                  </a>
                </Link>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default MorePosts;
