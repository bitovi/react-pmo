import React, { useEffect, useState } from "react";
import { getOrders } from "../model/api";

/**
 * Displays information about available restaurants.
 * @returns {JSX.Element}
 */
export default function OrderHistory() {

  const [orders, setOrders] = useState([])

  useEffect(() => {
      // Fetch all orders when the component is initially rendered.
      getOrders()
          .then(data => {
              setOrders(data);
          });
  }, []);

    return (
      <div className="order-history">
        <div className="order header">
          <div className="address">Name / Address / Phone</div>
          <div className="items">Order</div>
          <div className="total">Total</div>
          <div className="actions">Action</div>
        </div>
        {orders.map(order => 
          <div className={`order ${order.status}`}>
            <div className="address">
              {order.name} <br />{order.address} <br />{order.phone}
            </div>
            <div className="items">
              <ul>
                {order.items.map(item => <li>{item.name}</li>)}
              </ul>
            </div>
            <div className="total">${order.items.reduce((acc, curr) => acc + curr.price, 0)}</div>
            <div className="actions">
              <span class="badge">{order.status.title}</span>
              <span className="badge">{order.status}</span>
              <p className="action">
                <a href="#" >Delete</a>
              </p>
            </div>
          </div>
        )}
      </div>
    );
}
