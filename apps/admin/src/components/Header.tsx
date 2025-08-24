import React from 'react';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';

function Header() {
  return (
    <header className="header">
      <h1 className="page-title">Dashboard</h1>
      <div className="header-actions">
        <button className="action-button">
          <BellIcon className="icon" />
        </button>
        <button className="action-button user-button">
          <UserCircleIcon className="icon" />
          <span className="user-name">Admin</span>
        </button>
      </div>
    </header>
  );
}

export default Header;