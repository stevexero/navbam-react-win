import styled from 'styled-components';
// import { useMediaQuery } from 'react-responsive'

const StyledNav = styled.nav`
  width: 100vw;
  background-color: rgba(${(props) => props.color});
  position: relative;
  z-index: 1;
`;

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-family: 'Nunito', sans-serif;
  color: ${(props) => props.linkColor};
  margin-left: 1rem;

  & > span {
    font-size: 1.3rem;
    font-family: 'Monoton', cursive;
  }
`;

const LinkContainer = styled.div`
  display: flex;
`;

const StyledLink = styled.a`
  color: ${(props) => props.linkColor};
  padding: 1rem;
  margin-left: ${(props) => props.spacing}rem;
  font-size: ${(props) => props.fontSize}px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const BorderedLink = styled(StyledLink)`
  background-color: #ff0000;
`;

const Navbar = ({ navBackgroundColor, fontSize, spacing, linkColor }) => {
  return (
    <StyledNav color={navBackgroundColor}>
      <NavContainer>
        <Logo>
          Nav<span>Bam</span>
        </Logo>
        <LinkContainer>
          <StyledLink href='#' fontSize={fontSize} spacing={spacing} linkColor={linkColor}>
            About
          </StyledLink>
          <StyledLink href='#' fontSize={fontSize} spacing={spacing} linkColor={linkColor}>
            Blog
          </StyledLink>
          <StyledLink href='#' fontSize={fontSize} spacing={spacing} linkColor={linkColor}>
            Contact
          </StyledLink>
          <BorderedLink href='#' fontSize={fontSize} spacing={spacing} linkColor={linkColor}>
            Shop
          </BorderedLink>
        </LinkContainer>
      </NavContainer>
    </StyledNav>
  );
};

export default Navbar;
