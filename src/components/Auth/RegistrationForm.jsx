import React, { useState } from 'react';
import styled from 'styled-components';
import { register } from '../../services/AuthService';

const RegistrationWrapper = styled.div`
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
`;

const RegistrationForm = () => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    email: '',
    age: '',
    weight: '',
    height: '',
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register(userData);
      alert('Registration Successful!');
      console.log(response);
    } catch (error) {
      alert('Registration Failed!');
      console.error(error);
    }
  };

  return (
    <RegistrationWrapper>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={userData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={userData.age}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          value={userData.weight}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="height"
          placeholder="Height (m)"
          value={userData.height}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </RegistrationWrapper>
  );
};

export default RegistrationForm;