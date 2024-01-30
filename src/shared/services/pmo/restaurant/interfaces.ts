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
