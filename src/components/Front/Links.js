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
    margin-left: ${props => props.first ? props.theme.spacing(2) : props.theme.spacing(8)};
` 

function Links(props) {
    return (
        <Root>
            <LinkWrapper>
                <LinkItem href="/" first>video</LinkItem>
                <LinkItem href="/">cases</LinkItem>
                <LinkItem href="/">about</LinkItem>
                <LinkItem href="/">expirience</LinkItem>
            </LinkWrapper>
        </Root>
    )
}

Links.propTypes = {

}

export default Links

