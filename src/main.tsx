import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthProvider } from './auth-context'
import { BrowserRouter } from 'react-router-dom'
import { Providers } from './providers' // <-- import your Providers
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers> {/* <-- wrap your app in Providers */}
        <AuthProvider>
          <App />
        </AuthProvider>
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
)