import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import styled from 'styled-components';
import { login } from '../../services/AuthService';

const LoginWrapper = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
  }

  input {
    width: 100%;
    padding: 0.8rem;
    margin: 0.5rem 0;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 4px;
    background: #1e1e1e;
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    width: 100%;
    padding: 0.8rem;
    margin: 1rem 0;
    background: ${({ theme }) => theme.colors.primary};
    border: none;
    border-radius: 4px;
    color: #000;
    font-weight: bold;
    cursor: pointer;
  }

  .register-link {
    margin-top: 1rem;
    text-align: center;
    display: block;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.9rem;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(credentials);
      alert('Login Successful!');
      console.log(response);
    } catch (error) {
      alert('Login Failed!');
      console.error(error);
    }
  };

  return (
    <LoginWrapper>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      <Link to="/register" className="register-link">
        Don't have an account? Register here
      </Link>
    </LoginWrapper>
  );
};

export default LoginForm;