import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import HoverTransformer from '../HoverTransformer'
import arrow from '../../graphics/arrow-white.svg'
import img1 from '../../graphics/img1.jpg'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Root = styled.div`
    position: relative;
    width: 100%;
    overflow:hidden;
    background: url(${img1});
    background-size:cover;  
    color: white;
    font-weight: bolder;
    ${props => !props.blank && css`
        border-color: black;
        outline: 1px solid black;
        outline-offset: 0;
    `}

    :after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }
`

const Content = styled.div`
    position: absolute;
    top:5px;
    bottom:5px;
    left:5px;
    right:5px;
    /* filter: blur(10px); */

`

const Arrow = styled.img`
    position: absolute;
    right: 30px;
    bottom: 30px;
    width: 20%;
    transform: translateZ(40px);
    filter: drop-shadow(0 0 10px rgba(0,0,0, 0.4));

` 
const Title = styled.h3`
    color: white;
    position: absolute;
    left: 30px;
    bottom: 25px;
    width: 50%;
    font-size: 30px;
    transform: translateZ(40px);
    filter: drop-shadow(0 0 10px rgba(0,0,0, 0.4));
    b{
        font-weight:bolder;
    }
` 

const HoverTransformerWrapper = styled(HoverTransformer)`
    transition: 0.5s cubic-bezier(0, 0.59, 0.08, 1);
    cursor: pointer;
    :hover{
        transform: translateZ(0px) scale(0.90);
        /* transform: scale(0.95); */
    }
    :active {
        transform: translateZ(0px) scale(0.85);
    }
`

const CaseThump = (props) => {
    const project = props.getProject()
    return (
        <HoverTransformerWrapper className={props.className} >
            {props.big && <Arrow src={arrow}/> }
            {props.big && <Title> <b>latest</b> project</Title> }
            <AniLink 
                onClick={props.openProject(project.index)}
                cover
                bg="#EFEFEF"
                color="white"
                direction="down"
                delay={5}
                entry={{
                    delay: 0.5
                }}
                duration={1}
                to="/about">
                <Root className={props.className}>
                    <Content>
                    </Content>
                </Root>
            </AniLink>
        </HoverTransformerWrapper>
    )
}

CaseThump.propTypes = {
    blank: PropTypes.bool,
}

export default CaseThump
