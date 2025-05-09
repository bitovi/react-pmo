import { Restaurant } from "@shared/services/pmo"

const RestaurantDetails: React.FC<{ restaurant: Restaurant }> = ({
  restaurant,
}) => {
  return (
    <div
      className="restaurant-header"
      title="Restaurant cover picture"
      style={{ backgroundImage: `url(${restaurant.images.banner})` }}
    >
      <div className="background">
        <h2>{restaurant.name}</h2>

        {restaurant.address && (
          <div className="address">
            {restaurant.address.street}
            <br />
            {restaurant.address.city}, {restaurant.address.state}{" "}
            {restaurant.address.zip}
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
  )
}

export default RestaurantDetails
