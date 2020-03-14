import PropTypes from 'prop-types'
import React from 'react'

export default function Address({ name, street, city, state, zip, phone, children, ...props }) {
  return (
    <address className="address" {...props}>
      {name && (<div>{name}</div>)}
      {street && (<div>{street}</div>)}
      {(city && state && zip) && (<div>{city}, {state} {zip}</div>)}
      {phone && (<div>{phone}</div>)}
      {children}
    </address>
  )
}

Address.propTypes = {
  name: PropTypes.string,
  street: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zip: PropTypes.string,
  phone: PropTypes.string,
  children: PropTypes.node,
}

export const AddressPropType = PropTypes.shape({
  street: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zip: PropTypes.string,
})
