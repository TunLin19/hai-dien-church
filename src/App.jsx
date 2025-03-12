import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";

function App() {
  const [showConfirm, setShowConfirm] = useState(true);

  useEffect(() => {
    if (showConfirm) {
      const userConfirmed = window.confirm(
        "Chào mừng bạn đến với Giáo xứ Hải Điền. Thông tin trong đây có thể không đúng!"
      );
      if (!userConfirmed) {
        window.location.href = "https://google.com";
      }
      setShowConfirm(false);
    }
  }, [showConfirm]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
