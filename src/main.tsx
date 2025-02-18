import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Apply from './Components/Apply/Apply.tsx'
import Enquries from './Components/Enduries/Enquries.tsx'
import StudentRegistration from './Components/StudentRegistration/StudentRegistration.tsx'
import Login from './Components/Login/Login.tsx'
import ConstProvider from './Context/Context.tsx'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.tsx'

const queryClient = new QueryClient()

const root = createBrowserRouter([
  {
    path: "/",
    element:<PrivateRoute><App/></PrivateRoute>,
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
  {
    path:"/login",
    element:<Login/>
  }

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <ConstProvider>
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={root}/>
    </QueryClientProvider>
  </ConstProvider>
  </StrictMode>,
)
