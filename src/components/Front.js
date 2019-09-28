import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import bg from '../graphics/thump.png'
import slytLogo from '../graphics/slyt.svg'
import Menu from './Menu'
import Links from './Links'
import Copyright from './Copyright'
import HoverTransformer from './HoverTransformer'
import InlineVideo from './Video'

const Root = styled.div`
    display: grid;
    background: #EFEFEF;
    grid-template-columns: ${props => props.theme.spacing(16)} auto ${props => props.theme.spacing(16)};
    grid-template-rows: ${props => props.theme.spacing(16)} auto ${props => props.theme.spacing(16)};
    @media ${props => props.theme.media.md} {
        grid-template-columns: ${props => props.theme.spacing(4)} auto ${props => props.theme.spacing(4)};
        grid-template-rows: ${props => props.theme.spacing(4)} auto ${props => props.theme.spacing(4)};
    }
    height: 100vh;
    position: relative;
`

const Video = styled.div`
    overflow: hidden;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    background-image: url(${bg});
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MenuWrapper = styled.div`
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    justify-self: center;
    align-self: center;
`

const Center = styled.div`
    height: 100%;
`

const Logo = styled.img`
    padding: 50px;
    transform: translateZ(150px);
    width: 200px;
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    margin: auto;
    z-index: 1000;
`

const CopyrightWrapper = styled.div`
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    position: relative;
    justify-self: center;
`

const mousePerspective = () => {

}



const front = props => {
    return (
        <Root>
            <CopyrightWrapper>
                <Copyright />
            </CopyrightWrapper>
            <MenuWrapper>
                <Menu />
            </MenuWrapper>
            <Links/>
            <Video>
                <HoverTransformer style={{height: '100%', width: '100%'}}>
                        <InlineVideo style={{transform: 'translateZ(150px)'}} />
                        <Logo src={slytLogo} />
                </HoverTransformer>
            </Video>
        </Root>
    )
}

front.propTypes = {

}

export default front
