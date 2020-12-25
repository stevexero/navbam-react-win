import { useState } from 'react';
import Navbar from './components/Navbar';
import Builder from './components/Builder';
import styled from 'styled-components';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${(props) => props.bgImg}) no-repeat center center/cover;
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
