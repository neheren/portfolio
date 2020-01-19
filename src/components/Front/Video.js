import React from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const PlayerWrapper = styled.div`
    ${props => props.overSized && css`
        transform: translateX(-10%);
    `}
    width: 100%;
    height: 100%;
`

function Video(props) {
    const overSized = (!props.isProject) || false;
    const isProject = props.isProject || false;
    return (
        <PlayerWrapper overSized={overSized}>
			<ReactPlayer loop={!isProject} controls={isProject} playsinline={isProject} playing height="100%" width={overSized ? '120%' : '100%'} url={props.videoLink}  />
        </PlayerWrapper>
    )
}

Video.propTypes = {
    videoLink: PropTypes.string,
    isProject: PropTypes.bool,
    overSized: PropTypes.bool,
}

export default Video
