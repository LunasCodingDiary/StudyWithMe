import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Navbar from "./components/Navbar";
import Routes from "./Routes";
import Footer from "./components/Footer";

// import { fetchMusic } from "./store/products";

import theme from "./theme";

const App = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchProducts());
//     dispatch(fetchBrands());
//   }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Routes />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
