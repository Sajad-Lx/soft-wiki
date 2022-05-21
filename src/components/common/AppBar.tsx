import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Tooltip, useTheme } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import NavTabs from "./ui/NavTabs";
import NavDrawer from "./ui/NavDrawer";

interface AppBarProps {
  title: string;
  changeMode: any;
}

const appSections = [
  { title: "Home", url: "/", index: 0 },
  { title: "Trending", url: "/trending", index: 1 },
  { title: "Latest", url: "/latest", index: 2 },
  { title: "About", url: "/about", index: 4 },
];

const ResponsiveAppBar: React.FC<AppBarProps> = ({ title, changeMode }) => {
  const theme = useTheme();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="static" sx={{ marginBottom: "1rem" }}>
      <Container maxWidth="xl">
        <Toolbar
          variant="dense"
          disableGutters
          sx={{ display: {xs: "flex"}, justifyContent: "space-between" }}
        >
          <NavDrawer sections={appSections} anchor="left" />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {title}
          </Typography>

          {/* Desktop mode */}
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <NavTabs sections={appSections} />
          </Box>

          {/* User Management */}
          {/* <Box sx={{ flexGrow: 0 }}> 
            <SideMenu />
          </Box> */}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={"Change " + theme.palette.mode + " theme"}>
              <IconButton sx={{ ml: 1 }} onClick={changeMode} color="inherit">
                {theme.palette.mode === "dark" ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
