import styled from 'styled-components';
import { NavLink } from 'react-router';

const StyledCard = styled(NavLink)`
  width: 300px;
  height: 300px;
  border: 5px solid #8b0000;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.87);
  color: #242424;
  box-shadow: 0 0px 12px rgba(255, 255, 255, 0.87);
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  &:hover {
    transform: scale(1.05);
    background-color: rgba(255, 255, 255, 0.91);
  }
`;

const Header = styled.h3`
  text-align: center;
`;

const TextArea = styled.p`
  padding: 8px;
`;

const Card = ({ to, title, children }) => {
  return (
    <StyledCard to={to}>
      <Header>{title}</Header>
      <TextArea>{children}</TextArea>
    </StyledCard>
  );
};

export default Card;
