import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
  IconButton,
} from "@mui/material";
import Link from "../Link";

type Anchor = "top" | "left" | "bottom" | "right";
interface SectionProps {
  title: string;
  url: string;
  index: number;
}

export default function NavDrawer(props) {
  const { sections, anchor } = props;

  const [state, setState] = React.useState({
    anchor: false,
  });

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const handleListItemClick = (
    _event: any,
    index: React.SetStateAction<number>
  ) => {
    setSelectedIndex(index);
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {sections.map((section) => (
          <ListItemButton
            component={Link}
            href={section.url}
            key={section.index}
            onClick={(event: any) => handleListItemClick(event, section.index)}
            selected={selectedIndex === section.index}
          >
            <ListItemText primary={section.title} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment key={anchor}>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={toggleDrawer(anchor, true)}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </Drawer>
    </React.Fragment>
  );
}
