import { useParams } from "react-router-dom"

import FormField from "./FormField"
import { useRestaurant } from "./hooks"
import useForm from "./useForm"

const RestaurantOrder: React.FC = () => {
  const params = useParams() as { slug: string }

  const restaurant = useRestaurant(params.slug)

  const [order, actions] = useForm()

  if (restaurant.pending) {
    return <div className="loading"></div>
  }

  if (restaurant.error || !restaurant.data) {
    return <div className="error">Error</div>
  }

  return (
    <div className="order-form">
      <h3>Order from {restaurant.data.name}!</h3>

      <form onSubmit={() => actions.submit()}>
        <h4>Lunch Menu</h4>
        <ul className="list-group">
          {restaurant.data.menu.lunch.map(({ _id, name, price }) => (
            <li key={_id} className="list-group-item">
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => actions.setItem(_id, e.target.checked)}
                  checked={order.items[_id] ?? false}
                />{" "}
                {name} <span className="badge">{price}</span>
              </label>
            </li>
          ))}
        </ul>

        <h4>Dinner menu</h4>
        <ul className="list-group">
          {restaurant.data.menu.dinner.map(({ _id, name, price }) => (
            <li key={_id} className="list-group-item">
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => actions.setItem(_id, e.target.checked)}
                  checked={order.items[_id] ?? false}
                />{" "}
                {name} <span className="badge">{price}</span>
              </label>
            </li>
          ))}
        </ul>

        {order.isEmpty && (
          <p className="info text-error">Please choose an item</p>
        )}

        <FormField
          label="Name"
          type="text"
          help="Please enter your name."
          error={false}
        />
        <FormField
          label="Address"
          type="text"
          help="Please enter your address."
          error={false}
        />
        <FormField
          label="Phone"
          type="tel"
          help="Please enter your phone number."
          error={false}
        />

        <div className="submit">
          <h4>Total: {order.subtotal}</h4>

          {order.isPending ? (
            <div className="loading"></div>
          ) : (
            <button type="submit" className="btn" disabled={order.isValid}>
              Place My Order!
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default RestaurantOrder
