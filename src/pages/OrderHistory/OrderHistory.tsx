import { Link } from "react-router-dom"

import { getOrders } from "@shared/services/api"

const OrderHistory: React.FC = () => {
  const orders = []

  return (
    <div>
      <h1>Order History!</h1>
      <ul>
        {orders.map(({ id, name }) => (
          <li key={id}>
            <Link to={`/orders/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default OrderHistory
