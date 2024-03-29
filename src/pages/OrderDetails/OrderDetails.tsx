import { useParams } from "react-router-dom"

import RestaurantHeader from "@shared/components/RestaurantHeader"
import { useOrder, useRestaurant } from "@shared/services/pmo"

const OrderDetails: React.FC = () => {
  const params = useParams() as { id: string }

  const order = useOrder(params.id)
  const restaurant = useRestaurant(order.data?.restaurant)

  if (order.pending || restaurant.pending) {
    return <div className="loading"></div>
  }

  if (order.error || !order.data || restaurant.error || !restaurant.data) {
    return <div className="error">Error</div>
  }

  return (
    <>
      <RestaurantHeader restaurant={restaurant.data} />

      <div className="order-form">
        <h3>Thanks for your order, {order.data.name}!</h3>
        <div>
          <label className="control-label">
            Confirmation Number: {order.data._id}
          </label>
        </div>

        <h4>Items ordered:</h4>
        <ul className="list-group panel">
          {order.data.items.map(({ name, price }) => (
            <li key={name} className="list-group-item">
              <label>
                {name} <span className="badge">{price}</span>
              </label>
            </li>
          ))}

          <li className="list-group-item">
            <label>
              Total <span className="badge">{order.data.items.length}</span>
            </label>
          </li>
        </ul>

        <div>
          <label className="control-label">Phone: {order.data.phone}</label>
        </div>
        <div>
          <label className="control-label">Address: {order.data.address}</label>
        </div>
      </div>
    </>
  )
}

export default OrderDetails
