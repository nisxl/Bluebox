import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
function App() {
  return (
    <div className="bg-[#efefef]">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          {/* <Route path="contact" element={<ContactPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
