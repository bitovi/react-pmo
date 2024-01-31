import { Link, useParams } from "react-router-dom"

import { useRestaurant } from "./hooks"

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
      <div
        className="restaurant-header"
        style={{ backgroundImage: `url(${restaurant.data.images.banner})` }}
      >
        <div className="background">
          <h2>{restaurant.data.name}</h2>

          {restaurant.data.address && (
            <div className="address">
              {restaurant.data.address.street}
              <br />
              {restaurant.data.address.city}, {restaurant.data.address.state}{" "}
              {restaurant.data.address.zip}
            </div>
          )}

          <div className="hours-price">
            $$$
            <br />
            Hours: M-F 10am-11pm
            <span className="open-now">Open Now</span>
          </div>

          <br />
        </div>
      </div>

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
