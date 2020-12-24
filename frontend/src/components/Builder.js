import styled from 'styled-components'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const StyledBuilder = styled.section`
    width: 300px;
    height: 100%;
    background-color: #ffdddd;
    position: fixed;
`

const StyledAccordianItemHeading = styled(AccordionItemHeading)`
    &:hover {
        cursor: pointer;
    }
`

const Builder = () => {
    return (
        <StyledBuilder>
            <Accordion allowZeroExpanded>
                {/* NAVBAR BACKGROUND */}
                {/* NAVBAR BACKGROUND */}
                {/* NAVBAR BACKGROUND */}
                <AccordionItem>
                    <StyledAccordianItemHeading>
                        <AccordionItemButton>
                            Navbar Background
                        </AccordionItemButton>
                    </StyledAccordianItemHeading>
                    <AccordionItemPanel>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, reiciendis.</p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </StyledBuilder>
    )
}

export default Builder
