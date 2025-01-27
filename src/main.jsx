import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Auth0Provider } from '@auth0/auth0-react'
import { HashRouter } from 'react-router-dom'

// npm install @auth0/auth0-react    ->para autenticación

const domain = "dev-kubvfpktkd08timt.us.auth0.com"
const clientId = "bc4GJ0PI4rYGpl6uRqPf9V1JAaTcIFGB"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: window.location.origin
        }}

      >
        <App />
      </Auth0Provider>
    </HashRouter>
  </React.StrictMode>,
)
