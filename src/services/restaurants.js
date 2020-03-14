import { baseUrl, get } from './_base'

export async function getStates() {
  const states = await get('/states')
  return states.data
}

export async function getCities(state) {
  const cities = await get('/cities', {
    filter: {
      state,
    },
  })
  return cities.data
}

export async function getRestaurants(state, city) {
  const restaurants = await get('/restaurants', {
    filter: {
      'address.state': state,
      'address.city': city,
    },
  })

  return restaurants.data.map((restaurant) => prepareRestaurant(restaurant))
}

export async function getRestaurant(id) {
  const restaurant = await get(`/restaurants/${id}`)

  return prepareRestaurant(restaurant)
}

function prepareRestaurant({ resources, ...restaurant }) {
  restaurant.resources = {}
  for (const key in resources) {
    restaurant.resources[key] = `${baseUrl}/${resources[key]}`
  }

  return restaurant
}
