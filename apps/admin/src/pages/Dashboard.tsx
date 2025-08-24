import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const stats = [
  { name: 'Cars Added', value: 124 },
  { name: 'Loans Approved', value: 86 },
  { name: 'Policies Issued', value: 152 },
  { name: 'Active Users', value: 243 },
];

const chartData = [
  { name: 'Jan', cars: 45, loans: 32, policies: 41 },
  { name: 'Feb', cars: 52, loans: 38, policies: 48 },
  { name: 'Mar', cars: 48, loans: 42, policies: 51 },
  { name: 'Apr', cars: 61, loans: 45, policies: 55 },
  { name: 'May', cars: 55, loans: 48, policies: 62 },
  { name: 'Jun', cars: 67, loans: 52, policies: 68 },
];

function Dashboard() {
  return (
    <div className="dashboard">
      <h1 className="page-title">Dashboard</h1>
      
      <div className="content-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h3 className="stat-label">{stat.name}</h3>
            <div className="stat-value">{stat.value}</div>
          </div>
        ))}
      </div>
      
      <div className="chart-container">
        <h2 className="chart-title">Monthly Performance</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="cars" fill="#00ccff" />
            <Bar dataKey="loans" fill="#ff9900" />
            <Bar dataKey="policies" fill="#00ff99" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="table-container">
        <div className="table-header">
          <h2 className="table-title">Recent Activities</h2>
        </div>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Activity</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>Added new car listing</td>
              <td>2 hours ago</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>Approved loan application</td>
              <td>4 hours ago</td>
            </tr>
            <tr>
              <td>Robert Johnson</td>
              <td>Verified document</td>
              <td>5 hours ago</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;