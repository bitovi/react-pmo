import { useOrders } from "@shared/services/pmo"

import OrderList from "./OrderList"

const OrderHistory: React.FC = () => {
  const orders = useOrders()

  if (orders.pending) {
    return <div className="loading"></div>
  }

  if (orders.error || !orders.data) {
    return <div className="error">Error</div>
  }

  return (
    <div className="order-history">
      <div className="order header">
        <address>Name / Address / Phone</address>
        <div className="items">Order</div>
        <div className="total">Total</div>
        <div className="actions">Action</div>
      </div>

      <OrderList
        title="New Orders"
        orders={orders.data.filter(({ status }) => status === "new")}
        empty="No new orders"
      />

      <OrderList
        title="Preparing"
        orders={orders.data.filter(({ status }) => status === "preparing")}
        empty="No orders preparing"
      />

      <OrderList
        title="Out for Delivery"
        orders={orders.data.filter(({ status }) => status === "delivery")}
        empty="No orders are being delivered"
      />

      <OrderList
        title="Delivered"
        orders={orders.data.filter(({ status }) => status === "delivered")}
        empty="No delivered orders"
      />
    </div>
  )
}

export default OrderHistory
