
/*
import { useState, useEffect } from 'react';

const Inventory = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Mock data instead of axios call
    const mockItems = [
      { _id: '1', name: 'T-Shirt', price: 500, stock: 10 },
      { _id: '2', name: 'Jeans', price: 1200, stock: 5 },
      { _id: '3', name: 'Hoodie', price: 1500, stock: 3 },
    ];

    setItems(mockItems);
  }, []);

  return (
    <div>
      <h1>Clothing Inventory</h1>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name} - ₹{item.price} (Stock: {item.stock})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;
*/


// this is mock data have to change while backend is ready


/*import { useState, useEffect } from 'react';

const Inventory = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Mock inventory data instead of fetching from backend
    const mockInventory = [
      { _id: '1', name: 'T-Shirt', price: 499, stock: 10 },
      { _id: '2', name: 'Jeans', price: 899, stock: 5 },
      { _id: '3', name: 'Jacket', price: 1299, stock: 2 },
    ];
    
    setItems(mockInventory);
  }, []);

  return (
    <div>
      <h1>Clothing Inventory</h1>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name} - ₹{item.price} (Stock: {item.stock})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;
*/

//we are making improvements

// src/pages/Inventory.js
import { useState, useEffect } from 'react';
import './Inventory.css';

const mockItems = [
  {
    _id: 1,
    name: 'T-Shirt',
    price: 299,
    stock: 20,
    category: 'Tops',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab'
  },
  {
    _id: 2,
    name: 'Jeans',
    price: 999,
    stock: 10,
    category: 'Bottoms',
    image: 'https://picsum.photos/id/1011/400/300'
  },
  {
    _id: 3,
    name: 'Jacket',
    price: 1499,
    stock: 5,
    category: 'Outerwear',
    image: 'https://picsum.photos/id/1015/400/300'
  },
  {
    _id: 4,
    name: 'Shorts',
    price: 499,
    stock: 15,
    category: 'Bottoms',
    image:  'https://picsum.photos/id/1025/400/300'
  }
];

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  useEffect(() => {
    setItems(mockItems);
  }, []);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === 'All' || item.category === category)
  );

  return (
    <div className="inventory-page">
      <h1>🧥 Clothing Inventory</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="Tops">Tops</option>
          <option value="Bottoms">Bottoms</option>
          <option value="Outerwear">Outerwear</option>
        </select>
      </div>

      <div className="inventory-grid">
        {filteredItems.map(item => (
          <div className="inventory-card" key={item._id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <p>Stock: {item.stock}</p>
            <span className="category">{item.category}</span>
            <button className="edit-btn">Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
