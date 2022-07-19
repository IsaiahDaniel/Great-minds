import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import GlobalStyles from "./global";
import Footer from "./components/Footer";
import Insights from "./pages/Insights";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/insights" element={<Insights />} />
          </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

