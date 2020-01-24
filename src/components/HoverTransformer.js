import React from 'react'
import PropTypes from 'prop-types'
// import styled, { css } from 'styled-components'
import ReactCursorPosition from 'react-cursor-position'

const PositionLabel = (props) => {
	const {
		detectedEnvironment: {
			isMouseDetected = false,
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
	} = props

	let xPos = 0, yPos = 0, scale = 1
	if(!isPositionOutside && isMouseDetected){
		xPos = x / (width || 1) - 0.5
		yPos = (1 - y / (height || 1)) - 0.5
	}
	scale = props.scale || 30

	return (
		<div style={isPositionOutside ? {
			transition: `2s cubic-bezier(0, 0.59, 0.08, 1) `,
			transform: (`perspective(${props.perspective || 2000}px) rotateX(${yPos * scale}deg) rotateY(${xPos * scale}deg)`),
			willChange: 'transform',
			transformStyle: 'preserve-3d',
		} : {
			willChange: 'transform',
			transformStyle: 'preserve-3d',
			transform: (`perspective(${props.perspective || 2000}px) rotateX(${yPos * scale}deg) rotateY(${xPos * scale}deg)`)
		}}>
			{props.children}
		</div>
	)
}



const HoverTransformer = props => {
	let {disable, children} = props
	disable = disable || false

	return disable ? <>{children}</> :
		<ReactCursorPosition className={props.className} >
			<PositionLabel perspective={props.perspective} scale={props.scale}>
				{children}
			</PositionLabel>
		</ReactCursorPosition>
}

HoverTransformer.propTypes = {
	className: PropTypes.string,
	scale: PropTypes.int,
	children: PropTypes.any,
	perspective: PropTypes.int,
	detectedEnvironment: PropTypes.object,
	elementDimensions: PropTypes.object,
}

PositionLabel.propTypes = {
	className: PropTypes.string,
	children: PropTypes.any,
	scale: PropTypes.int,
	perspective: PropTypes.int,
}

export default HoverTransformer
