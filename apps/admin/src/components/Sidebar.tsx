import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon, 
  UsersIcon, 
  CarIcon, 
  DocumentIcon, 
  ChatBubbleLeftRightIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'Users', href: '/users', icon: UsersIcon },
  { name: 'Cars', href: '/cars', icon: CarIcon },
  { name: 'Documents', href: '/documents', icon: DocumentIcon },
  { name: 'Support', href: '/support', icon: ChatBubbleLeftRightIcon },
  { name: 'Settings', href: '/settings', icon: CogIcon },
];

function Sidebar() {
  const location = useLocation();

  return (
    <div className="glass-card sidebar">
      <div className="sidebar-header">
        <h1 className="neon-text">Auto Consult</h1>
        <p className="sidebar-subtitle">Admin Dashboard</p>
      </div>
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            return (
              <li key={item.name} className={`nav-item ${isActive ? 'active' : ''}`}>
                <Link to={item.href} className="nav-link">
                  <Icon className="nav-icon" />
                  <span className="nav-text">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;