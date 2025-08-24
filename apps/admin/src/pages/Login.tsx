import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would authenticate the user here
    console.log('Login attempt with:', { email, password, rememberMe });
    // Redirect to dashboard after successful login
    navigate('/');
  };

  return (
    <div className="login-page">
      <div className="glass-card login-card">
        <h1 className="neon-text login-title">Auto Consult Admin</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="form-checkbox"
            />
            <label htmlFor="remember">Remember me</label>
          </div>
          <button type="submit" className="glass-button login-button">
            Sign In
          </button>
        </form>
        <div className="login-footer">
          <a href="#forgot" className="forgot-password">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;