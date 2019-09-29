import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const BURGER_STATES = {
    ARROW: 'ARROW',
    BURGER: 'BURGER',
    EXIT: 'EXIT',
}

const burgerList = [
    BURGER_STATES.ARROW, BURGER_STATES.BURGER, BURGER_STATES.EXIT
]

const Burger = styled.div`
    width: ${props => props.theme.spacing(4)};
    height: ${props => props.theme.spacing(4)};
    position: relative;
    cursor: pointer;
    /* background: lightcyan; */
`

const Line = styled.div`
    height: 2px;
    width: 100%;
    position: absolute;
    transition: 0.5s cubic-bezier(0.75, 0, 0.26, 0.98);
    margin: auto;
    background-color: black;

    ${props => props.top && css`
        /* x */
        ${props => props.burgerState === BURGER_STATES.EXIT && css` 
            width: 0;
            top:0;
            right: 0;
            left: 0;
            bottom:0;
            /* opacity:0; */
        `}

        /* = */
        ${props => props.burgerState === BURGER_STATES.BURGER && css` 
            right: 0;
            left: 0;
            bottom: calc(100% - 5px);
            opacity:1;
        `}

        /* -> */
        ${props => props.burgerState === BURGER_STATES.ARROW && css` 
            transform: rotate(45deg);
            right: 0;
            width: 30%;
            left: 73%;
            bottom: 58%;
        `}
    `}

    ${props => props.bottom && css`
        /* x */
        ${props => props.burgerState === BURGER_STATES.EXIT && css` 
            width: 0;
            top:0;
            bottom:0;
            /* opacity:0; */
            right: 0;
            left: 0;
        `}

        /* = */
        ${props => props.burgerState === BURGER_STATES.BURGER && css` 
            right: 0;
            left: 0;
            top: calc(100% - 5px);
            /* bottom:5px; */
            opacity:1;
        `}

        /* -> */
        ${props => props.burgerState === BURGER_STATES.ARROW && css` 
            transform: rotate(-45deg);
            right: 0;
            width: 30%;
            left: 73%;
            top: 58%;
        `}
    `}


`

const CrossPart = styled.div`
    height: 2px;
    width: 100%;
    position: absolute;
    transition: 0.5s cubic-bezier(0.75, 0, 0.26, 0.98);
    background-color: black;
    top:0;
    bottom:0;
    margin: auto;
    ${props => props.burgerState === BURGER_STATES.EXIT && css`
        transform: ${props => props.rev ? 'rotate(-45deg)' : 'rotate(45deg)'};
    `}
`

export default class Menu extends Component {
    static propTypes = {
    }
    
    state = {
        burgerState: BURGER_STATES.ARROW,
        burgerIndex: 1,
    }
    
    toggleCollapsed (){
        this.setState({
            burgerIndex: (this.state.burgerIndex + 1) % burgerList.length ,
            burgerState: burgerList[this.state.burgerIndex],
        })
    }

    render() {
        return (
            <Burger onClick={this.toggleCollapsed.bind(this)}>
                <Line collapsed={this.state.collapsed} top burgerState={this.state.burgerState}></Line>
                <Line collapsed={this.state.collapsed} bottom burgerState={this.state.burgerState}></Line>
                <CrossPart collapsed={this.state.collapsed} burgerState={this.state.burgerState}/>
                <CrossPart collapsed={this.state.collapsed} rev burgerState={this.state.burgerState}/>
            </Burger>
        )
    }
}
