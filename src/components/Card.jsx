import styled from 'styled-components';
import { NavLink } from 'react-router';

const StyledCard = styled(NavLink)`
  width: 300px;
  height: 300px;
  border: 5px solid ${({ theme }) => theme.colors.red};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  box-shadow: 0 0px 12px ${({ theme }) => theme.colors.white};
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  &:hover {
    transform: scale(1.05);
    background-color: ${({ theme }) => theme.colors.hoverWhite};
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
