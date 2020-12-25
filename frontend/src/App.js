import { useState } from 'react';
import Navbar from './components/Navbar';
import Builder from './components/Builder';
import styled from 'styled-components';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${(props) => props.bgImg}) no-repeat center center/cover;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(120deg, #eaee44, #33d0ff);
    opacity: 0.7;
    z-index: 0;
  }
`;

function App() {
  const [backgroundImg, setBackgroundImg] = useState();

  const saveImg = (img) => {
    setBackgroundImg(img);
  };

  return (
    <Background bgImg={backgroundImg}>
      <Navbar navBackgroundColor={'#333333'} />
      <Builder saveImg={saveImg} />
    </Background>
  );
}

export default App;
