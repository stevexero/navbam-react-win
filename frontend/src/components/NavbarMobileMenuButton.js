import { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledNavIcon = styled.div`
  width: 30px;
  height: 20px;
  margin-right: 1rem;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  z-index: 10;
`;

const StyledSpan = styled.div`
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: ${(props) => props.linkColor};
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;

  &:nth-child(1) {
    top: ${(props) => props.top}px;
    width: ${(props) => props.width}%;
    left: ${(props) => props.left}%;
  }

  &:nth-child(2) {
    top: 9px;
    -webkit-transform: rotate(${(props) => props.rotate}deg);
    -moz-transform: rotate(${(props) => props.rotate}deg);
    -o-transform: rotate(${(props) => props.rotate}deg);
    transform: rotate(${(props) => props.rotate}deg);
  }

  &:nth-child(3) {
    top: 9px;
    -webkit-transform: rotate(-${(props) => props.rotate}deg);
    -moz-transform: rotate(-${(props) => props.rotate}deg);
    -o-transform: rotate(-${(props) => props.rotate}deg);
    transform: rotate(-${(props) => props.rotate}deg);
  }

  &:nth-child(4) {
    top: ${(props) => props.bottom}px;
    width: ${(props) => props.width}%;
    left: ${(props) => props.left}%;
  }
`;

const NavbarMobileMenuButton = ({ linkColor, saveIsOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [posRotation, setPosRotation] = useState(0);
  const [top, setTop] = useState(0);
  const [bottom, setBottom] = useState(18);
  const [width, setWidth] = useState(100);
  const [left, setLeft] = useState(0);

  useEffect(() => {
    isOpen ? setPosRotation(45) : setPosRotation(0);
    isOpen ? setTop(18) : setTop(0);
    isOpen ? setBottom(0) : setBottom(18);
    isOpen ? setWidth(0) : setWidth(100);
    isOpen ? setLeft(50) : setLeft(0);
  }, [isOpen, posRotation, top, left, bottom]);

  useEffect(() => {
    saveIsOpen(isOpen);
  }, [isOpen, saveIsOpen]);

  const handleClick = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <StyledNavIcon onClick={handleClick}>
      <StyledSpan linkColor={linkColor} top={top} width={width} left={left} />
      <StyledSpan linkColor={linkColor} rotate={posRotation} />
      <StyledSpan linkColor={linkColor} rotate={posRotation} />
      <StyledSpan linkColor={linkColor} bottom={bottom} width={width} left={left} />
    </StyledNavIcon>
  );
};

export default NavbarMobileMenuButton;
