import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './sales.css';

const Sales = () => {
  const [activeTab, setActiveTab] = useState('daily');
  const [data, setData] = useState([]);

  useEffect(() => {
    const dailyData = [
      { date: '2024-06-01', sales: 1500, expenses: 500 },
      { date: '2024-06-02', sales: 1800, expenses: 600 },
      { date: '2024-06-03', sales: 1200, expenses: 400 },
      { date: '2024-06-04', sales: 2000, expenses: 700 },
      { date: '2024-06-05', sales: 1700, expenses: 550 },
      { date: '2024-06-06', sales: 1600, expenses: 500 },
      { date: '2024-06-07', sales: 1900, expenses: 650 },
    ];

    const weeklyData = [
      { week: 'Week 22', sales: 10500, expenses: 3500 },
      { week: 'Week 23', sales: 12000, expenses: 4000 },
      { week: 'Week 24', sales: 11000, expenses: 3700 },
    ];

    const monthlyData = [
      { month: 'May 2024', sales: 45000, expenses: 15000 },
      { month: 'June 2024', sales: 30000, expenses: 10000 },
      { month: 'July 2024', sales: 0, expenses: 0 },
    ];

    switch (activeTab) {
      case 'daily':
        setData(dailyData);
        break;
      case 'weekly':
        setData(weeklyData);
        break;
      case 'monthly':
        setData(monthlyData);
        break;
      default:
        setData([]);
    }
  }, [activeTab]);

  const renderChart = () => (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={activeTab === 'daily' ? 'date' : activeTab === 'weekly' ? 'week' : 'month'} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#8884d8" />
        <Bar dataKey="expenses" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );

  return (
    <div className="sales-container">
      <h2 className="sales-header">Sales and Expenses Tracking</h2>
      <div className="sales-tabs">
        <div
          className={`sales-tab ${activeTab === 'daily' ? 'active' : ''}`}
          onClick={() => setActiveTab('daily')}
        >
          Daily
        </div>
        <div
          className={`sales-tab ${activeTab === 'weekly' ? 'active' : ''}`}
          onClick={() => setActiveTab('weekly')}
        >
          Weekly
        </div>
        <div
          className={`sales-tab ${activeTab === 'monthly' ? 'active' : ''}`}
          onClick={() => setActiveTab('monthly')}
        >
          Monthly
        </div>
      </div>
      {renderChart()}
    </div>
  );
};

export default Sales;
