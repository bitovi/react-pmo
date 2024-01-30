import { useParams } from "react-router-dom"

const OrderDetails: React.FC = () => {
  const params = useParams() as { id: string }
  console.log(params)

  return (
    <div>
      <h1>Order Details!</h1>
    </div>
  )
}

export default OrderDetails
