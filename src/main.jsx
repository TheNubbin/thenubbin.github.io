import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import Terms from './terms.jsx'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/legal" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
