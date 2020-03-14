import PropTypes from 'prop-types'
import React from 'react'
import { Link, useLocation, matchPath } from 'react-router-dom'
import cx from 'classnames'

export default function Layout({ children, ...props }) {
  const location = useLocation()
  function isActive(path, exact = false) {
    return !!matchPath(location.pathname, { path, exact })
  }

  return (
    <div {...props}>
      <header>
        <nav>
          <h1>place-my-order.com</h1>
          <ul>
            <li className={cx({ active: isActive('/', true) })}>
              <Link to="/">Home</Link>
            </li>
            <li className={cx({ active: isActive('/restaurants') })}>
              <Link to="/restaurants">Restaurants</Link>
            </li>
            <li className={cx({ active: isActive('/order-history') })}>
              <Link to="/order-history">Order History</Link>
            </li>
          </ul>
        </nav>
      </header>

      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
