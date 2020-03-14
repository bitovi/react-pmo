import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { getRestaurant } from '../../services/restaurants'

import Address from '../../components/Address/Address'
import HoursPrice from '../../components/HoursPrice/HoursPrice'

export default function RestaurantDetails() {
  const { restaurantId } = useParams()
  const [ restaurant, setRestaurant ] = useState(null)

  useEffect(() => {
    getRestaurant(restaurantId).then(setRestaurant)
  }, [ restaurantId ])

  if (!restaurant) {
    return null
  }

  return (
    <>
      <div className="restaurant-header" style={{ backgroundImage: `url("${restaurant.resources.banner}")` }}>
        <div className="background">
          <h2>{restaurant.name}</h2>
          <Address {...restaurant.address} />
          <HoursPrice price={3} />
          <br />
        </div>
      </div>
      <div className="restaurant-content">
        <h3>The best food this side of the Mississippi</h3>
        <p className="description">
          <img alt={`The owner of ${restaurant.name}.`} src={restaurant.resources.owner} />
          Description for {restaurant.name}
        </p>
        <p className="order-link">
          <Link className="btn" to={`/restaurants/${restaurant.slug}/order`}>
            Order from {restaurant.name}
          </Link>
        </p>
      </div>
    </>
  )
}
