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
          <Link to="/order-history">Order History</Link>
        </li>
        <li>---</li>
        <li>
          <Link to="/restaurants/foo">Restaurant Details</Link>
        </li>
        <li>
          <Link to="/restaurants/foo/1">Order Details</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default Layout
