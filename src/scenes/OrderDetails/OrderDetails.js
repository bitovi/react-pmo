import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getOrder } from '../../services/orders'

import Address from '../../components/Address/Address'

export default function OrderDetails() {
  const { orderId } = useParams()
  const [ order, setOrder ] = useState(null)

  useEffect(() => {
    getOrder(orderId).then(setOrder)
  }, [ orderId ])

  if (!order) {
    return null
  }

  return (
    <div className="order-details">
      <h3>Order from {order.name}</h3>
      <div className="subheader">Confirmation Number: {order._id}</div>

      <h4>Items ordered:</h4>
      <ul className="list-group panel">
        {order.items.map(({ name, price }, key) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={key} className="list-group-item">
            {name} <span className="badge">${price}</span>
          </li>
        ))}

        <li className="list-group-item">
          Total <span className="badge">${order.items.reduce((sum, { price }) => sum + price, 0)}</span>
        </li>
      </ul>

      <div>
        <Address
          name={order.name}
          phone={order.phone}
          {...order.address}
        />
      </div>
    </div>
  )
}
