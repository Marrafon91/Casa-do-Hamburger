import './index.css'
import App from './App.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <App />
  </StrictMode>,
)
