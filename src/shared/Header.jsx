import { NavLink } from "react-router";
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 40px;
  background-color: #8B0000;
`;

const NavLinks = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-right: 20px;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
	color: #D3D3D3;
	transition: all 0.3s ease;
	&:hover {
	   text-shadow: 
	     0 0 20px rgba(255, 255, 255, 1),
	     0 0 25px rgba(255, 255, 255, 1);
}
`;

const Header = () => {

	return (
    	<HeaderWrapper>
    		<div>Demo Website</div>
			<NavLinks>
	        <ul>
	          <li><StyledNavLink to="/">Home</StyledNavLink></li>
	          <li><StyledNavLink to="/about">About</StyledNavLink></li>
	        </ul>
	      </NavLinks>
    	</HeaderWrapper>
    )

}

export default Header
