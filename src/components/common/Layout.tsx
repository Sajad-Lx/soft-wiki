import { Container, ThemeProvider } from "@mui/material";
import React from "react";
import ResponsiveAppBar from "./AppBar";
import Footer from "./footer";
import { dark, light } from "../themes/default";
import { APP_NAME, DESCRIPTION } from "../../lib/constants";
// import Meta from './meta'

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  // For Theme
  const [mode, setMode] = React.useState(true);
  const changeMode = () => {
    setMode(!mode);
  };

  return (
    <>
      {/* <Meta /> */}
      <ThemeProvider theme={mode ? dark : light}>
        {/* Navigation Bar */}
        <ResponsiveAppBar title={APP_NAME} changeMode={changeMode} />
        <Container maxWidth="lg">{children}</Container>
        <Footer title={APP_NAME} description={DESCRIPTION} />
      </ThemeProvider>
    </>
  );
};

export default Layout;
