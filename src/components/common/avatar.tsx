import { Avatar, Divider, Stack, Typography } from "@mui/material";

type Props = {
  name: string;
  picture: string;
};

const AvatarAuthor = ({ name, picture }: Props) => {
  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={1}
    >
      <Avatar alt={name} src={picture} />
      <Typography variant="h5" gutterBottom sx={{ alignSelf: "center" }}>
        {name}
      </Typography>
    </Stack>
  );
};

export default AvatarAuthor;
