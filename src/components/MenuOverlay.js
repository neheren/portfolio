import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Fade } from 'react-reveal';

const Root = styled.div`
    z-index: 2999;
    @keyframes fadeIn {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }

    animation: 1s fadeIn forwards;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(1, 1, 1, 0.7);
    color: white;
`

function MenuOverlay(props) {
    return (
        <Root>
            
        </Root>
    )
}

MenuOverlay.propTypes = {

}

export default MenuOverlay

