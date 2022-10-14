import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RealmAppProvider } from '../RealmApp'
import * as config from '../config.json'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RealmAppProvider appId={config['realm-app-id']}>
      <App />
    </RealmAppProvider>
  </React.StrictMode>
)
