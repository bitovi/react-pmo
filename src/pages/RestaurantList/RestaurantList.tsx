import { Link } from "react-router-dom"

import { useCities, useRestaurants, useStates } from "./hooks"
import { useId, useState } from "react"

const RestaurantList: React.FC = () => {
  const stateId = useId()
  const cityId = useId()

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
          <div className="form-group">
            <label htmlFor={stateId}>State</label>
            <select
              id={stateId}
              className="formControl"
              onChange={(e) => setState(e.target.value)}
              disabled={!states.pending && !states.data}
            >
              {states.pending ? (
                <option value="">Loading...</option>
              ) : states.error ? (
                <option value="">Error</option>
              ) : states.data ? (
                <>
                  <option value="">Choose a state</option>
                  {states.data.map(({ short, name }) => (
                    <option key={short} value={short}>
                      {name}
                    </option>
                  ))}
                </>
              ) : undefined}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor={cityId}>City</label>
            <select
              id={cityId}
              className="formControl"
              onChange={(e) => setCity(e.target.value)}
              disabled={!cities.pending && !cities.data}
            >
              {cities.pending ? (
                <option value="">Loading...</option>
              ) : cities.error ? (
                <option value="">Error</option>
              ) : cities.data ? (
                <>
                  <option value="">Choose a city</option>
                  {cities.data.map(({ name }) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </>
              ) : undefined}
            </select>
          </div>
        </form>

        {restaurants.pending ? (
          <div className="restaurant loading"></div>
        ) : restaurants.error ? (
          <div className="restaurant">Error.</div>
        ) : restaurants.data ? (
          restaurants.data.map(({ _id, slug, name, address, images }) => (
            <div key={_id} className="restaurant">
              <img src={images.thumbnail} alt="" width="100" height="100" />
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
