// src/App.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills";

function App() {
  const { isDarkMode } = useTheme();

  return (
    <Router>
      <div
        className={`flex flex-col min-h-screen ${
          isDarkMode ? "dark" : "light"
        }`}
      >
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

const MainApp = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default MainApp;