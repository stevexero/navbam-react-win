import styled from 'styled-components';

const StyledMenu = styled.div`
  background: rgba(${(props) => props.backgroundColor});
  height: 600px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledLink = styled.a`
  color: ${(props) => props.linkColor};
`;

const MobileMenu = ({ view, backgroundColor, linkColor, position }) => {
  const menuStyle = {
    width: view === 'tablet' ? '768px' : view === 'mobile' && '480px',
    position: position,
  };

  return (
    view !== 'desktop' && (
      <StyledMenu style={menuStyle} backgroundColor={backgroundColor} position={position}>
        <StyledLink href='#' linkColor={linkColor}>
          About
        </StyledLink>
        <StyledLink href='#' linkColor={linkColor}>
          Blog
        </StyledLink>
        <StyledLink href='#' linkColor={linkColor}>
          Contact
        </StyledLink>
        <StyledLink href='#' linkColor={linkColor}>
          Shop
        </StyledLink>
      </StyledMenu>
    )
  );
};

export default MobileMenu;
