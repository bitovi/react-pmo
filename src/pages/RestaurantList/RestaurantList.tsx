import { useState } from "react"
import { Link } from "react-router-dom"

import FormSelect from "@shared/components/FormSelect"
import { useCities, useRestaurants, useStates } from "@shared/services/pmo"

const RestaurantList: React.FC = () => {
  const [state, setState] = useState("")
  const [city, setCity] = useState("")

  const states = useStates()
  const cities = useCities(state)
  const restaurants = useRestaurants(state, city)

  return (
    <>
      <div className="restaurants">
        <h2 className="page-header">Restaurants</h2>
        <form className="form">
          <FormSelect
            label="State"
            disabled={!states.pending && !states.data}
            value={state}
            onChange={(state) => setState(state)}
            options={
              states.pending
                ? [{ value: "", label: "Loading..." }]
                : states.error
                  ? [{ value: "", label: "Error" }]
                  : states.data
                    ? [
                        { value: "", label: "Choose a state" },
                        ...states.data.map(({ short, name }) => ({
                          key: short,
                          value: short,
                          label: name,
                        })),
                      ]
                    : []
            }
          />

          <FormSelect
            label="City"
            disabled={!cities.pending && !cities.data}
            value={city}
            onChange={(city) => setCity(city)}
            options={
              cities.pending
                ? [{ value: "", label: "Loading..." }]
                : cities.error
                  ? [{ value: "", label: "Error" }]
                  : cities.data
                    ? [
                        { value: "", label: "Choose a city" },
                        ...cities.data.map(({ name }) => ({
                          key: name,
                          value: name,
                          label: name,
                        })),
                      ]
                    : []
            }
          />
        </form>

        {restaurants.pending ? (
          <div className="restaurant loading"></div>
        ) : restaurants.error ? (
          <div className="restaurant">Error.</div>
        ) : restaurants.data ? (
          restaurants.data.map(({ _id, slug, name, address, images }) => (
            <div key={_id} className="restaurant">
              <img
                src={images.thumbnail}
                alt="A restaurant food item"
                width="100"
                height="100"
              />
              <h3>{name}</h3>

              {address && (
                <div className="address">
                  {address.street}
                  <br />
                  {address.city}, {address.state} {address.zip}
                </div>
              )}

              <div className="hours-price">
                $$$
                <br />
                Hours: M-F 10am-11pm
                <span className="open-now">Open Now</span>
              </div>

              <Link className="btn" to={`/restaurants/${slug}`}>
                Details
              </Link>
              <br />
            </div>
          ))
        ) : undefined}
      </div>
    </>
  )
}

export default RestaurantList
