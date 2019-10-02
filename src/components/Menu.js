import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import MenuOverlay from './MenuOverlay';

const BURGER_STATES = {
    ARROW: 'ARROW',
    BURGER: 'BURGER',
    EXIT: 'EXIT',
}

const Burger = styled.div`
    width: ${props => props.theme.spacing(4)};
    height: ${props => props.theme.spacing(4)};
    left: ${props => props.theme.spacing(4)};
    top: ${props => props.theme.spacing(4)};
    ${props => props.burgerState !== BURGER_STATES.ARROW && css`
        cursor: pointer;
    `}
    position: fixed;
    display: inline;
    z-index: 3000;
`

const Line = styled.div`
    z-index: 1000;
    height: 2px;
    width: 100%;
    position: absolute;
    transition: 0.5s cubic-bezier(0.75, 0, 0.26, 0.98), background-color 0.3s linear;
    margin: auto;
    background-color: ${props => props.bgColor};

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
    background-color: ${props => props.bgColor};
    height: 2px;
    width: 100%;
    position: absolute;
    transition: 0.5s cubic-bezier(0.75, 0, 0.26, 0.98), background-color 0.3s linear;
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

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll.bind(this), true);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }
    
    state = {
        bgColor: 'black',
        burgerState: BURGER_STATES.ARROW,
        burgerIndex: 1,
    }
    
    handleScroll() {
        this.setState({
            burgerState: window.pageYOffset > 5 ? BURGER_STATES.BURGER : BURGER_STATES.ARROW,
        })
    }

    toggleCollapsed (){
        this.setState({
            burgerState: (this.state.burgerState === BURGER_STATES.EXIT) ? BURGER_STATES.BURGER : BURGER_STATES.EXIT,
        })
    }

    render() {
        console.log(this.state.bgColor)
        const LineColor = (window.pageYOffset > window.innerHeight * 2 || this.state.burgerState === BURGER_STATES.EXIT ? 'white' : 'black')
        return (
            <>
            {this.state.burgerState === BURGER_STATES.EXIT && <MenuOverlay />}
            <Burger onClick={this.toggleCollapsed.bind(this)} burgerState={this.state.burgerState}>
                <Line collapsed={this.state.collapsed} top burgerState={this.state.burgerState} bgColor={LineColor}></Line>
                <Line collapsed={this.state.collapsed} bottom burgerState={this.state.burgerState} bgColor={LineColor}></Line>
                <CrossPart collapsed={this.state.collapsed} burgerState={this.state.burgerState} bgColor={LineColor}/>
                <CrossPart collapsed={this.state.collapsed} rev burgerState={this.state.burgerState} bgColor={LineColor}/>
            </Burger>
            </>
        )
    }
}
