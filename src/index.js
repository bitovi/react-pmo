import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Switch,
  Route,
  useParams,
} from 'react-router-dom'

import 'place-my-order-assets/css/place-my-order-assets.css'

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Dummy page="home" />
      </Route>

      <Route path="/restaurants/:restaurant/order">
        <Dummy page="restaurant order form" />
      </Route>
      <Route path="/restaurants/:restaurant">
        <Dummy page="restaurant details" />
      </Route>
      <Route path="/restaurants">
        <Dummy page="restaurant list" />
      </Route>

      <Route path="/order-history/:order">
        <Dummy page="order details" />
      </Route>
      <Route path="/order-history">
        <Dummy page="order history" />
      </Route>

      <Route>
        <Dummy page="error" />
      </Route>
    </Switch>
  </BrowserRouter>
), document.getElementById('root'))

function Dummy({ ...props }) {
  const params = useParams()

  return (
    <div>
      <pre>
        {JSON.stringify(props, null, 2)}
        {'\n'}
        {JSON.stringify(params, null, 2)}
      </pre>
    </div>
  )
}
