import PropTypes from 'prop-types'
import React, { useMemo } from 'react'

export default function HoursPrice({ date, price, children, ...props }) {
  const isOpen = useMemo(() => {
    // we assume the user and restaurant are in the same timezone
    const now = new Date(date || Date.now())

    if (now.getDay() < 1 || now.getDay() > 5) return false
    if (now.getHours() < 10 || now.getHours() > 22) return false

    return true
  }, [ date ])

  return (
    <div className="hours-price" {...props}>
      {new Array(price).fill('$').join('')}
      <br />
      Hours: M-F 10am-11pm
      {isOpen ? (
        <span className="open-now">Open Now</span>
      ) : (
        <span className="closed-now">Closed Now</span>
      )}
      {children}
    </div>
  )
}

HoursPrice.propTypes = {
  price: PropTypes.number.isRequired,
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
  ]),
  children: PropTypes.node,
}
