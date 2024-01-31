import React from "react"
import ReactDOM from "react-dom/client"

import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom"

import Layout from "./Layout"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import OrderDetails from "./pages/OrderDetails"
import OrderHistory from "./pages/OrderHistory"
import RestaurantDetails from "./pages/RestaurantDetails"
import RestaurantList from "./pages/RestaurantList"
import RestaurantOrder from "./pages/RestaurantOrder"

const element = document.getElementById("root")
if (!element) {
  throw new Error("Missing element #root")
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "orders",
          element: <OrderHistory />,
        },
        {
          path: "orders/:id",
          element: <OrderDetails />,
        },
        {
          path: "restaurants",
          element: <RestaurantList />,
        },
        {
          path: "restaurants/:slug",
          element: <RestaurantDetails />,
        },
        {
          path: "restaurants/:slug/order",
          element: <RestaurantOrder />,
        },
        {
          path: "order-history",
          loader: () => redirect("/orders"),
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
)

ReactDOM.createRoot(element).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
