import styled from 'styled-components';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

import PageBackground from './PageBackground';

const StyledBuilder = styled.section`
  width: 300px;
  height: 100%;
  border-right: 1px solid black;
  position: fixed;
  overflow: scroll;
  z-index: 1;
`;

const Builder = ({ saveImg }) => {
  return (
    <StyledBuilder>
      <Accordion allowZeroExpanded allowMultipleExpanded>
        {/* PAGE BACKGROUND */}
        {/* PAGE BACKGROUND */}
        {/* PAGE BACKGROUND */}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Page Background</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <PageBackground saveImg={saveImg} />
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, reiciendis.</p>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, reiciendis.</p>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, reiciendis.</p>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, reiciendis.</p>
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
