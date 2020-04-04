import { get, post } from './_base'

export async function getOrders() {
  const orders = await get('/orders')

  return orders.data.map((order) => prepareOrder(order))
}

export async function getOrder(id) {
  const order = await get(`/orders/${id}`)

  return prepareOrder(order)
}

export async function createOrder(data) {
  const order = await post('/orders', null, data)

  return prepareOrder(order)
}

function prepareOrder({ address, ...order }) {
  if (address) {
    const match = address.match(/(.+), (.+) ([A-Z]{2}) ([0-9]{5}(:?-[0-9]{4})?)/)
    if (match) {
      const [ , street, city, state, zip ] = match
      order.address = {
        street,
        city,
        state,
        zip,
      }
    } else {
      order.address = {
        street: address,
      }
    }
  }

  return order
}
