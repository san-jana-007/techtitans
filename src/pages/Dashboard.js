
import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [timeFilter, setTimeFilter] = useState('1D');
  
  // Sample data for demonstration
  const salesData = {
    totalSales: '48,988,078',
    totalPurchase: '24,145,789',
    hourlyData: [
      { time: '2 AM', sales: 15000, purchase: 35000 },
      { time: '4 AM', sales: 20000, purchase: 45000 },
      { time: '6 AM', sales: 10000, purchase: 35000 },
      { time: '8 AM', sales: 20000, purchase: 65000 },
      { time: '10 AM', sales: 25000, purchase: 60000 },
      { time: '12 PM', sales: 15000, purchase: 65000 },
      { time: '2 PM', sales: 10000, purchase: 35000 },
      { time: '4 PM', sales: 25000, purchase: 45000 },
      { time: '6 PM', sales: 35000, purchase: 85000 },
      { time: '8 PM', sales: 15000, purchase: 35000 },
      { time: '10 PM', sales: 30000, purchase: 65000 },
      { time: '12 AM', sales: 20000, purchase: 45000 }
    ]
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>Welcome, Admin</h1>
        <div className="date-range">
          04/12/2025 - 04/18/2025
        </div>
      </div>

      <div className="alert-banner">
        ⚠️ Some Products are low on stock Check!! <a href="/add-stock">Add Stock</a>
      </div>

      <div className="top-cards">
        <div className="card orange">
          <h3>Total Sales</h3>
          <div>${salesData.totalSales} <span className="trend up">+22%</span></div>
        </div>
        <div className="card darkblue">
          <h3>Total Sales Return</h3>
          <div>$16,478,145 <span className="trend down">-22%</span></div>
        </div>
        <div className="card green">
          <h3>Total Purchase</h3>
          <div>${salesData.totalPurchase} <span className="trend up">+22%</span></div>
        </div>
        <div className="card blue">
          <h3>Total Purchase Return</h3>
          <div>$18,458,747 <span className="trend up">+22%</span></div>
        </div>
      </div>

      <div className="graph-section">
        <div className="graph-header">
          <div className="graph-title">
            <span>📊</span>
            Sales & Purchase Overview
          </div>
          <div className="time-filters">
            <button 
              className={`filter-btn ${timeFilter === '1D' ? 'active' : ''}`}
              onClick={() => setTimeFilter('1D')}
            >1D</button>
            <button 
              className={`filter-btn ${timeFilter === '1W' ? 'active' : ''}`}
              onClick={() => setTimeFilter('1W')}
            >1W</button>
            <button 
              className={`filter-btn ${timeFilter === '1M' ? 'active' : ''}`}
              onClick={() => setTimeFilter('1M')}
            >1M</button>
          </div>
        </div>

        <div className="graph-legend">
          <div className="legend-item">
            <span className="legend-dot purchase"></span>
            <span>Total Purchase</span>
            <span className="legend-value">3K</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot sales"></span>
            <span>Total Sales</span>
            <span className="legend-value">1K</span>
          </div>
        </div>

        <div className="graph-container">
          {salesData.hourlyData.map((data, index) => (
            <div className="graph-column" key={index}>
              <div className="graph-bars">
                <div 
                  className="purchase-bar"
                  style={{ 
                    height: `${(data.purchase / 85000) * 80}%`,
                    maxHeight: '80%'
                  }}
                ></div>
                <div 
                  className="sales-bar"
                  style={{ 
                    height: `${(data.sales / 85000) * 80}%`,
                    maxHeight: '80%'
                  }}
                ></div>
              </div>
              <div className="time-label">{data.time}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="overview-section">
        <div className="overview-header">
          <div className="overview-title">
            <span>📊</span>
            Overall Information
          </div>
        </div>
        <div className="overview-cards">
          <div className="overview-card">
            <div className="overview-icon">👥</div>
            <div className="overview-label">Suppliers</div>
            <div className="overview-value">6,987</div>
          </div>
          <div className="overview-card">
            <div className="overview-icon">👤</div>
            <div className="overview-label">Customers</div>
            <div className="overview-value">4,896</div>
          </div>
          <div className="overview-card">
            <div className="overview-icon">🛒</div>
            <div className="overview-label">Orders</div>
            <div className="overview-value">487</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
