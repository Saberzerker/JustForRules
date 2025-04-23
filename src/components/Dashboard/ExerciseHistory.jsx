import React from 'react';
import styled from 'styled-components';

const HistoryWrapper = styled.div`
  max-width: 800px;
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
`;

const ExerciseHistory = () => {
  return (
    <HistoryWrapper>
      <h2>Exercise History</h2>
      <p>Exercise records will appear here.</p>
    </HistoryWrapper>
  );
};

export default ExerciseHistory;