import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'



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
        right: 0;
        left: 0;
        bottom: calc(100% - 5px);
        top:5px;
        opacity:1;
        ${props => !props.collapsed && css`
            width: 0;
            top:0;
            opacity:0;
            bottom:0;
        `}
    `}

    ${props => props.bottom && css`
        right: 0;
        left: 0;
        top: calc(100% - 5px);
        bottom:5px;
        opacity:1;

        ${props => !props.collapsed && css`
            width: 0;
            top:0;
            bottom:0;
            opacity:0;

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
    ${props => !props.collapsed && css`
        transform: ${props => props.rev ? 'rotate(-45deg)' : 'rotate(45deg)'};
    `}
`

export default class Menu extends Component {
    static propTypes = {
    }
    
    state = {
        collapsed: true
    }
    
    toggleCollapsed (){
        this.setState({collapsed: !this.state.collapsed})
    }

    render() {
        return (
            <Burger onClick={this.toggleCollapsed.bind(this)}>
                <Line collapsed={this.state.collapsed} top></Line>
                <Line collapsed={this.state.collapsed} bottom></Line>
                <CrossPart collapsed={this.state.collapsed}/>
                <CrossPart collapsed={this.state.collapsed} rev/>
            </Burger>
        )
    }
}
