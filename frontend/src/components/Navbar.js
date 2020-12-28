import styled from 'styled-components';
// import { useMediaQuery } from 'react-responsive'

const StyledNav = styled.nav`
  height: ${(props) => props.navbarHeight}rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(${(props) => props.color});
  display: flex;
  justify-content: center;
  position: ${(props) => props.position};
  z-index: 1;
`;

const NavContainer = styled.div`
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
  text-transform: ${(props) => props.letterCase};

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const BorderedLink = styled(StyledLink)`
  background-color: #ff0000;
`;

const Navbar = ({
  navBackgroundColor,
  fontSize,
  spacing,
  linkColor,
  letterCase,
  widthSize,
  navWidthFullOrFixed,
  view,
  navbarHeight,
  position,
}) => {
  const alternateWidth = {
    width: navWidthFullOrFixed === 'full' ? '100%' : widthSize + 'px',
  };

  const viewStyle = {
    width: view === 'desktop' ? '100vw' : view === 'tablet' ? '768px' : view === 'mobile' && '480px',
  };

  return (
    <StyledNav color={navBackgroundColor} style={viewStyle} navbarHeight={navbarHeight} position={position}>
      <NavContainer widthSize={widthSize} style={alternateWidth}>
        <Logo linkColor={linkColor}>
          Nav<span>Bam</span>
        </Logo>
        <LinkContainer>
          <StyledLink href='#' fontSize={fontSize} spacing={spacing} linkColor={linkColor} letterCase={letterCase}>
            About
          </StyledLink>
          <StyledLink href='#' fontSize={fontSize} spacing={spacing} linkColor={linkColor} letterCase={letterCase}>
            Blog
          </StyledLink>
          <StyledLink href='#' fontSize={fontSize} spacing={spacing} linkColor={linkColor} letterCase={letterCase}>
            Contact
          </StyledLink>
          <BorderedLink href='#' fontSize={fontSize} spacing={spacing} linkColor={linkColor} letterCase={letterCase}>
            Shop
          </BorderedLink>
        </LinkContainer>
      </NavContainer>
    </StyledNav>
  );
};

export default Navbar;
