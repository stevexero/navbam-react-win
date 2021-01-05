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
  z-index: 0;
`;

const StyledLink = styled.a`
  color: ${(props) => props.linkColor};
  text-transform: ${(props) => props.letterCase};
  font-size: ${(props) => props.fontSize}px;
`;

const MobileMenu = ({ view, backgroundColor, linkColor, position, letterCase, fontSize }) => {
  const menuStyle = {
    width: view === 'tablet' ? '768px' : view === 'mobile' && '480px',
    position: position,
  };

  return (
    view !== 'desktop' && (
      <StyledMenu style={menuStyle} backgroundColor={backgroundColor} position={position}>
        <StyledLink href='#' linkColor={linkColor} letterCase={letterCase} fontSize={fontSize}>
          About
        </StyledLink>
        <StyledLink href='#' linkColor={linkColor} letterCase={letterCase} fontSize={fontSize}>
          Blog
        </StyledLink>
        <StyledLink href='#' linkColor={linkColor} letterCase={letterCase} fontSize={fontSize}>
          Contact
        </StyledLink>
        <StyledLink href='#' linkColor={linkColor} letterCase={letterCase} fontSize={fontSize}>
          Shop
        </StyledLink>
      </StyledMenu>
    )
  );
};

export default MobileMenu;
