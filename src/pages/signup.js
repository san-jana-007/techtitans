import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Mock signup logic
    if (email && password && name) {
      alert('Signup successful! Now you can log in.');
      navigate('/'); // Redirect to login
    } else {
      setError('All fields are required.');
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <div className="signup-container">
      <h2>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="text" placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Create Account</button>
      </div>
    </form>
  );
};

export default Signup;
