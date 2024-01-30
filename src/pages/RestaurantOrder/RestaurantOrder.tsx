import { useParams } from "react-router-dom"

const RestaurantOrder: React.FC = () => {
  const params = useParams() as { slug: string }
  console.log(params)

  return (
    <div>
      <h1>Order Form!</h1>
    </div>
  )
}

export default RestaurantOrder
