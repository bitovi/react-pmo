import { Link, Outlet } from "react-router-dom"

const Layout: React.FC = () => {
  return (
    <div>
      <p>PMO</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/restaurants">Restaurants</Link>
        </li>
        <li>
          <Link to="/orders">Orders</Link>
        </li>
        <li>---</li>
        <li>
          <Link to="/restaurants/crab-shack">Restaurant Details</Link>
        </li>
        <li>
          <Link to="/orders/O1TKTFJkTP3Y3WLe">Order Details</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default Layout
