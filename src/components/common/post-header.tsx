import { Box, Grid, Paper, Typography } from "@mui/material";
import Author from "../../types/author";
import DateFormatter from "./date-formatter";
import AvatarAuthor from "./avatar";

type Props = {
  title: string;
  coverImage: string;
  coverTextColor?: string;
  date: string;
  author: Author;
};

const gradient1: string = "#000000b3";
const gradient2: string = "#ffffff00";

const PostHeader = ({
  title,
  coverImage,
  coverTextColor = "#fff",
  date,
  author,
}: Props) => {
  return (
    <section>
      <Paper
        sx={{
          pt: 20,
          position: "relative",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          color: coverTextColor,
          mb: 4,
          textShadow: "3px 3px 5px #000",
          borderRadius: "10px",
          background: `linear-gradient(
            to top, 
            ${gradient1} 0%, 
            ${gradient2} 90%) 
            right center, 
            url(${coverImage}) center / cover no-repeat`,
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
          // backgroundPosition: "center",
        }}
      >
        <Grid item xs>
          <Grid item xs>
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                pb: { md: 0 },
              }}
            >
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                {title}
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs
            sx={{ p: { xs: 3, md: 4 }, pb: { md: 2 } }}
            container
            justifyContent="space-around"
            alignItems="flex-start"
          >
            <Grid item xs>
              <Typography variant="h6" gutterBottom>
                <DateFormatter dateString={date} />
              </Typography>
            </Grid>
            <Grid item>
              <AvatarAuthor name={author.name} picture={author.picture} />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </section>
  );
};

export default PostHeader;
