import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import AppMain from './AppMain'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AppMain/>
  </BrowserRouter>
)
