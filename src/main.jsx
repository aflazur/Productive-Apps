import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Apps from "./pages/Apps";
import Installation from "./pages/Installation";
import ErrorPage from "./pages/ErrorPage";
import AppDetailsPage from "./Components/AppDetailsPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: async () => {
          const res = await axios.get("/data.json");
          return res.data;
        },
        element: <Home />,
      },
      {
        path: "apps",
        loader: async () => {
          const res = await axios.get("/data.json");
          return res.data;
        },
        element: <Apps />,
      },
      {
        path: "apps/:id",
        loader: async ({ params }) => {
          const res = await axios.get("/data.json");
          const app = res.data.find((a) => a.id === Number(params.id));
          return app ?? null;
        },
        element: <AppDetailsPage />,
      },
      {
        path: "installation",
        element: <Installation />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer 
    />
  </StrictMode>
);
