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
    transition: 0.4s cubic-bezier(0.75, 0, 0.26, 0.98);

    align-self: center;
    background-color: black;
    ${props => props.center && css`
        margin: auto;
        top: 0;
        bottom: 0;
        ${props => !props.collapsed && css`
            width: 0%;
        `}
    `}

    ${props => props.top && css`
        top: 5px;
        transform-origin:left;
        ${props => !props.collapsed && css`
            top: 0;
            transform: rotate(45deg);
            width: 137.1%;
        `}
    `}

    ${props => props.bottom && css`
        transform-origin:left;
        bottom: 5px;
        ${props => !props.collapsed && css`
            bottom: 0px;    
            transform: rotate(-45deg);
            width: 137.1%;
        `}
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
                <Line collapsed={this.state.collapsed} center></Line>
                <Line collapsed={this.state.collapsed} bottom></Line>
            </Burger>
        )
    }
}
