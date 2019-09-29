import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import videoLink from '../../graphics/portfoliovideo.mp4'

function Video(props) {
    return (
        <ReactPlayer playsinline loop height="120%" width="auto" url={videoLink} playing />
    )
}

Video.propTypes = {

}

export default Video
