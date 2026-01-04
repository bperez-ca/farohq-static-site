import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import Demo from './pages/Demo.tsx';
import TestUI from './pages/TestUI.tsx';
import Pricing from './pages/Pricing.tsx';
import Products from './pages/Products.tsx';
import Docs from './pages/Docs.tsx';
import Blog from './pages/Blog.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/test-ui" element={<TestUI />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
