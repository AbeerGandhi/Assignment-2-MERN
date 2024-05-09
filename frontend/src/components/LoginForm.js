//Abeer Gandhi
import React, { useState } from 'react';
import ProtectedPage from './ProtectedPage';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [signedUpUsers, setSignedUpUsers] = useState([]);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = signedUpUsers.find((u) => u.email === email && u.password === password);
    if (user) {
      setIsLoggedIn(true);
      setEmail('');
      setPassword('');
      setError('');
    } else {
      setError('Invalid credentials');
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    
    if (email && password) {
      setSignedUpUsers([...signedUpUsers, { email, password }]);
      setIsLoggedIn(true); 
      setEmail('');
      setPassword('');
      setError('');
    } else {
      setError('Please enter both email and password');
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFDD0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
        {!isLoggedIn ? (
          <>
            <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '24px', color: '#333' }}>Login</h2>
            <form onSubmit={handleLogin}>
              <div style={{ marginBottom: '10px' }}>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
                  placeholder="Enter your email"
                />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
                  placeholder="Enter your password"
                />
              </div>
              {error && <div style={{ color: 'red', textAlign: 'center', marginBottom: '10px' }}>{error}</div>}
              <div style={{ textAlign: 'center', padding: '10px' }}>
                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Login</button>
              </div>
            </form>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              Don't have an account? <button style={{ backgroundColor: 'transparent', border: 'none', color: '#007bff', cursor: 'pointer' }} onClick={handleSignUp}>Sign Up</button>
            </div>
          </>
        ) : (
          <ProtectedPage />
        )}
      </div>
    </div>
  );
};

export default LoginForm;
