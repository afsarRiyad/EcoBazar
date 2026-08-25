import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Toaster position="bottom-right" toastOptions={{ duration: 2000, style: { fontFamily: 'Poppins, sans-serif', fontSize: '14px' } }} />
    </BrowserRouter>
  </Provider>,
)
