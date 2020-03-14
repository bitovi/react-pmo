import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getStates, getCities, getRestaurants } from '../../services/restaurants'

import Address from '../../components/Address/Address'
import HoursPrice from '../../components/HoursPrice/HoursPrice'

export default function RestaurantList() {
  const [ restaurants, setRestaurants ] = useState(null)
  const [ states, setStates ] = useState(null)
  const [ cities, setCities ] = useState(null)
  const [ state, setState ] = useState('')
  const [ city, setCity ] = useState('')

  useEffect(() => {
    getStates().then(setStates)
  }, [])

  useEffect(() => {
    if (state) {
      setCity('')
      setCities(null)
      getCities(state).then(setCities)
    }
  }, [ state ])

  useEffect(() => {
    if (state && city) {
      getRestaurants(state, city).then(setRestaurants)
    }
  }, [ state, city ])

  return (
    <div className="restaurants">
      <h2 className="page-header">Restaurants</h2>
      <form className="form">
        <div className="form-group">
          <label htmlFor="state">State</label>
          <select id="state" onChange={(e) => setState(e.target.value)} value={state}>
            <option value="" disabled>{states ? 'Choose a state' : 'Loading...'}</option>
            {states && states.map(({ name, short }) => (
              <option key={short} value={short}>{name}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <select id="city" onChange={(e) => setCity(e.target.value)} value={city} disabled={!state}>
            <option value="" disabled>{cities ? 'Choose a city' : 'Loading...'}</option>
            {cities && cities.map(({ name }) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </div>
      </form>

      {restaurants && restaurants.map(({
        name,
        slug,
        address,
        resources,
      }) => (
        <div className="restaurant" key={slug}>
          <img src={resources.thumbnail} alt={name} height="100" width="100" />
          <h3>{name}</h3>
          <Address {...address} />
          <HoursPrice price={3} />
          <Link className="btn" to={`/restaurants/${slug}`}>Details</Link>
          <br />
        </div>
      ))}
    </div>
  )
}
