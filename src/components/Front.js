import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import bg from '../graphics/thump.png'
import slytLogo from '../graphics/slyt.svg'
import Menu from './Menu'


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
`

const Video = styled.div`
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    background-image: url(${bg});
    background-size: cover;
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
    width: 250px;

`

const Logo = styled.img`
    width: 100%;
`

const front = props => {
    return (
        <Root>
            <MenuWrapper>
                <Menu />
            </MenuWrapper>
            <Video>
                <Center>
                    <Logo src={slytLogo} />
                </Center>
            </Video>
        </Root>
    )
}

front.propTypes = {

}

export default front
