import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap'
import './assets/all.scss'
import { RouterProvider } from 'react-router-dom'
import router from './router'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
