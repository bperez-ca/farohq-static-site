import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Features } from './components/Features';
import { LatamWedge } from './components/LatamWedge';
import { SocialProof } from './components/SocialProof';
import { Pricing } from './components/Pricing';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { PricingPageV2 } from './pages/PricingPageV2';

function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <LatamWedge />
        <SocialProof />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<Navigate to="/pricing-v2" replace />} />
        <Route path="/pricing-v2" element={<PricingPageV2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
