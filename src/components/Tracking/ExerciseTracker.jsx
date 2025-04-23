import React from 'react';
import styled from 'styled-components';

const TrackerWrapper = styled.div`
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

  input, select {
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

const ExerciseTracker = () => {
  return (  
    <TrackerWrapper>
      <h2>Log Exercise</h2>
      <form>
        <input type="text" placeholder="Exercise Type (e.g., Running)" />
        <input type="number" placeholder="Duration (minutes)" />
        <input type="number" placeholder="Calories Burned" />
        <input type="datetime-local" />
        <button type="submit">Log Exercise</button>
      </form>
    </TrackerWrapper>
  );
};

export default ExerciseTracker;