import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import HoverTransformer from '../HoverTransformer'
import arrow from '../../graphics/arrow-white.svg'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import slytLogo from '../../graphics/slytBlack.svg'

const Root = styled.div`
    position: relative;
    width: 100%;
    overflow:hidden;
    background: url(${props => props.image});
    background-size:cover;  
    background-position: center;
    color: white;
    font-weight: bolder;

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

    width: 20%;
    transform: translateZ(40px);
    ${props => props.big ? css`
        filter: drop-shadow(0 0 10px rgba(0,0,0, 0.4));
        right: 30px;
        bottom: 30px;
    ` : css`
        right: 15px;
        bottom: 15px;
        opacity: 0;
        font-size: 15px;
        filter: drop-shadow(0 0 5px rgba(0,0,0, 0.4));

    `}
` 
const Title = styled.h3`
    transition: 0.5s cubic-bezier(0, 0.59, 0.08, 1);
    color: white;
    position: absolute;
    width: 50%;
    ${props => props.big ? css`
        left: 30px;
        bottom: 25px;
        font-size: 25px;
        filter: drop-shadow(0 0 10px rgba(0,0,0, 0.4));
    ` : css`
        left: 15px;
        bottom: 10px;
        opacity: 0;
        font-size: 15px;
        filter: drop-shadow(0 0 5px rgba(0,0,0, 0.4));

    `}
    transform: translateZ(40px);
    b {
        font-weight:bolder;
    }
` 

const HoverTransformerWrapper = styled(HoverTransformer)`
    transition: 0.5s cubic-bezier(0, 0.59, 0.08, 1);
    cursor: pointer;
    :hover{
        transform: translateZ(0px) scale(0.90);
        ${Title}{
            opacity: 1 !important;
        }
        ${Arrow}{
            opacity: 1 !important;
        }
    }
    :active {
        transform: translateZ(0px) scale(0.85);
    }
`


const CaseThump = (props) => {
    const project = props.getProject()
    return (
        <HoverTransformerWrapper className={props.className} >
            <Arrow src={arrow} big={props.big} /> 
            <Title big={props.big}> {
                props.big ? <>
                    <b>latest </b><span>project</span>
                </> : <span>{project.case.title}</span>
                }
            </Title>
            <AniLink 
                onClick={props.openProject(project.index)}
                cover
                bg={`
                    url(${slytLogo})
                    center / 15%   /* position / size */
                    no-repeat        /* repeat */
                    fixed            /* attachment */
                    padding-box      /* origin */
                    content-box      /* clip */
                    white            /* color */
                `}
                color="white"
                direction="down"
                delay={5}
                entry={{
                    delay: 0.5
                }}
                duration={1}
                
                to={"/cases/" + project.case.slug}>
                    
                <Root className={props.className} image={project && project.case.coverImage.fluid.src || null}>
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
