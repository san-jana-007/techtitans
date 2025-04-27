import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <h3>Main</h3>
        <Link to="/dashboard" className="sidebar-link">Admin</Link>
      </div>

      <div className="sidebar-section">
        <h3>Inventory</h3>
        <Link to="/products" className="sidebar-link">Products</Link>
        <Link to="/create-product" className="sidebar-link">Create Product</Link>
        <Link to="/expired-products" className="sidebar-link">Expired Products</Link>
        <Link to="/low-stocks" className="sidebar-link">Low Stocks</Link>
        <Link to="/category" className="sidebar-link">Category</Link>
        <Link to="/print-barcode" className="sidebar-link">Print Barcode</Link>
        <Link to="/print-qr-code" className="sidebar-link">Print QR Code</Link>
      </div>

      <div className="sidebar-section">
        <h3>Billing & Invoices</h3>
        <Link to="/payments" className="sidebar-link">Payments</Link>
        <Link to="/invoices" className="sidebar-link">Invoices</Link>
        <Link to="/discounts" className="sidebar-link">Discounts</Link>
      </div>

      <div className="sidebar-section">
        <h3>Sales Tracking</h3>
        <Link to="/sales" className="sidebar-link">Sales</Link>
        <Link to="/profit-loss" className="sidebar-link">Profit & Loss</Link>
      </div>

      <div className="sidebar-section">
        <h3>Management</h3>
        <Link to="/supplier-details" className="sidebar-link">Supplier Details</Link>
        <Link to="/auto-purchase-orders" className="sidebar-link">Auto Purchase Orders</Link>
      </div>
    </div>
  );
};

export default Sidebar;