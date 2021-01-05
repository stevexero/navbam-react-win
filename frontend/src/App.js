import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Builder from './components/Builder';
import styled from 'styled-components';
import ScrollPage from './components/ScrollPage';
import MobileMenu from './components/MobileMenu';

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
  const [hoverScaleState, setHoverScaleState] = useState();
  const [hoverScaleSize, setHoverScaleSize] = useState();
  const [hoverColorState, setHoverColorState] = useState();
  const [hoverColor, setHoverColor] = useState();
  const [hoverTransitionTime, setHoverTransitionTime] = useState();
  const [CTAHoverSwitchState, setCTAHoverSwitchState] = useState();
  const [CTAHoverBackgroundState, setCTAHoverBackgroundState] = useState();
  const [CTAHoverBackgroundColor, setCTAHoverBackgroundColor] = useState();
  const [CTAHoverColorState, setCTAHoverColorState] = useState();
  const [CTAHoverColor, setCTAHoverColor] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [sameAsNavbarBackgroundColor, setSameAsNavbarBackgroundColor] = useState();
  const [mobileMenuBackgroundColor, setMobileMenuBackgroundColor] = useState();
  const [sameAsNavbarLinksColor, setSameAsNavbarLinksColor] = useState();
  const [mobileMenuLinksColor, setMobileMenuLinksColor] = useState();

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

  const saveHoverScaleState = (e) => {
    setHoverScaleState(e);
  };

  const saveHoverScaleSize = (e) => {
    hoverSwitchState && hoverScaleState ? setHoverScaleSize(e) : setHoverScaleSize(1);
  };

  const saveHoverColorState = (e) => {
    setHoverColorState(e);
  };

  const saveHoverColor = (e) => {
    hoverSwitchState && hoverColorState ? setHoverColor(e) : setHoverColor(linkColor);
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

  const saveHoverTransitionTime = (e) => {
    setHoverTransitionTime(e);
  };

  const saveCTAHoverSwitchState = (e) => {
    setCTAHoverSwitchState(e);
  };

  const saveCTAHoverBackgroundState = (e) => {
    setCTAHoverBackgroundState(e);
  };

  const saveCTAHoverBackgroundColor = (e) => {
    CTAHoverSwitchState && CTAHoverBackgroundState
      ? setCTAHoverBackgroundColor(
          JSON.stringify(e.r) + ',' + JSON.stringify(e.g) + ',' + JSON.stringify(e.b) + ',' + JSON.stringify(e.a)
        )
      : setCTAHoverBackgroundColor(hoverColor);
  };

  const saveCTAHoverColorState = (e) => {
    setCTAHoverColorState(e);
  };

  const saveCTAHoverColor = (e) => {
    CTAHoverSwitchState && CTAHoverColorState ? setCTAHoverColor(e) : setCTAHoverColor(hoverColor);
  };

  const saveIsOpen = (e) => {
    setIsOpen(e);
  };

  const saveSameAsNavbarBackgroundColor = (e) => {
    setSameAsNavbarBackgroundColor(e);
  };

  const saveMobileMenuBackgroundColor = (e) => {
    setMobileMenuBackgroundColor(
      JSON.stringify(e.r) + ',' + JSON.stringify(e.g) + ',' + JSON.stringify(e.b) + ',' + JSON.stringify(e.a)
    );
  };

  const saveSameAsNavbarLinksColor = (e) => {
    setSameAsNavbarLinksColor(e);
  };

  const saveMobileMenuLinksColor = (e) => {
    setMobileMenuLinksColor(e);
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
          hoverScaleSize={hoverScaleSize}
          hoverColor={hoverColor}
          hoverTransitionTime={hoverTransitionTime}
          CTAHoverBackgroundColor={CTAHoverBackgroundColor}
          CTAHoverColor={CTAHoverColor}
          saveIsOpen={saveIsOpen}
        />
        {isOpen && (
          <MobileMenu
            view={view}
            backgroundColor={sameAsNavbarBackgroundColor ? navbarBackgroundColor : mobileMenuBackgroundColor}
            linkColor={sameAsNavbarLinksColor ? linkColor : mobileMenuLinksColor}
            position={position === 'relative' ? 'absolute' : 'fixed'}
            letterCase={letterCase}
            fontSize={fontSize}
          />
        )}
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
          saveHoverScaleState={saveHoverScaleState}
          saveHoverScaleSize={saveHoverScaleSize}
          saveHoverColorState={saveHoverColorState}
          saveHoverColor={saveHoverColor}
          saveHoverTransitionTime={saveHoverTransitionTime}
          saveCTAHoverSwitchState={saveCTAHoverSwitchState}
          saveCTAHoverBackgroundState={saveCTAHoverBackgroundState}
          saveCTAHoverBackgroundColor={saveCTAHoverBackgroundColor}
          saveCTAHoverColorState={saveCTAHoverColorState}
          saveCTAHoverColor={saveCTAHoverColor}
          saveSameAsNavbarBackgroundColor={saveSameAsNavbarBackgroundColor}
          saveMobileMenuBackgroundColor={saveMobileMenuBackgroundColor}
          saveSameAsNavbarLinksColor={saveSameAsNavbarLinksColor}
          saveMobileMenuLinksColor={saveMobileMenuLinksColor}
        />
      </Background>
      {scrollable && <ScrollPage />}
    </>
  );
}

export default App;
