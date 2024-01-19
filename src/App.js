import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Blogs from "./pages/BlogsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/blogs" element={<Blogs />} />
    </Routes>
  );
}
export default App;
