import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Builder from './components/Builder';
import styled from 'styled-components';
import ScrollPage from './components/ScrollPage';

const Background = styled.div`
  width: 100vw;
  height: 100vh;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(${(props) => props.bgOverlay});
    z-index: 0;
  }
`;

function App() {
  const [backgroundColorOrImage, setBackgroundColorOrImage] = useState('color');
  const [backgroundColor, setBackgroundColor] = useState();
  const [backgroundImg, setBackgroundImg] = useState();
  const [activeOverlay, setActiveOverlay] = useState();
  const [overlayColor, setOverlayColor] = useState();
  const [navbarBackgroundColor, setNavbarBackgroundColor] = useState('80,80,80,1');
  const [fontSize, setFontSize] = useState('16');
  const [spacing, setSpacing] = useState('0');
  const [linkColor, setLinkColor] = useState('#ffffff');
  const [letterCase, setLetterCase] = useState('none');
  const [navWidthFullOrFixed, setNavWidthFullOrFixed] = useState('full');
  const [widthSize, setWidthSize] = useState();
  const [view, setView] = useState('desktop');
  const [navbarHeight, setNavbarHeight] = useState(3);
  const [scrollable, setScrollable] = useState(false);
  const [builderTop, setBuilderTop] = useState(3);
  const [scrollY, setScrollY] = useState(0);
  const [position, setPosition] = useState('relative');
  const [CTABackgroundColor, setCTABackgroundColor] = useState('255,0,0,0');
  const [CTAColorSameAsLinks, setCTAColorSameAsLinks] = useState(true);
  const [CTATextColor, setCTATextColor] = useState('#ffffff');
  const [fontWeight, setFontWeight] = useState(400);
  const [isCTABorderOnOrOff, setIsCTABorderOnOrOff] = useState(false);
  const [CTABorderColor, setCTABorderColor] = useState('#000000');
  const [CTABorderSize, setCTABorderSize] = useState(1);
  const [CTAWidth, setCTAWidth] = useState(1);
  const [CTABorderRadius, setCTABorderRadius] = useState(0);
  const [hoverSwitchState, setHoverSwitchState] = useState(false);
  const [hoverBackgroundState, setHoverBackgroundState] = useState();
  const [hoverBackgroundColor, setHoverBackgroundColor] = useState();
  const [borderSwitchState, setBorderSwitchState] = useState();
  const [borderSize, setBorderSize] = useState();
  const [borderStyle, setBorderStyle] = useState('solid');
  const [navbarBorderColor, setNavbarBorderColor] = useState('0,0,0,1');

  useEffect(() => {
    if (activeOverlay === true) {
      setOverlayColor(overlayColor);
    } else {
      setOverlayColor('transparent');
    }
  }, [activeOverlay, overlayColor]);

  useEffect(() => {
    setBuilderTop(navbarHeight + 1);
  }, [setBuilderTop, navbarHeight]);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.pageYOffset);
      if (position === 'relative') {
        if (scrollY > 50) {
          setBuilderTop(0);
        } else {
          setBuilderTop(navbarHeight + 1);
        }
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [scrollY, builderTop, navbarHeight, position]);

  const saveBackgroundColor = (e) => {
    setBackgroundColor(e);
  };

  const saveImg = (img) => {
    setBackgroundImg(img);
  };

  const setOverlay = (e) => {
    setActiveOverlay(e);
  };

  const setBackgroundRadio = (e) => {
    setBackgroundColorOrImage(e);
  };

  const saveOverlayColor = (e) => {
    if (e) {
      setOverlayColor(
        JSON.stringify(e.r) + ',' + JSON.stringify(e.g) + ',' + JSON.stringify(e.b) + ',' + JSON.stringify(e.a)
      );
    }
  };

  const saveNavbarBackgroundColor = (e) => {
    if (e) {
      setNavbarBackgroundColor(
        JSON.stringify(e.r) + ',' + JSON.stringify(e.g) + ',' + JSON.stringify(e.b) + ',' + JSON.stringify(e.a)
      );
    }
  };

  const saveFontSize = (e) => {
    setFontSize(e);
  };

  const saveSpacing = (e) => {
    setSpacing(e);
  };

  const saveLinkColor = (e) => {
    setLinkColor(e);
  };

  const saveLetterCase = (e) => {
    setLetterCase(e);
  };

  const setNavWidthRadio = (e) => {
    setNavWidthFullOrFixed(e);
  };

  const saveWidthSize = (e) => {
    setWidthSize(e);
  };

  const saveView = (e) => {
    setView(e);
  };

  const saveNavbarHeight = (e) => {
    setNavbarHeight(e);
  };

  const saveScrollable = (e) => {
    setScrollable(e);
  };

  const savePosition = (e) => {
    setPosition(e);
  };

  const saveCTABackgroundColor = (e) => {
    if (e) {
      setCTABackgroundColor(
        JSON.stringify(e.r) + ',' + JSON.stringify(e.g) + ',' + JSON.stringify(e.b) + ',' + JSON.stringify(e.a)
      );
    }
  };

  const setCTASameAsLinkColor = (e) => {
    setCTAColorSameAsLinks(e);
  };

  const saveCTATextColor = (e) => {
    setCTATextColor(e);
  };

  const saveFontWeight = (e) => {
    setFontWeight(e);
  };

  const saveBorderOnOrOff = (e) => {
    setIsCTABorderOnOrOff(e);
  };

  const saveCTABorderColor = (e) => {
    setCTABorderColor(e);
  };

  const saveCTABorderSize = (e) => {
    setCTABorderSize(e);
  };

  const saveCTAWidth = (e) => {
    setCTAWidth(e);
  };

  const saveCTABorderRadius = (e) => {
    setCTABorderRadius(e);
  };

  const saveHoverSwitchState = (e) => {
    setHoverSwitchState(e);
  };

  const saveHoverBackgroundState = (e) => {
    setHoverBackgroundState(e);
  };

  const saveHoverBackgroundColor = (e) => {
    hoverSwitchState && hoverBackgroundState
      ? setHoverBackgroundColor(
          JSON.stringify(e.r) + ',' + JSON.stringify(e.g) + ',' + JSON.stringify(e.b) + ',' + JSON.stringify(e.a)
        )
      : setHoverBackgroundColor('0,0,0,0');
  };

  const saveBorderSwitchState = (e) => {
    setBorderSwitchState(e);
  };

  const saveBorderSize = (e) => {
    setBorderSize(e);
  };

  const saveBorderStyle = (e) => {
    setBorderStyle(e);
  };

  const saveNavbarBorderColor = (e) => {
    setNavbarBorderColor(
      JSON.stringify(e.r) + ',' + JSON.stringify(e.g) + ',' + JSON.stringify(e.b) + ',' + JSON.stringify(e.a)
    );
  };

  const alternateBg = {
    background:
      backgroundColorOrImage === 'color' ? backgroundColor : `url(${backgroundImg}) no-repeat center center/cover`,
  };

  return (
    <>
      <Background bgOverlay={overlayColor} bgColorOrImage={backgroundColorOrImage} style={alternateBg}>
        <Navbar
          navBackgroundColor={navbarBackgroundColor}
          fontSize={fontSize}
          spacing={spacing}
          linkColor={linkColor}
          letterCase={letterCase}
          widthSize={widthSize}
          navWidthFullOrFixed={navWidthFullOrFixed}
          view={view}
          navbarHeight={navbarHeight}
          position={position}
          CTABackgroundColor={CTABackgroundColor}
          CTAColorSameAsLinks={CTAColorSameAsLinks}
          CTATextColor={CTATextColor}
          fontWeight={fontWeight}
          isCTABorderOnOrOff={isCTABorderOnOrOff}
          CTABorderColor={CTABorderColor}
          CTABorderSize={CTABorderSize}
          CTAWidth={CTAWidth}
          CTABorderRadius={CTABorderRadius}
          hoverBackgroundColor={hoverBackgroundColor}
          borderSwitchState={borderSwitchState}
          borderSize={borderSize}
          borderStyle={borderStyle}
          navbarBorderColor={navbarBorderColor}
        />
        <Builder
          saveImg={saveImg}
          setOverlay={setOverlay}
          saveBackgroundColor={saveBackgroundColor}
          saveOverlayColor={saveOverlayColor}
          setBackgroundRadio={setBackgroundRadio}
          saveNavbarBackgroundColor={saveNavbarBackgroundColor}
          saveFontSize={saveFontSize}
          saveSpacing={saveSpacing}
          saveLinkColor={saveLinkColor}
          saveLetterCase={saveLetterCase}
          saveWidthSize={saveWidthSize}
          setNavWidthRadio={setNavWidthRadio}
          saveView={saveView}
          saveNavbarHeight={saveNavbarHeight}
          saveScrollable={saveScrollable}
          builderTop={builderTop}
          savePosition={savePosition}
          saveCTABackgroundColor={saveCTABackgroundColor}
          setCTASameAsLinkColor={setCTASameAsLinkColor}
          saveCTATextColor={saveCTATextColor}
          saveFontWeight={saveFontWeight}
          saveBorderOnOrOff={saveBorderOnOrOff}
          saveCTABorderColor={saveCTABorderColor}
          saveCTABorderSize={saveCTABorderSize}
          saveCTAWidth={saveCTAWidth}
          saveCTABorderRadius={saveCTABorderRadius}
          saveHoverSwitchState={saveHoverSwitchState}
          saveHoverBackgroundState={saveHoverBackgroundState}
          saveHoverBackgroundColor={saveHoverBackgroundColor}
          saveBorderSwitchState={saveBorderSwitchState}
          saveBorderSize={saveBorderSize}
          saveBorderStyle={saveBorderStyle}
          saveNavbarBorderColor={saveNavbarBorderColor}
        />
      </Background>
      {scrollable && <ScrollPage />}
    </>
  );
}

export default App;
