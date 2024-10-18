import "./App.css";
import Container1 from "./components/Container1";
import Container2 from "./components/Container2";
import Container3 from "./components/Container3";
import Container4 from "./components/Container4";
import Container5 from "./components/Container5";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ReactLenis from "lenis/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";

function App() {
  return (
    <ReactLenis root>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
            <Header />
            <Container1 />
            <Container2 />
            <Container3 />
            <Container4 />
            <Container5 />
          </>
          } />
          <Route path="/projects" element={<Projects />} />
        </Routes>
          <Footer />
      </Router>
    </ReactLenis>
  );
}

export default App;
