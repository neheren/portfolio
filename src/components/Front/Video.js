import React from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'

function Video(props) {
    return (
        <ReactPlayer loop muted playsinline playing height="120%" width="auto" url={props.videoLink}  />
    )
}

Video.propTypes = {
    videoLink: PropTypes.string,
}

export default Video
