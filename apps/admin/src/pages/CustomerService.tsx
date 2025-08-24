import React, { useState } from 'react';

const tickets = [
  { id: 1, user: 'John Doe', subject: 'Issue with car listing', status: 'Open', priority: 'High', createdAt: '2023-06-15' },
  { id: 2, user: 'Jane Smith', subject: 'Loan application query', status: 'In Progress', priority: 'Medium', createdAt: '2023-06-14' },
  { id: 3, user: 'Robert Johnson', subject: 'Document verification', status: 'Resolved', priority: 'Low', createdAt: '2023-06-13' },
  { id: 4, user: 'Emily Davis', subject: 'Payment issue', status: 'Open', priority: 'High', createdAt: '2023-06-12' },
  { id: 5, user: 'Michael Wilson', subject: 'Insurance policy', status: 'In Progress', priority: 'Medium', createdAt: '2023-06-11' },
];

function CustomerService() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTickets = tickets.filter(ticket =>
    ticket.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="customer-service">
      <h1 className="page-title">Customer Service</h1>
      
      <div className="table-container">
        <div className="table-header">
          <h2 className="table-title">Support Tickets</h2>
          <div className="table-actions">
            <input
              type="text"
              placeholder="Search tickets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button className="action-button">New Ticket</button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Subject</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.map(ticket => (
              <tr key={ticket.id}>
                <td>{ticket.user}</td>
                <td>{ticket.subject}</td>
                <td>
                  <span className={`status ${ticket.status.toLowerCase().replace(' ', '-')}`}>
                    {ticket.status}
                  </span>
                </td>
                <td>
                  <span className={`priority ${ticket.priority.toLowerCase()}`}>
                    {ticket.priority}
                  </span>
                </td>
                <td>{ticket.createdAt}</td>
                <td>
                  <button className="action-button">View</button>
                  <button className="action-button">Assign</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerService;