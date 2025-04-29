/*import { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log('Trying to login with:', email);
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        { email, password }
      );
      login(data); // Save user to context
      window.location.href = '/inventory'; // Navigate after login
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials or server.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
*/

import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import './Login.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();


  //mock admin and employee

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
  



  //login access for the employee n admin
  const handleLogin = (e) => {
    e.preventDefault();
  
    const user = mockUsers.find(
      (u) => u.email === email && u.password === password
    );
  
    if (user) {
      login(user); // Store user in context
      if (user.role === 'admin') {
        navigate('/dashboard');
      } else if (user.role === 'employee') {
        // Navigate to inventory page for employees
        navigate('/products');
      }
    } else {
      alert('Invalid email or password');
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

