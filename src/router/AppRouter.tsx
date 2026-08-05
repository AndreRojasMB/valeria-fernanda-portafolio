import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLanguage } from "../i18n/useLanguage";

const Home = lazy(() => import("../pages/Home"));
const Branding = lazy(() => import("../pages/Branding"));
const Strategic = lazy(() => import("../pages/Strategic"));
const Gavec = lazy(() => import("../pages/brands/Gavec"));
const BichoRaro = lazy(() => import("../pages/brands/BichoRaro"));
const Syncro = lazy(() => import("../pages/brands/Syncro"));
const HablaPues = lazy(() => import("../pages/brands/HablaPues"));
const Puma = lazy(() => import("../pages/brands/Puma"));

function RouteFallback() {
  const { language } = useLanguage();
  return <div className="route-loading" aria-label={language === "es" ? "Cargando" : "Loading"} />;
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteFallback />}>
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
      </Suspense>
    </BrowserRouter>
  );
}
