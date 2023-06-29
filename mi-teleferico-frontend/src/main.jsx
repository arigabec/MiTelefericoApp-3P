import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import theme from './theme/theme.js'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage.jsx'
import InfoPage from './pages/InfoPage.jsx'
import SearchPage from './pages/SearchPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    children: [
      {
        path: "info",
        element: <InfoPage/>
      },
      {
        path: "buscar",
        element: <SearchPage/>
      }
    ]
  },
  {
    path: "/*",
    element: <Navigate to = "/info"/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
