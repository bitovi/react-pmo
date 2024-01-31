import { NavLink, Outlet } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import "place-my-order-assets/css/place-my-order-assets.css"
import "./styles.css"

const Layout: React.FC = () => {
  return (
    <>
      <header>
        <nav>
          <h1>place-my-order.com</h1>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/restaurants">Restaurants</NavLink>
            </li>
            <li>
              <NavLink to="/orders">Order History</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  )
}

export default Layout
