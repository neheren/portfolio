import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Root = styled.div`
    height: 100%;
    display: flex;
    align-items:center;
`

const LinkWrapper = styled.div`
    
`
const LinkItem = styled.a`
    text-decoration: none;
    color: black;
    font-weight: bold;
    margin: ${props => props.theme.spacing(0, 4)};
` 

function Links(props) {
    return (
        <Root>
            <LinkWrapper>
                <LinkItem href="/">video</LinkItem>
                <LinkItem href="/">about</LinkItem>
                <LinkItem href="/">cases</LinkItem>
                <LinkItem href="/">expirience</LinkItem>
            </LinkWrapper>
        </Root>
    )
}

Links.propTypes = {

}

export default Links

