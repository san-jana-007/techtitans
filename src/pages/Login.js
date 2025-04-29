import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const mockUsers = [
    {
      email: 'admin@example.com',
      password: 'admin123',
      role: 'admin',
      name: 'Admin User'
    },
    {
      email: 'employee@example.com',
      password: 'employee123',
      role: 'employee',
      name: 'Employee User'
    }
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    const user = mockUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      login(user); // Store user in context
      setError(null);
      if (user.role === 'admin') {
        navigate('/dashboard');
      } else if (user.role === 'employee') {
        navigate('/billing'); // or a separate page like /employee-dashboard
      }
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Login</button>
        </form>
        <p>
          New user? <a href="/signup">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
