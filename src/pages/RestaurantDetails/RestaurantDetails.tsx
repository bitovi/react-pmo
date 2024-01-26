import { useParams } from "react-router-dom"

import { getRestaurant } from "@shared/services/api"

const RestaurantDetails: React.FC = () => {
  const params = useParams() as { restaurantSlug: string }
  console.log(params)

  const restaurant = { name: "" }

  return (
    <div>
      <h1>Restaurant Details!</h1>
      <h2>{restaurant.name}</h2>
    </div>
  )
}

export default RestaurantDetails
