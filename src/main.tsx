import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App"

const element = document.getElementById("root")
if (!element) {
  throw new Error("Missing element #root")
}

ReactDOM.createRoot(element).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
