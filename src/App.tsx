import { Container } from "@mui/material";
import Landing from "./Landing";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import NavBar from "./components/navBar";
import Article from "./pages/Article";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/article/:articleId" element={<Article />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
