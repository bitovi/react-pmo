import { useParams } from "react-router-dom"

import { getOrder } from "@shared/services/api"

const OrderDetails: React.FC = () => {
  const params = useParams() as { orderId: string }
  console.log(params)

  const order = { name: "" }

  return (
    <div>
      <h1>Order Details!</h1>
      <h2>{order.name}</h2>
    </div>
  )
}

export default OrderDetails
