export interface Restaurant {
  _id: string
  slug: string
  name: string
  menu: Menu
  images: {
    thumbnail: string
    owner: string
    banner: string
  }
  address: {
    street: string
    city: string
    state: string
    zip: string
  }
}

export interface Menu {
  lunch: MenuItem[]
  dinner: MenuItem[]
}

export interface MenuItem {
  name: string
  price: number
}

export interface State {
  name: string
  short: string
}

export interface City {
  name: string
  state: string
}

export async function getRestaurants(
  state?: string,
  city?: string,
): Promise<Restaurant[]> {
  // /api/restaurants?filter[address.state]={state}&filter[address.city]={city}
  return []
}

export async function getRestaurant(slug: string): Promise<Restaurant> {
  // /api/restaurants/{slug}
  return { _id: "1", slug: "1", name: "Restaurant One" } as Restaurant
}

export async function getStates(): Promise<State[]> {
  // /api/states
  return []
}

export async function getCities(state: string): Promise<City[]> {
  // /api/cities?state={state}
  return []
}
