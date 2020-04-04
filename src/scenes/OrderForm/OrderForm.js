import React, { useEffect, useMemo, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import cx from 'classnames'

import { getRestaurant } from '../../services/restaurants'
import { createOrder } from '../../services/orders'

import Tabs from '../../components/Tabs/Tabs'

const menus = {
  lunch: 'Lunch Menu',
  dinner: 'Dinner Menu',
}

export default function OrderForm() {
  const history = useHistory()
  const { restaurantId } = useParams()
  const [ restaurant, setRestaurant ] = useState(null)

  const [ validation, setValidation ] = useState(null)
  const [ items, setItems ] = useState([])

  const [ name, setName ] = useState('')
  const [ address, setAddress ] = useState('')
  const [ phone, setPhone ] = useState('')

  useEffect(() => {
    getRestaurant(restaurantId).then(setRestaurant)
  }, [ restaurantId ])

  const total = useMemo(
    () => items.reduce((sum, { price }) => sum + price, 0),
    [ items ],
  )

  const isValid = useMemo(() => {
    if (items.length === 0) {
      return false
    }

    return true
  }, [ items ])

  function handleToggleItem(e, item) {
    if (e.target.checked) {
      setItems((items) => items.concat(item))
    } else {
      setItems((items) => items.filter(({ name }) => name !== item.name))
    }
  }

  function validateForm() {
    const validation = {}

    if (!name) {
      validation.name = 'Please enter your name.'
    }

    if (!address) {
      validation.address = 'Please enter your address.'
    }

    if (!phone) {
      validation.phone = 'Please enter your phone number.'
    }

    setValidation(validation)

    if (Object.keys(validation).length > 0) {
      return false
    }

    return true
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    const order = await createOrder({
      restaurant: restaurant._id,
      status: 'new',
      name,
      address,
      phone,
      items,
    })

    history.push(`/order-history/${order._id}`)
  }

  if (!restaurant) {
    return null
  }

  return (
    <div className="order-form">
      <h3>Order from {restaurant.name}</h3>
      <form onSubmit={handleSubmit}>
        <Tabs>
          {Object.keys(restaurant.menu).map((menu) => (
            <div key={menu} name={menu} label={menus[menu]}>
              <ul className="list-group">
                {restaurant.menu[menu].map(({ name, price }) => (
                  <li key={name} className="list-group-item">
                    <label>
                      <input
                        type="checkbox"
                        checked={!!items.find((item) => item.name === name)}
                        onChange={(e) => handleToggleItem(e, { name, price })}
                      />
                      {name} <span className="badge">${price}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Tabs>

        <div className={cx('form-group', { 'has-error': validation && validation.name })}>
          <label className="control-label">
            Name:
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          {validation && validation.name && (
            <p className="help-text">{validation.name}</p>
          )}
        </div>

        <div className={cx('form-group', { 'has-error': validation && validation.address })}>
          <label className="control-label">
            Address:
            <input
              type="text"
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>

          {validation && validation.address && (
            <p className="help-text">{validation.address}</p>
          )}
        </div>

        <div className={cx('form-group', { 'has-error': validation && validation.phone })}>
          <label className="control-label">
            Phone:
            <input
              type="text"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>

          {validation && validation.phone && (
            <p className="help-text">{validation.phone}</p>
          )}
        </div>

        <div className="submit">
          <h4>Total: ${total.toFixed(2)}</h4>
          <button type="submit" className="btn" disabled={!isValid}>
            Place My Order!
          </button>
        </div>
      </form>
    </div>
  )
}
