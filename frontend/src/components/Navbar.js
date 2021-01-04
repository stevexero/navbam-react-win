import styled from 'styled-components';
import NavbarMobileMenuButton from './NavbarMobileMenuButton';
import { useMediaQuery } from 'react-responsive';

const StyledNav = styled.nav`
  height: ${(props) => props.navbarHeight}rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(${(props) => props.color});
  display: flex;
  justify-content: center;
  position: ${(props) => props.position};
  z-index: 1;
  transition: 0.2s;
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
  transition: ${(props) => props.hoverTransitionTime}s;

  &:hover {
    background-color: rgba(${(props) => props.hoverBackgroundColor});
    transform: scale(${(props) => props.hoverScaleSize});
    color: ${(props) => props.hoverColor};
  }
`;

const BorderedLink = styled(StyledLink)`
  background-color: rgba(${(props) => props.CTABackgroundColor});
  font-weight: ${(props) => props.fontWeight};
  padding: 0 ${(props) => props.CTAWidth}rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(${(props) => props.CTAHoverBackgroundColor}) !important;
    color: ${(props) => props.CTAHoverColor} !important;
  }
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
  hoverBackgroundColor,
  borderSwitchState,
  borderSize,
  borderStyle,
  navbarBorderColor,
  hoverScaleSize,
  hoverColor,
  hoverTransitionTime,
  CTAHoverBackgroundColor,
  CTAHoverColor,
}) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1100px)' });

  const alternateWidth = {
    width: navWidthFullOrFixed === 'full' ? '100%' : widthSize + 'px',
  };

  const viewStyle = {
    width: view === 'desktop' ? '100vw' : view === 'tablet' ? '768px' : view === 'mobile' && '480px',
    // boxShadow: 'inset 0 10px 15px 1px rgba(55, 55, 55, 1)',
    borderBottom: borderSwitchState ? `${borderSize}px ${borderStyle} rgba(${navbarBorderColor})` : 'none',
  };

  const CTAStyle = {
    color: CTAColorSameAsLinks ? linkColor : CTATextColor,
    border: isCTABorderOnOrOff ? `${CTABorderSize}px solid ${CTABorderColor}` : 'none',
    borderRadius: isCTABorderOnOrOff ? `${CTABorderRadius}px` : '0',
  };

  return (
    <StyledNav color={navBackgroundColor} style={viewStyle} navbarHeight={navbarHeight} position={position}>
      <NavContainer widthSize={widthSize} style={alternateWidth}>
        <Logo linkColor={linkColor}>
          Nav<span>Bam</span>
        </Logo>
        {isTabletOrMobile ? (
          <NavbarMobileMenuButton linkColor={linkColor} />
        ) : (
          <LinkContainer>
            <StyledLink
              href='#'
              fontSize={fontSize}
              spacing={spacing}
              linkColor={linkColor}
              letterCase={letterCase}
              hoverBackgroundColor={hoverBackgroundColor}
              hoverScaleSize={hoverScaleSize}
              hoverColor={hoverColor}
              hoverTransitionTime={hoverTransitionTime}
            >
              About
            </StyledLink>
            <StyledLink
              href='#'
              fontSize={fontSize}
              spacing={spacing}
              linkColor={linkColor}
              letterCase={letterCase}
              hoverBackgroundColor={hoverBackgroundColor}
              hoverScaleSize={hoverScaleSize}
              hoverColor={hoverColor}
              hoverTransitionTime={hoverTransitionTime}
            >
              Blog
            </StyledLink>
            <StyledLink
              href='#'
              fontSize={fontSize}
              spacing={spacing}
              linkColor={linkColor}
              letterCase={letterCase}
              hoverBackgroundColor={hoverBackgroundColor}
              hoverScaleSize={hoverScaleSize}
              hoverColor={hoverColor}
              hoverTransitionTime={hoverTransitionTime}
            >
              Contact
            </StyledLink>
            <BorderedLink
              href='#'
              fontSize={fontSize}
              spacing={spacing}
              linkColor={linkColor}
              letterCase={letterCase}
              hoverBackgroundColor={hoverBackgroundColor}
              CTAHoverBackgroundColor={CTAHoverBackgroundColor}
              hoverScaleSize={hoverScaleSize}
              CTABackgroundColor={CTABackgroundColor}
              CTATextColor={CTATextColor}
              fontWeight={fontWeight}
              CTAWidth={CTAWidth}
              style={CTAStyle}
              hoverColor={hoverColor}
              CTAHoverColor={CTAHoverColor}
              hoverTransitionTime={hoverTransitionTime}
            >
              Shop
            </BorderedLink>
          </LinkContainer>
        )}
      </NavContainer>
    </StyledNav>
  );
};

export default Navbar;
