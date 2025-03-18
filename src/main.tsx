import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Home, About, CreatePlan, NotFound} from './components/routes'
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import './index.css'
import Navbar from './components/organism/Navbar';
import Footer from './components/organism/Footer';
import ScrollToTop from './ultils/ScrollToTop';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/create-plan" element={<CreatePlan />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
)
