import React, { useState } from 'react';

const cars = [
  { id: 1, make: 'Toyota', model: 'Camry', year: 2020, price: 25000, status: 'Available' },
  { id: 2, make: 'Honda', model: 'Civic', year: 2019, price: 22000, status: 'Sold' },
  { id: 3, make: 'Ford', model: 'Focus', year: 2021, price: 28000, status: 'Available' },
  { id: 4, make: 'BMW', model: 'X5', year: 2018, price: 45000, status: 'Pending' },
  { id: 5, make: 'Mercedes', model: 'C-Class', year: 2022, price: 52000, status: 'Available' },
];

function CarManagement() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCars = cars.filter(car =>
    car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="car-management">
      <h1 className="page-title">Car Management</h1>
      
      <div className="table-container">
        <div className="table-header">
          <h2 className="table-title">Cars</h2>
          <div className="table-actions">
            <input
              type="text"
              placeholder="Search cars..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button className="action-button">Add Car</button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Make</th>
              <th>Model</th>
              <th>Year</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCars.map(car => (
              <tr key={car.id}>
                <td>{car.make}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
                <td>${car.price.toLocaleString()}</td>
                <td>
                  <span className={`status ${car.status.toLowerCase()}`}>
                    {car.status}
                  </span>
                </td>
                <td>
                  <button className="action-button">Edit</button>
                  <button className="action-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CarManagement;