import React, { useEffect, useState } from 'react'

import { getOrders } from '../../services/orders'

import Orders from './components/Orders/Orders'

export default function OrderHistory() {
  const [ orders, setOrders ] = useState(null)

  useEffect(() => {
    getOrders().then(setOrders)
  }, [])

  function handleDelete(id) {
    console.log('delete', id)
  }

  function handleStatus(id, status) {
    console.log('set status', id, status)
  }

  if (!orders) {
    return null
  }

  return (
    <div className="order-history">
      <div className="order header">
        <address>Name / Address / Phone</address>
        <div className="items">Order</div>
        <div className="total">Total</div>
        <div className="actions">Actions</div>
      </div>

      <Orders
        title="New Orders"
        orders={orders.filter((order) => order.status === 'new')}
        onStatus={handleStatus}
        onDelete={handleDelete}
      />
      <Orders
        title="Preparing"
        orders={orders.filter((order) => order.status === 'preparing')}
        onStatus={handleStatus}
        onDelete={handleDelete}
      />
      <Orders
        title="Out For Delivery"
        orders={orders.filter((order) => order.status === 'delivery')}
        onStatus={handleStatus}
        onDelete={handleDelete}
      />
      <Orders
        title="Delivered"
        orders={orders.filter((order) => order.status === 'delivered')}
        onStatus={handleStatus}
        onDelete={handleDelete}
      />
    </div>
  )
}
