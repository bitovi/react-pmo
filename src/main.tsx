import React from "react"
import ReactDOM from "react-dom/client"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Layout from "./Layout"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import OrderDetails from "./pages/OrderDetails"
import OrderHistory from "./pages/OrderHistory"
import RestaurantDetails from "./pages/RestaurantDetails"
import RestaurantList from "./pages/RestaurantList"

const element = document.getElementById("root")
if (!element) {
  throw new Error("Missing element #root")
}

const router = createBrowserRouter([
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
        path: "restaurants",
        element: <RestaurantList />,
      },
      {
        path: "restaurants/:restaurantSlug",
        element: <RestaurantDetails />,
      },
      {
        path: "restaurants/:restaurantSlug/:orderId",
        element: <OrderDetails />,
      },
      {
        path: "order-history",
        element: <OrderHistory />,
      },
    ],
  },
])

ReactDOM.createRoot(element).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
