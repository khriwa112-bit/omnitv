import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Abonnementen from "./pages/Abonnementen";
import Pakketten from "./pages/Pakketten";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/abonnementen" element={<Abonnementen />} />
      <Route path="/pakketten" element={<Pakketten />} />
    </Routes>
  );
}
