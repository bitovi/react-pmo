import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'place-my-order-assets/css/place-my-order-assets.css'
import './overrides.scss'

import Layout from './components/Layout/Layout'

import Landing from './scenes/Landing/Landing'
import NotFound from './scenes/NotFound/NotFound'
import OrderDetails from './scenes/OrderDetails/OrderDetails'
import OrderForm from './scenes/OrderForm/OrderForm'
import OrderHistory from './scenes/OrderHistory/OrderHistory'
import RestaurantDetails from './scenes/RestaurantDetails/RestaurantDetails'
import RestaurantList from './scenes/RestaurantList/RestaurantList'

ReactDOM.render((
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>

        <Route path="/restaurants/:restaurantId/order">
          <OrderForm />
        </Route>
        <Route path="/restaurants/:restaurantId">
          <RestaurantDetails />
        </Route>
        <Route path="/restaurants">
          <RestaurantList />
        </Route>

        <Route path="/order-history/:orderId">
          <OrderDetails />
        </Route>
        <Route path="/order-history">
          <OrderHistory />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  </BrowserRouter>
), document.getElementById('root'))
