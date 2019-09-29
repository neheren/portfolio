import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import ReactCursorPosition from 'react-cursor-position'


const PositionLabel = (props) => {
    const {
      detectedEnvironment: {
        isMouseDetected = false,
        isTouchDetected = false
      } = {},
      elementDimensions: {
        width = 0,
        height = 0
      } = {},
      isPositionOutside = false,
      position: {
        x = 0,
        y = 0
      } = {}
    } = props;

    let xPos = 0, yPos = 0, scale = 1
    if(!isPositionOutside && isMouseDetected){
        xPos = x / (width || 1) - 0.5
        yPos = (1 - y / (height || 1)) - 0.5
    }
    scale = 30

    return (
      <div style={isPositionOutside ? {
          transition: `2s cubic-bezier(0, 0.59, 0.08, 1) `,
          transform: (`perspective(2000px) rotateX(${yPos * scale}deg) rotateY(${xPos * scale}deg)`),
          willChange: 'transform',
          transformStyle: 'preserve-3d',

      } : {
        willChange: 'transform',
        transformStyle: 'preserve-3d',
        transform: (`perspective(${props.perspective || 2000}px) rotateX(${yPos * scale}deg) rotateY(${xPos * scale}deg)`)
      }}>
          {props.children}
      </div>
    );
  };



const HoverTransformer = props => {
    return (
        <ReactCursorPosition className={props.className} >
            <PositionLabel>
                {props.children}
            </PositionLabel>
        </ReactCursorPosition>
    )
}

HoverTransformer.propTypes = {

}

export default HoverTransformer
