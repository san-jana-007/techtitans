import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/signup';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import CreateProduct from './pages/CreateProduct';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Sales from './pages/Sales';
import { useAuth } from './context/AuthContext';

// Layout component for authenticated pages
const PrivateLayout = ({ children }) => {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

// Protected Route component
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <PrivateLayout>{children}</PrivateLayout>;
};

function App() {
  return (
    <Routes>
      {/* Public routes - no sidebar */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected routes - with sidebar */}
      <Route path="/dashboard" element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      } />
      <Route path="/products" element={
        <PrivateRoute>
          <Products />
        </PrivateRoute>
      } />
      <Route path="/create-product" element={
        <PrivateRoute>
          <CreateProduct />
        </PrivateRoute>
      } />
      <Route path="/sales" element={
        <PrivateRoute>
          <Sales />
        </PrivateRoute>
      } />

      {/* Redirect to dashboard if no match */} 
    </Routes>
  );
}

export default App;
