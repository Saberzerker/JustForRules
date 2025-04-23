import React from 'react';
import styled from 'styled-components';

const VisualizationWrapper = styled.div`
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

const ActivityVisualization = () => {
  return (
    <VisualizationWrapper>
      <h2>Activity Visualization</h2>
      <p>Charts and graphs will be displayed here.</p>
    </VisualizationWrapper>
  );
};

export default ActivityVisualization;