import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import projectArrow from '../../graphics/project-arrow.svg'

const Root = styled.div`
    height: 100%;
    display: flex;
    align-items:center;
    grid-column: 2 / 3;
    grid-row: 1 / 2;

`

const LinkWrapper = styled.div`
    max-width: 100%;
`
const LinkItem = styled.a`
    text-decoration: none;
    color: black;
    font-weight: ${props => props.first ? 'bold' : 'normal'};
    @media ${props => props.theme.media.md} {
    	margin-left: ${props => props.first ? props.theme.spacing(0) : props.theme.spacing(1.5)};
    }
    @media ${props => props.theme.media.sm} {
        font-size: 12px;
    }

`

const Arrow = styled.img`
    height: 15px;
    margin: ${props => props.theme.spacing(0, 2)};
`


function ProjectLinks(props) {
    return (
        <Root>
            <LinkItem href="/cases" first>cases</LinkItem>
            <Arrow src={projectArrow} />
            <LinkItem>case name</LinkItem>
        </Root>
    )
}

ProjectLinks.propTypes = {

}

export default ProjectLinks

