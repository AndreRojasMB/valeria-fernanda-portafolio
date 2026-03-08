import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Branding from "../pages/Branding";
import Strategic from "../pages/Strategic";
import Gavec from "../pages/brands/Gavec";
import BichoRaro from "../pages/brands/BichoRaro";
import Syncro from "../pages/brands/Syncro";
import HablaPues from "../pages/brands/HablaPues";
import Puma from "../pages/brands/Puma";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/strategic" element={<Strategic />} />
        <Route path="/branding/gavec" element={<Gavec />} />        
        <Route path="/branding/bichoraro" element={<BichoRaro />} />
        <Route path="/strategic/syncro" element={<Syncro />} />
        <Route path="/strategic/habla-pues" element={<HablaPues />} />
        <Route path="/strategic/puma" element={<Puma />} />
      </Routes>
    </BrowserRouter>
  );
}