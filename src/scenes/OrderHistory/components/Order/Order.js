/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'

import Address, { AddressPropType } from '../../../../components/Address/Address'
import { toCurrency } from '../../../../helpers/transforms'

const statuses = {
  new: { name: 'New Order!', next: 'preparing' },
  preparing: { name: 'Preparing', next: 'delivery' },
  delivery: { name: 'Out for delivery', next: 'delivered' },
  delivered: { name: 'Delivered' },
}

export default function Order({ status, id, name, address, phone, items, onStatus, onDelete }) {
  return (
    <div className={cx('order', status)}>
      <Address
        name={name}
        phone={phone}
        {...address}
      >
        <Link to={`/order-history/${id}`}>Details</Link>
      </Address>

      <div className="items">
        <ul>
          {items.map(({ name }, key) => (
            <li key={key}>{name}</li>
          ))}
        </ul>
      </div>

      <div className="total">
        {toCurrency(items.reduce((total, { price }) => total + price, 0))}
      </div>

      <div className="actions">
        <span className="badge">{statuses[status].name}</span>

        {statuses[status].next && (
          <p className="action">
            Mark as:{' '}
            <button
              type="button"
              className="link"
              onClick={() => onStatus(id, statuses[status].next)}
            >
              {statuses[statuses[status].next].name}
            </button>
          </p>
        )}
        <p className="action">
          <button
            type="button"
            className="link"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </p>
      </div>
    </div>
  )
}

Order.propTypes = {
  status: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  address: AddressPropType,
  phone: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
  onStatus: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}
