import type { City, Restaurant, State } from "./interfaces"

import { pmo } from "../api"

export async function getRestaurants(
  state?: string,
  city?: string,
): Promise<Restaurant[]> {
  const { data } = await pmo<
    { data: Restaurant[] },
    {
      "filter[address.state]"?: string
      "filter[address.city]"?: string
    }
  >({
    method: "GET",
    path: "/restaurants",
    params: {
      "filter[address.state]": state,
      "filter[address.city]": city,
    },
  })

  return data.map(cleanupRestaurant)
}

export async function getRestaurant(slug: string): Promise<Restaurant> {
  const data = await pmo<Restaurant>({
    method: "GET",
    path: `/restaurants/${slug}`,
  })

  return cleanupRestaurant(data)
}

export async function getStates(): Promise<State[]> {
  const { data } = await pmo<{ data: State[] }>({
    method: "GET",
    path: "/states",
  })

  return data
}

export async function getCities(state: string): Promise<City[]> {
  const { data } = await pmo<{ data: City[] }, { state: string }>({
    method: "GET",
    path: "/cities",
    params: {
      state,
    },
  })

  return data
}

function cleanupRestaurant(restaurant: Restaurant): Restaurant {
  if (restaurant.images.thumbnail) {
    restaurant.images.thumbnail = `https://www.place-my-order.com/${restaurant.images.thumbnail}`
  }

  if (restaurant.images.owner) {
    restaurant.images.owner = `https://www.place-my-order.com/${restaurant.images.owner}`
  }

  if (restaurant.images.banner) {
    restaurant.images.banner = `https://www.place-my-order.com/${restaurant.images.banner}`
  }

  for (const item of restaurant.menu.lunch) {
    item._id = item.name
  }
  for (const item of restaurant.menu.dinner) {
    item._id = item.name
  }

  return restaurant
}
