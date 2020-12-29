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
  ${'' /* box-shadow: inset 0 60px 65px rgba(255, 255, 255, 1); */}
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
  background-color: rgba(${(props) => props.CTABackgroundColor});
  font-weight: ${(props) => props.fontWeight};
  padding: 0 ${(props) => props.CTAWidth}rem;
  border-radius: ${(props) => props.CTABorderRadius}px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  CTABackgroundColor,
  CTAColorSameAsLinks,
  CTATextColor,
  fontWeight,
  isCTABorderOnOrOff,
  CTABorderColor,
  CTABorderSize,
  CTAWidth,
  CTABorderRadius,
}) => {
  const alternateWidth = {
    width: navWidthFullOrFixed === 'full' ? '100%' : widthSize + 'px',
  };

  const viewStyle = {
    width: view === 'desktop' ? '100vw' : view === 'tablet' ? '768px' : view === 'mobile' && '480px',
  };

  const CTAStyle = {
    color: CTAColorSameAsLinks ? linkColor : CTATextColor,
    border: isCTABorderOnOrOff ? `${CTABorderSize}px solid ${CTABorderColor}` : 'none',
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
          <BorderedLink
            href='#'
            fontSize={fontSize}
            spacing={spacing}
            linkColor={linkColor}
            letterCase={letterCase}
            CTABackgroundColor={CTABackgroundColor}
            CTATextColor={CTATextColor}
            fontWeight={fontWeight}
            CTAWidth={CTAWidth}
            CTABorderRadius={CTABorderRadius}
            style={CTAStyle}
          >
            Shop
          </BorderedLink>
        </LinkContainer>
      </NavContainer>
    </StyledNav>
  );
};

export default Navbar;
