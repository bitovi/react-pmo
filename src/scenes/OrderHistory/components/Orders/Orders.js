import PropTypes from 'prop-types'
import React from 'react'

import Order from '../Order/Order'

export default function Orders({ title, orders, onStatus, onDelete }) {
  return (
    <div>
      <h4>{title}</h4>
      {orders.map(({ _id, ...order }) => (
        <Order
          key={_id}
          {...order}
          id={_id}
          onStatus={onStatus}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

Orders.propTypes = {
  title: PropTypes.string.isRequired,
  orders: PropTypes.arrayOf(PropTypes.shape({
  })).isRequired,
  onStatus: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}
