import { useParams } from "react-router-dom"

import FormTextField from "@shared/components/FormTextField"
import RestaurantHeader from "@shared/components/RestaurantHeader"
import { useRestaurant } from "@shared/services/pmo"

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
    <>
      <RestaurantHeader restaurant={restaurant.data} />

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
                    onChange={(e) => actions.updateItem(_id, e.target.checked)}
                    checked={order.items.includes(_id)}
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
                    onChange={(e) => actions.updateItem(_id, e.target.checked)}
                    checked={order.items.includes(_id)}
                  />{" "}
                  {name} <span className="badge">{price}</span>
                </label>
              </li>
            ))}
          </ul>

          {order.items.length === 0 && (
            <p className="info text-error">Please choose an item</p>
          )}

          <FormTextField
            label="Name"
            type="text"
            help="Please enter your name."
            value={order.name}
            onChange={(name) => actions.setName(name)}
          />
          <FormTextField
            label="Address"
            type="text"
            help="Please enter your address."
            value={order.address}
            onChange={(address) => actions.setAddress(address)}
          />
          <FormTextField
            label="Phone"
            type="tel"
            help="Please enter your phone number."
            value={order.phone}
            onChange={(phone) => actions.setPhone(phone)}
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
    </>
  )
}

export default RestaurantOrder
