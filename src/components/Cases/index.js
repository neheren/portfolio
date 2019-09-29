import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Brick from './Brick'
import CaseThump from './CaseThump'


const B = styled(Brick)`
    ${props => props.b && css`
        opacity: 0;
    `}
    @media ${props => props.theme.media.lg} {
        ${props => props.lg && css`
            display: none;
        `}
    }
    @media ${props => props.theme.media.md} {
        ${props => props.md && css`
            display: none;
        `}
    }
    @media ${props => props.theme.media.sm} {
        ${props => props.sm && css`
            display: none;
        `}
    }
` 
const C = styled(CaseThump)`
    ${props => props.big && css`
        grid-column: auto / span 2;
        grid-row: auto / span 2;
    `}
` 

const Root = styled.div`
    overflow:hidden;
    background: #EFEFEF;
    padding-top: 1px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    @media ${props => props.theme.media.lg} {
        grid-template-columns: repeat(8, 1fr);
    }
    @media ${props => props.theme.media.md} {
        grid-template-columns: repeat(6, 1fr);
    }
    @media ${props => props.theme.media.sm} {
        grid-template-columns: repeat(2, 1fr);
    }
    ${B} {
        /* background:red; */
    }
`

const GradiantBG = styled.div`
    margin-top: calc(-100vw / 10 * 3 - 2px);
    padding-top: calc(100vw / 10 * 3 - 2px);

    @media ${props => props.theme.media.lg} {
        margin-top: calc(-100vw / 8 * 2 - 2px);
        padding-top: calc(100vw / 8 * 2 - 2px);
    }
    @media ${props => props.theme.media.md} {
        margin-top: calc(-100vw / 6 * 2 - 2px);
        padding-top: calc(100vw / 6 * 2 - 2px);
    }
    @media ${props => props.theme.media.sm} {
        margin-top: calc(-100vw / 2 * 2 - 2px);
        padding-top: calc(100vw / 2 * 2 - 2px);
        grid-template-columns: repeat(2, 1fr);
    }
    width: 100%;
    height: 200vh;
    background-image: linear-gradient(45deg, #FF1570, #E94700);


`
{/* <B lg/> <B db/>         <B sm b/><B md b/> <B sm b/> <B sm/> <B sm/> <B md/> <B lg b/>
<B lg/> <B md/> <B sm/> <B sm/> <B/> <B/>    <B sm/> <B sm/> <B md/> <B lg/>
<B lg/> <B md/> <C big/>        <C/> <C/>    <C/>    <C/>    <B md/> <B lg/>
<B lg/> <B md/>                 <C b/> <C/>    <C/>    <C/>    <B md/> <B lg/>
<B lg/> <B md/> <B sm/> <B sm/> <B sm/> <B/> <B sm/> <B sm/> <B md/> <B lg/>
<B lg/> <B md/> <B sm/> <B sm/> <B sm/> <B/> <B sm/> <B sm/> <B md/> <B lg b/>
<B lg b/> <B md/> <B sm/> <B sm/> <B sm b/> <B/> <B sm/> <B sm b/> <B md b/> <B lg b/>
<B lg b/> <B md b/> <B sm /> <B sm b/> <B sm b/> <B b/> <B sm b/> <B sm b/> <B md b/> <B lg b/> */}



export default class index extends Component {
    static propTypes = {
        // prop: PropTypes
    }

    state = {
        chosenProject: -1,
        projectOpened: false,
    }

    openProject(index){
        this.setState({projectOpened: !this.state.projectOpened, chosenProject: index})
    }

    
    render() {
        const cases = [
            'heyson1',
            'heyson2',
            'heyson3',
            'heyson4',
            'heyson5',
            'heyson6',
            'heyson7',
        ]

        const {chosenProject, projectOpened} = this.state;
        
        const p = {
            test: "yy",
            openProject: (index) => this.openProject.bind(this, index),
            projectIndex: -1,
            getProject: () => {
                p.projectIndex++
                return {case: cases[p.projectIndex], index: p.projectIndex}
            },
            tileIndex: -1,
            getTileIndex: () => {
                p.tileIndex++
                return p.tileIndex
            },
            chosenProject,
            projectOpened,
        }
        
        const tiles = [
            <B lg {...p} />,    <B db {...p} />,                        <B sm b {...p} />,  <B md b {...p} />,  <B sm b {...p} />,<B sm {...p} />,<B sm {...p} />,      <B md {...p} />,    <B lg b {...p} />,
            <B lg {...p} />,    <B md {...p} />,    <B sm {...p} />,    <B sm {...p} />,    <B {...p} />,       <B {...p} />,    <B sm {...p} />, <B sm {...p} />,      <B md {...p} />,    <B lg {...p} />,
            <B lg {...p} />,    <B md {...p} />,    <C big {...p} />,                       <C {...p} />,       <C {...p} /> ,   <C {...p} />,    <C {...p} />,         <B md {...p} />,    <B lg {...p} />,
            <B lg {...p} />,    <B md {...p} />,                                            <C b {...p} />,     <C {...p} />,    <C {...p} />,    <C {...p} />,         <B md {...p} />,    <B lg {...p} />,
            <B lg {...p} />,    <B md {...p} />,    <B sm {...p} />,    <B sm {...p} />,    <B sm {...p} />,    <B {...p} />,    <B sm {...p} />, <B sm {...p} />,      <B md {...p} />,    <B lg {...p} />,
            <B lg {...p} />,    <B md {...p} />,    <B sm {...p} />,    <B sm {...p} />,    <B sm {...p} />,    <B {...p} />,    <B sm {...p} />, <B sm {...p} />,      <B md {...p} />,    <B lg b {...p} />,
            <B lg b {...p} />,  <B md {...p} />,    <B sm {...p} />,    <B sm {...p} />,    <B sm b {...p} />,  <B {...p} />,    <B sm {...p} />, <B sm b {...p} />,    <B md b {...p} />,  <B lg b {...p} />,
            <B lg b {...p} />,  <B md b {...p} />,  <B sm  {...p} />,   <B sm b {...p} />,  <B sm b {...p} />,  <B b {...p} />,  <B sm b {...p} />,<B sm b {...p} />,   <B md b {...p} />,  <B lg b {...p} />,
        ]
        return (
            <>
                <Root>
                    {
                        tiles
                    }
                </Root>
                <GradiantBG>Hey!</GradiantBG>
            </>
        )
    }
}
