import styled from 'styled-components'
// import { useMediaQuery } from 'react-responsive'

const StyledNav = styled.nav`
        width: 100vw;
        background-color: ${props => props.color};
    `

    const NavContainer = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `

    const Logo = styled.div`
        color: #fff;
    `

    const LinkContainer = styled.div`
        display: flex;
    `

    const StyledLink = styled.a`
        color: #fff;
        padding: 1rem;
    `

    const BorderedLink = styled(StyledLink)`
        background-color: #ff0000;
    `

const Navbar = ({ navBackgroundColor }) => {

    

    return (
        <StyledNav color={navBackgroundColor}>
            <NavContainer>
                <Logo>
                    LOGO
                </Logo>
                <LinkContainer>
                    <StyledLink href='#'>ABOUT</StyledLink>
                    <StyledLink href='#'>BLOG</StyledLink>
                    <StyledLink href='#'>CONTACT</StyledLink>
                    <BorderedLink href='#'>SHOP</BorderedLink>
                </LinkContainer>
            </NavContainer>
        </StyledNav>
    )
}

export default Navbar
