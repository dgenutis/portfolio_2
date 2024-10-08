import "./App.css";
import Container1 from "./components/Container1";
import Container2 from "./components/Container2";
import Container3 from "./components/Container3";
import Container4 from "./components/Container4";
import Container5 from "./components/Container5";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ReactLenis from "lenis/react";

function App() {
  return (
    <ReactLenis root>
      <Header />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Footer />
    </ReactLenis>
  );
}

export default App;
