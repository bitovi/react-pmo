import PropTypes from 'prop-types'
import React, { useState } from 'react'

export default function Tabs({ children }) {
  const [ tab, setTab ] = useState(children[0].props.name)

  return (
    <div className="nav-tabs-container">
      <ul className="nav nav-tabs">
        {React.Children.map(children, ({ props: { name, label } }) => (
          <li key={name} className={name === tab ? 'active' : ''}>
            {/* eslint-disable-next-line */}
            <a onClick={() => setTab(name)}>{label}</a>
          </li>
        ))}
      </ul>

      {React.Children.map(children, (child) => {
        if (child.props.name !== tab) {
          return null
        }

        return child
      })}
    </div>
  )
}

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
}
