import React, { useContext, useState } from "react";
import AppContext from "../AppContext";

/**
 * Place an order at a restaurant.
 * @returns {JSX.Element}
 */
export default function RestaurantOrder() {
  /** @type {AppContextValue} */

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [orderProcessing, setOrderProcessing] = useState(false);
  const [orderTotal, setOrderTotal] = useState(0);

  const context = useContext(AppContext);
  const menu = context.currentRestaurant.restaurant.menu;

  function addToOrderTotal(num){
    setOrderTotal(orderTotal + num);
  }

  return (
      <div className="order-form">
        <h1>Place Order</h1>
        {menu.lunch && <Menu name="Lunch" items={menu.lunch} onSelectItem={addToOrderTotal}/>}
        {menu.dinner && <Menu name="Dinner" items={menu.dinner} onSelectItem={addToOrderTotal}/>}
        <InfoInput label="Name" value={name} onInput={setName} />
        <InfoInput label="Address" value={address} onInput={setAddress} />
        <InfoInput label="Phone" value={phone} onInput={setPhone} />
        <div class="submit">
        <h4>Total: ${orderTotal}</h4>
          {orderProcessing && <div class="loading" />}
          <button type="submit" disabled={orderProcessing} class="btn">
            Place My Order!
          </button>
        </div>
      </div>
  );
}

function InfoInput({label, text, onInput}){
  return (
    <div className="form-group">
      <label className="control-label">{label}:</label>
      <input type="text" className="form-control" onInput={evt => onInput(evt.target.value)} value={text}/>
    </div>
  )
}

function Menu({name, items, onSelectItem}){
  return (
    <div>
      <h4>{name} Menu</h4>
      <ul className="list-group">
        {
          items.map(menuItem => (
            <MenuItem
              name={menuItem.name}
              price={menuItem.price}
              key={menuItem.name}
              onClick={onSelectItem}
            />
          ))
        }
      </ul>
    </div>
  );
}

function MenuItem({name, price, onClick}){
  const [isSelected, setIsSelected] = useState(false);
  return (
    <li className="list-group-item" onClick={() => {
      onClick(isSelected ? price * -1 : price)
      setIsSelected(!isSelected)
    }}>
      <label>
        <input type="checkbox" checked={isSelected}/>
        {name} <span className="badge">${price}</span>
      </label>
    </li>
  );
}
