import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import UserManagement from './pages/UserManagement';
import CarManagement from './pages/CarManagement';
import DocumentCenter from './pages/DocumentCenter';
import CustomerService from './pages/CustomerService';
import Login from './pages/Login';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/cars" element={<CarManagement />} />
            <Route path="/documents" element={<DocumentCenter />} />
            <Route path="/support" element={<CustomerService />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;