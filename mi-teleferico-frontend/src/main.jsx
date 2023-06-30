import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme.js";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import InfoPage from "./pages/InfoPage.jsx";
import SearchPage from "./pages/SearchPage";
import LinePage from "./pages/LinePage";
import { getLineas } from "./services/service";
import SuggestionPage from "./pages/SuggestionPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "info",
        element: <InfoPage />,
      },
      {
        path: "buscar",
        element: <SearchPage />,
      },
      {
        path: "sugerencia",
        element: <SuggestionPage />,
      },
      {
        path: "linea/:id",
        element: <LinePage />,
        errorElement: <Navigate to="/info" />,
        loader: async ({ params }) => {
          const { id } = params;
          if (id <= 10) {
            const { data } = await getLineas();
            return data.filter((line) => id == line.id);
          }
        },
      },
    ],
  },
  {
    path: "/*",
    element: <Navigate to="/info" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
