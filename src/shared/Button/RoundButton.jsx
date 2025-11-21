import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) => props.$bgColor || '#f0f0f0'};
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 5px;
  font-size: 16px;

  &:hover {
    opacity: 0.8;
  }

  ${(props) =>
    props.$isPriority &&
    `
      background-color: ${props.$priority ? '#d35400' : 'white'};
      color: ${props.$priority ? 'white' : '#d35400'};
      border: ${props.$priority ? 'none' : '2px solid #d35400'};
  `}
`;

const RoundButton = ({ icon, $bgColor, $isPriority, $priority, onClick }) => {
  return (
    <StyledButton
      $bgColor={$bgColor}
      $isPriority={$isPriority}
      $priority={$priority}
      onClick={onClick}
    >
      {icon}
    </StyledButton>
  );
};

export default RoundButton;
