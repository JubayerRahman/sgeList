import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Apply from './Components/Apply/Apply.tsx'
import Enquries from './Components/Enduries/Enquries.tsx'
import StudentRegistration from './Components/StudentRegistration/StudentRegistration.tsx'

const queryClient = new QueryClient()

const root = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      
  {
    path: "/",
    element:<Apply/>
  },
  {
    path: "/enquires",
    element:<Enquries/>
  },
  {
    path: "/students",
    element:<StudentRegistration/>
  },
    ]
  },

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={root}/>
    </QueryClientProvider>
  </StrictMode>,
)
