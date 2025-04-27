/*import { useState } from 'react';
import axios from 'axios';

const Billing = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const handlePayment = async () => {
    const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/payment`, { amount: total });
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY,
      amount: data.amount,
      currency: data.currency,
      order_id: data.id,
      handler: async (response) => {
        await axios.post(`${process.env.REACT_APP_API_URL}/order`, {
          items,
          totalAmount: total,
          paymentStatus: 'Completed'
        });
        alert('Payment Successful');
      }
    };
    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div>
      <h1>Billing</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name} - ₹{item.price}</li>
        ))}
      </ul>
      <h2>Total: ₹{total}</h2>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Billing;

*/

/*import { useState } from 'react';
import './Billing.css'; // 👈 Don't forget to create this file

const Billing = () => {
  const [items, setItems] = useState([
    { id: '1', name: 'T-Shirt', price: 499 },
    { id: '2', name: 'Jeans', price: 899 },
    { id: '3', name: 'Jacket', price: 1299 },
  ]);

  const total = items.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    alert(`Payment of ₹${total} successful!`);
  };

  return (
    <div className="billing-container">
      <h2>Billing</h2>
      <ul className="item-list">
        {items.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>₹{item.price}</span>
          </li>
        ))}
      </ul>
      <div className="total">
        <strong>Total: ₹{total}</strong>
      </div>
      <button className="pay-button" onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Billing;
*/

//making improvements

// src/pages/Billing.js
import { useState } from 'react';
import './Billing.css';

const Billing = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'T-Shirt', price: 250, quantity: 1 },
    { id: 2, name: 'Jeans', price: 800, quantity: 2 },
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleQuantityChange = (id, type) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === 'inc'
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };
  

  return (
    <div className="billing-container">
      <h2>Billing</h2>
      {cartItems.length === 0 ? (
        <p>No items added to bill.</p>
      ) : (
        <table className="billing-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>₹{item.price}</td>
                <td>₹{item.price * item.quantity}</td>
                <td>
                  <button onClick={() => handleRemove(item.id)}>Remove</button>
                  <button className="qty-btn" onClick={() => handleQuantityChange(item.id, 'dec')}>−</button>
                  {item.quantity}
                  <button className="qty-btn" onClick={() => handleQuantityChange(item.id, 'inc')}>+</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <h3>Total: ₹{getTotal()}</h3>
      {cartItems.length > 0 && <button className="checkout-btn">Generate Bill</button>}
    </div>
  );
};

export default Billing;

