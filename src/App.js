import {Route, Routes } from 'react-router-dom';
import Signup from './pages/signup';
import Login from './pages/Login';
import Inventory from './pages/Inventory';
import Billing from './pages/Billing';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import CreateProduct from './pages/CreateProduct';
import ExpiredProducts from './pages/ExpiredProducts';
import LowStocks from './pages/LowStocks';
import Category from './pages/Category';
import PrintBarcode from './pages/PrintBarcode';
import PrintQRCode from './pages/PrintQRCode';
import Payments from './pages/Payments';
import Invoices from './pages/Invoices';
import Discounts from './pages/Discounts';
import Sales from './pages/Sales';
import ProfitLoss from './pages/ProfitLoss';
import SupplierDetails from './pages/SupplierDetails';
import AutoPurchaseOrders from './pages/AutoPurchaseOrders';

function App() {
  return (
    <div className="app-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="main-content">
        <Navbar />
        <main className="content-area">
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/create-product" element={<CreateProduct />} />
            <Route path="/expired-products" element={<ExpiredProducts />} />
            <Route path="/low-stocks" element={<LowStocks />} />
            <Route path="/category" element={<Category />} />
            <Route path="/print-barcode" element={<PrintBarcode />} />
            <Route path="/print-qr-code" element={<PrintQRCode />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/discounts" element={<Discounts />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/profit-loss" element={<ProfitLoss />} />
            <Route path="/supplier-details" element={<SupplierDetails />} />
            <Route path="/auto-purchase-orders" element={<AutoPurchaseOrders />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
export default App;
