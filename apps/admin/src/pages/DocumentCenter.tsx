import React, { useState } from 'react';

const documents = [
  { id: 1, userId: 'John Doe', type: 'ID Proof', status: 'Pending', uploadedAt: '2023-06-15' },
  { id: 2, userId: 'Jane Smith', type: 'RC Book', status: 'Verified', uploadedAt: '2023-06-10' },
  { id: 3, userId: 'Robert Johnson', type: 'Insurance', status: 'Rejected', uploadedAt: '2023-06-12' },
  { id: 4, userId: 'Emily Davis', type: 'ID Proof', status: 'Pending', uploadedAt: '2023-06-14' },
  { id: 5, userId: 'Michael Wilson', type: 'RC Book', status: 'Verified', uploadedAt: '2023-06-11' },
];

function DocumentCenter() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDocuments = documents.filter(doc =>
    doc.userId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="document-center">
      <h1 className="page-title">Document Center</h1>
      
      <div className="table-container">
        <div className="table-header">
          <h2 className="table-title">Documents</h2>
          <div className="table-actions">
            <input
              type="text"
              placeholder="Search documents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Type</th>
              <th>Status</th>
              <th>Uploaded At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDocuments.map(doc => (
              <tr key={doc.id}>
                <td>{doc.userId}</td>
                <td>{doc.type}</td>
                <td>
                  <span className={`status ${doc.status.toLowerCase()}`}>
                    {doc.status}
                  </span>
                </td>
                <td>{doc.uploadedAt}</td>
                <td>
                  <button className="action-button">View</button>
                  <button className="action-button">Verify</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DocumentCenter;