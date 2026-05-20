import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { AuthProvider } from './contexts/AuthContext.jsx'
import { NotifProvider } from './contexts/NotifContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <NotifProvider>
        <App />
      </NotifProvider>
    </AuthProvider>
  </StrictMode>,
)
