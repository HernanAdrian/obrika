import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import LandingSegmento from './pages/LandingSegmento'
import ComingSoon from './pages/ComingSoon'
import ScrollToTop from './components/ScrollToTop'
import { construccion, hvac, electricidad, fontaneria, mantenimiento } from './data/segments.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/construccion" element={<LandingSegmento segment={construccion} />} />
        <Route path="/hvac" element={<LandingSegmento segment={hvac} />} />
        <Route path="/electricidad" element={<LandingSegmento segment={electricidad} />} />
        <Route path="/fontaneria" element={<LandingSegmento segment={fontaneria} />} />
        <Route path="/mantenimiento" element={<ComingSoon segment={mantenimiento} />} />
        {/* Redirect legacy root landing to construccion */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
