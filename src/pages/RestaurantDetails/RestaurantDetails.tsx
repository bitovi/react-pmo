import { Link, useParams } from "react-router-dom"

import RestaurantHeader from "@shared/components/RestaurantHeader"
import { useRestaurant } from "@shared/services/pmo"

const RestaurantDetails: React.FC = () => {
  const params = useParams() as { slug: string }

  const restaurant = useRestaurant(params.slug)

  if (restaurant.pending) {
    return <div className="loading"></div>
  }

  if (restaurant.error || !restaurant.data) {
    return <div className="error">Error</div>
  }

  return (
    <>
      <RestaurantHeader restaurant={restaurant.data} />

      <div className="restaurant-content">
        <h3>The best food this side of the Mississippi</h3>

        <p className="description">
          <img src={restaurant.data.images.owner} alt="" />
          Description for {restaurant.data.name}
        </p>
        <p className="order-link">
          <Link
            className="btn"
            to={`/restaurants/${restaurant.data.slug}/order`}
          >
            Order from {restaurant.data.name}
          </Link>
        </p>
      </div>
    </>
  )
}

export default RestaurantDetails
