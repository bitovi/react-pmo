import type { City, Restaurant, State } from "./interfaces"

import { pmoApi } from "../api"

export async function getRestaurants(
  state?: string,
  city?: string,
): Promise<Restaurant[]> {
  const { data } = await pmoApi<
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

  return data
}

export async function getRestaurant(slug: string): Promise<Restaurant> {
  const data = await pmoApi<Restaurant>({
    method: "GET",
    path: `/restaurants/${slug}`,
  })

  return data
}

export async function getStates(): Promise<State[]> {
  const { data } = await pmoApi<{ data: State[] }>({
    method: "GET",
    path: "/states",
  })

  return data
}

export async function getCities(state: string): Promise<City[]> {
  const { data } = await pmoApi<{ data: City[] }, { state: string }>({
    method: "GET",
    path: "/cities",
    params: {
      state,
    },
  })

  return data
}
