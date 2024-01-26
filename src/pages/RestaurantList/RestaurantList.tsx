import { Link } from "react-router-dom"

import { getRestaurants } from "@shared/services/api"

const RestaurantList: React.FC = () => {
  const orders = []

  return (
    <div>
      <h1>Restaurant List!</h1>
      <ul>
        {restaurants.map(({ slug, name }) => (
          <li key={slug}>
            <Link to={`/restaurants/${slug}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RestaurantList
