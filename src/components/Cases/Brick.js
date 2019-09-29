import React from 'react'
// import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Root = styled.div`
    position: relative;
    width: 100%;
    border-color: black;
    outline: 1px solid black;
    outline-offset: 0;
    background-color: white;
    z-index: 1500;
    @keyframes moveOut {
        0% {
            transform: perspective(1000px) rotateX(0deg) rotateY(0) scale(1);; 
        }
        /* 10% {
            transform: perspective(1000px) rotateX(0deg) rotateY(0) scale(0.8);
        } */
        100% {
            /* outline: 5px solid black; */
            transform: perspective(1000px) rotateX(0) rotateY(0) scale(0.90);
            /* transform: scale(0.2); */
        }
    }


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

    ${props => props.projectOpened && css`
        will-change: transform;
        transform-style: preserve-3d; 
        /* transition: all 1s cubic-bezier(0.19, 1, 0.22, 1); */
        /* transform: perspective(2000px) rotateX(0deg) rotateY(90deg) translateZ(1000px);  */
        animation: moveOut 0.5s forwards cubic-bezier(0.77, 0, 0.175, 1);
    `}
`

const Content = styled.div`
    position: absolute;
    top:5px;
    bottom:5px;
    left:5px;
    right:5px;
    /* filter: blur(10px); */

`

const Brick = props => {
    const tileIndex = props.getTileIndex()
    return (
        <Root className={props.className} db={props.db} projectOpened={props.projectOpened} i={tileIndex}>
            <Content>
            </Content>
        </Root>
    )
}

Brick.propTypes = {
    
}

export default Brick
