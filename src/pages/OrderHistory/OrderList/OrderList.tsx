import type { Order } from "@shared/services/pmo"

import { Link } from "react-router-dom"

import { statuses, titles } from "@shared/services/pmo"

const OrderList: React.FC<{
  title: string
  orders: Order[]
  empty: string
}> = ({ title, orders, empty }) => {
  if (orders.length === 0) {
    return (
      <>
        <h4>{title}</h4>
        <div className="order empty">{empty}</div>
      </>
    )
  }

  return (
    <>
      <h4>{title}</h4>

      {orders.map(({ _id, status, name, address, phone, items }) => {
        const nextStatus = statuses[statuses.indexOf(status) + 1]

        return (
          <div key={_id} className={`order ${status}`}>
            <address>
              {name}
              <br />
              {address}
              <br />
              {phone}
            </address>

            <div className="items">
              <ul>
                {items.map(({ name }) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>

            <div className="total">{items.length}</div>

            <div className="actions">
              <span className="badge">{titles[status]}</span>

              <p className="action">
                Mark as:
                <button onClick={() => console.log("next", _id, nextStatus)}>
                  [Next]
                </button>
              </p>

              <p className="action">
                <Link to={`/orders/${_id}`}>View Details</Link>
              </p>

              <p className="action">
                <button onClick={() => console.log("delete", _id)}>
                  Delete
                </button>
              </p>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default OrderList
