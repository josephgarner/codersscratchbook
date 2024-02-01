import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { analytics } from "./firebase.ts";
import Context from "./context/articleContext.tsx";
import { CssBaseline } from "@mui/material";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";

analytics.app.automaticDataCollectionEnabled = true;

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "rgba(255, 255, 255, 0.7)",
    },
  },
  typography: {
    fontFamily: ["Titillium Web", " sans-serif"].join(","),
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <Context>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Context>
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>
);
