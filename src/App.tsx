import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Abonnementen from "./pages/Abonnementen";
import Pakketten from "./pages/Pakketten";
import Cadeau from "./pages/Cadeau";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/abonnementen" element={<Abonnementen />} />
      <Route path="/pakketten" element={<Pakketten />} />
      <Route path="/cadeau" element={<Cadeau />} />
    </Routes>
  );
}
