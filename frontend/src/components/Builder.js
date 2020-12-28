import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye, faDesktop, faTabletAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import PageBackground from './PageBackground';
import NavbarBackground from './NavbarBackground';
import NavbarLinks from './NavbarLinks';
import NavbarWidth from './NavbarWidth';
import NavbarHeight from './NavbarHeight';

const StyledBuilder = styled.section`
  width: 300px;
  height: 100%;
  position: fixed;
  left: ${(props) => props.builderLeft}px;
  overflow: scroll;
  z-index: 1;
`;

const EyeWrapper = styled.div`
  background: #f4f4f4;
  border: 1px solid #e4e4e4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: ${(props) => props.eyeBallLeft}px;
  z-index: 2;
`;

const Builder = ({
  saveImg,
  setOverlay,
  saveBackgroundColor,
  saveOverlayColor,
  setBackgroundRadio,
  saveNavbarBackgroundColor,
  saveFontSize,
  saveSpacing,
  saveLinkColor,
  saveLetterCase,
  saveWidthSize,
  setNavWidthRadio,
  saveView,
  saveNavbarHeight,
}) => {
  const [builderView, setBuilderView] = useState(true);
  const [builderLeft, setBuilderLeft] = useState(0);
  const [eyeBallLeft, setEyeBallLeft] = useState(300);
  const [isActive, setIsActive] = useState({
    desktop: true,
    tablet: false,
    mobile: false,
  });
  const [view, setView] = useState('desktop');

  useEffect(() => {
    saveView(view);
  }, [view, setView, saveView]);

  const hideShowBuilder = () => {
    if (builderView) {
      setBuilderView(false);
      setBuilderLeft(-300);
      setEyeBallLeft(0);
    } else {
      setBuilderView(true);
      setBuilderLeft(0);
      setEyeBallLeft(300);
    }
  };

  const handleViewClick = (e) => {
    if (e === 'desktop') {
      setIsActive({ ...isActive, desktop: true, tablet: false, mobile: false });
      setView('desktop');
    } else if (e === 'tablet') {
      setIsActive({ ...isActive, desktop: false, tablet: true, mobile: false });
      setView('tablet');
    } else if (e === 'mobile') {
      setIsActive({ ...isActive, desktop: false, tablet: false, mobile: true });
      setView('mobile');
    }
  };

  const iconStyleDesktop = {
    color: isActive.desktop ? 'dodgerblue' : '#000',
  };

  const iconStyleTablet = {
    color: isActive.tablet ? 'dodgerblue' : '#000',
  };

  const iconStyleMobile = {
    color: isActive.mobile ? 'dodgerblue' : '#000',
  };

  return (
    <StyledBuilder builderLeft={builderLeft}>
      <EyeWrapper eyeBallLeft={eyeBallLeft}>
        {builderView ? (
          <FontAwesomeIcon icon={faEyeSlash} onClick={hideShowBuilder} />
        ) : (
          <FontAwesomeIcon icon={faEye} onClick={hideShowBuilder} />
        )}
        <FontAwesomeIcon icon={faDesktop} onClick={() => handleViewClick('desktop')} style={iconStyleDesktop} />
        <FontAwesomeIcon icon={faTabletAlt} onClick={() => handleViewClick('tablet')} style={iconStyleTablet} />
        <FontAwesomeIcon icon={faMobileAlt} onClick={() => handleViewClick('mobile')} style={iconStyleMobile} />
      </EyeWrapper>

      <Accordion allowZeroExpanded>
        {/* PAGE BACKGROUND */}
        {/* PAGE BACKGROUND */}
        {/* PAGE BACKGROUND */}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Page Background</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <PageBackground
              saveImg={saveImg}
              setOverlay={setOverlay}
              saveBackgroundColor={saveBackgroundColor}
              saveOverlayColor={saveOverlayColor}
              setBackgroundRadio={setBackgroundRadio}
            />
          </AccordionItemPanel>
        </AccordionItem>
        {/* NAVBAR BACKGROUND */}
        {/* NAVBAR BACKGROUND */}
        {/* NAVBAR BACKGROUND */}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Navbar Background</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <NavbarBackground saveNavbarBackgroundColor={saveNavbarBackgroundColor} />
          </AccordionItemPanel>
        </AccordionItem>
        {/* NAVBAR LINKS */}
        {/* NAVBAR LINKS */}
        {/* NAVBAR LINKS */}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Navbar Links</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <NavbarLinks
              saveFontSize={saveFontSize}
              saveSpacing={saveSpacing}
              saveLinkColor={saveLinkColor}
              saveLetterCase={saveLetterCase}
            />
          </AccordionItemPanel>
        </AccordionItem>
        {/* NAVBAR WIDTH */}
        {/* NAVBAR WIDTH */}
        {/* NAVBAR WIDTH */}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Navbar Width</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <NavbarWidth saveWidthSize={saveWidthSize} setNavWidthRadio={setNavWidthRadio} />
          </AccordionItemPanel>
        </AccordionItem>
        {/* NAVBAR HEIGHT */}
        {/* NAVBAR HEIGHT */}
        {/* NAVBAR HEIGHT */}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Navbar Height</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <NavbarHeight saveNavbarHeight={saveNavbarHeight} />
          </AccordionItemPanel>
        </AccordionItem>
        {/* NAVBAR EFFECTS */}
        {/* NAVBAR EFFECTS */}
        {/* NAVBAR EFFECTS */}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Navbar Effects</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, reiciendis.</p>
          </AccordionItemPanel>
        </AccordionItem>
        {/* MOBILE SETTINGS */}
        {/* MOBILE SETTINGS */}
        {/* MOBILE SETTINGS */}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Mobile Settings</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, reiciendis.</p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </StyledBuilder>
  );
};

export default Builder;
