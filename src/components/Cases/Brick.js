import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Root = styled.div`
    width: 100%;
    border-color: black;
    outline: 1px solid black;
    outline-offset: 0;
    background-color: white;
    
    :after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }
    ${props => props.db && css`
        grid-column: auto / span 2;
        :after {
            padding-bottom: 50%;
        }
    `}
`

const Brick = props => {

    return (
        <Root className={props.className} db={props.db}>
            
        </Root>
    )
}

Brick.propTypes = {
    
}

export default Brick
