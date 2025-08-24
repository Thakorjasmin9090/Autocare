import React, { useState } from 'react';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'User', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Seller', status: 'Active' },
  { id: 3, name: 'Robert Johnson', email: 'robert@example.com', role: 'Dealer', status: 'Pending' },
  { id: 4, name: 'Emily Davis', email: 'emily@example.com', role: 'User', status: 'Suspended' },
  { id: 5, name: 'Michael Wilson', email: 'michael@example.com', role: 'Admin', status: 'Active' },
];

function UserManagement() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-management">
      <h1 className="page-title">User Management</h1>
      
      <div className="table-container">
        <div className="table-header">
          <h2 className="table-title">Users</h2>
          <div className="table-actions">
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button className="action-button">Add User</button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <span className={`status ${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>
                <td>
                  <button className="action-button">Edit</button>
                  <button className="action-button">Suspend</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserManagement;