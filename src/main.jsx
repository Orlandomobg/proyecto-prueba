import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/css/index.css'
import App from './components/App.jsx'
import { GlobalProvider } from '../context/GlobalContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalProvider> 
    <App />
    </GlobalProvider>
  </StrictMode>,
) // se encierra app adentro de global
