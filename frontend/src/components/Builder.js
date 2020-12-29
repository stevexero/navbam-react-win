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
import {
  faEyeSlash,
  faEye,
  faDesktop,
  faTabletAlt,
  faMobileAlt,
  faArrowsAltV,
} from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';

import PageBackground from './PageBackground';
import NavbarBackground from './NavbarBackground';
import NavbarLinks from './NavbarLinks';
import NavbarWidth from './NavbarWidth';
import NavbarHeight from './NavbarHeight';
import NavbarPosition from './NavbarPosition';
import CTALink from './CTALink';

const StyledBuilder = styled.section`
  width: 300px;
  height: 100%;
  position: fixed;
  top: ${(props) => props.builderTop}rem;
  left: ${(props) => props.builderLeft}px;
  overflow: scroll;
  z-index: 1;
  transition: 0.2s;
`;

const EyeWrapper = styled.div`
  background: #f4f4f4;
  border: 1px solid #e4e4e4;
  margin-top: 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: ${(props) => props.eyeBallLeft}px;
  z-index: 2;
  transition: 0.2s;
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
  saveScrollable,
  builderTop,
  savePosition,
  saveCTABackgroundColor,
  setCTASameAsLinkColor,
  saveCTATextColor,
}) => {
  const [builderView, setBuilderView] = useState(true);
  const [builderLeft, setBuilderLeft] = useState(0);
  const [eyeBallLeft, setEyeBallLeft] = useState(300);
  const [isActive, setIsActive] = useState({
    desktop: true,
    tablet: false,
    mobile: false,
    scroll: false,
  });
  const [view, setView] = useState('desktop');
  const [scrollable, setScrollable] = useState(false);

  useEffect(() => {
    saveView(view);
    saveScrollable(scrollable);
  }, [view, setView, saveView, scrollable, setScrollable, saveScrollable]);

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

  const handleScrollClick = () => {
    if (scrollable === false) {
      setScrollable(true);
      setIsActive({ ...isActive, scroll: true });
    } else {
      setScrollable(false);
      setIsActive({ ...isActive, scroll: false });
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

  const iconStyleScroll = {
    color: isActive.scroll ? 'dodgerblue' : '#000',
  };

  return (
    <StyledBuilder builderLeft={builderLeft} builderTop={builderTop}>
      <EyeWrapper eyeBallLeft={eyeBallLeft}>
        {builderView ? (
          <>
            <FontAwesomeIcon
              icon={faEyeSlash}
              onClick={hideShowBuilder}
              data-tip
              data-for='hide'
              data-delay-show={250}
            />
            <ReactTooltip id='hide'>Hide builder</ReactTooltip>
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faEye} onClick={hideShowBuilder} data-tip data-for='show' data-delay-show={250} />
            <ReactTooltip id='show'>Show builder</ReactTooltip>
          </>
        )}
        <FontAwesomeIcon
          icon={faDesktop}
          onClick={() => handleViewClick('desktop')}
          style={iconStyleDesktop}
          data-tip
          data-for='desktop'
          data-delay-show={250}
        />
        <ReactTooltip id='desktop'>Show navbar as it would appear on desktop</ReactTooltip>
        <FontAwesomeIcon
          icon={faTabletAlt}
          onClick={() => handleViewClick('tablet')}
          style={iconStyleTablet}
          data-tip
          data-for='tablet'
          data-delay-show={250}
        />
        <ReactTooltip id='tablet'>Show navbar as it would appear on tablet</ReactTooltip>
        <FontAwesomeIcon
          icon={faMobileAlt}
          onClick={() => handleViewClick('mobile')}
          style={iconStyleMobile}
          data-tip
          data-for='mobile'
          data-delay-show={250}
        />
        <ReactTooltip id='mobile'>Show navbar as it would appear on mobile</ReactTooltip>
        <FontAwesomeIcon
          icon={faArrowsAltV}
          onClick={handleScrollClick}
          style={iconStyleScroll}
          data-tip
          data-for='scroll'
          data-delay-show={250}
        />
        <ReactTooltip id='scroll'>
          Enable or disable page scrolling to see how your navbar scrolls with the page
        </ReactTooltip>
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
        {/* CTA LINK */}
        {/* CTA LINK */}
        {/* CTA LINK */}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>CTA Link</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <CTALink
              saveCTABackgroundColor={saveCTABackgroundColor}
              setCTASameAsLinkColor={setCTASameAsLinkColor}
              saveCTATextColor={saveCTATextColor}
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
        {/* NAVBAR POSITION */}
        {/* NAVBAR POSITION */}
        {/* NAVBAR POSITION */}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Navbar Position</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <NavbarPosition savePosition={savePosition} />
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
