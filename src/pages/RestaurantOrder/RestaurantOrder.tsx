import { useParams } from "react-router-dom"

import { useRestaurant } from "./hooks"

const RestaurantOrder: React.FC = () => {
  const params = useParams() as { slug: string }

  const restaurant = useRestaurant(params.slug)

  if (restaurant.pending) {
    return <div className="loading"></div>
  }

  if (restaurant.error || !restaurant.data) {
    return <div className="error">Error</div>
  }

  return (
    <div className="order-form">
      <h1>Order from {restaurant.data.name}!</h1>
    </div>
  )
}

export default RestaurantOrder
