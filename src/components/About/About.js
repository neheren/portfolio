import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Fade } from 'react-reveal';
import img from '../../graphics/img2.jpg'

const Root = styled.div`
    display:grid;
    grid-template-columns: ${props => props.theme.spacing(16)} 1fr ${props => props.theme.spacing(16)};
    padding: ${props => props.theme.spacing(16, 0)};
`

const Content = styled.div`
    grid-gap: ${props => props.theme.spacing(4)};
    grid-column: 2 / 3;
    display: grid;
    grid-template-columns: 1fr 2fr;
    color: white;
`

const Image = styled.div`
    grid-row: 1 / -1;
    width: 100%;
    padding-bottom: 100%;
    background-image: url(${props => props.img});
    background-size: cover;
`

const GradiantBG = styled.div`
    margin-top: calc(-100vw / 10 * 4);
    padding-top: calc(100vw / 10 * 4);

    @media ${props => props.theme.media.lg} {
        margin-top: calc(-100vw / 8 * 3);
        padding-top: calc(100vw / 8 * 3);
    }
    @media ${props => props.theme.media.md} {
        margin-top: calc(-100vw / 6 * 3 - 2px);
        padding-top: calc(100vw / 6 * 3 - 2px);
    }
    @media ${props => props.theme.media.sm} {
        margin-top: calc(-100vw / 2 * 3 - 2px);
        padding-top: calc(100vw / 2 * 3 - 2px);
        grid-template-columns: repeat(2, 1fr);
    }
    width: 100%;
    background-image: linear-gradient(0deg,#FF1570 0% ,#E94700 calc(100% - 100vw / 10), rgba(1,1,1,0) );
`

const GradiantBGWrapper = styled.div`
    background: linear-gradient(to bottom,  rgba(255,255,255,0) 0%, rgba(255,255,255,1) 70%);

`

const Desc = styled.p`
`

const Header = styled.h2`
    font-size: 30px;
    font-weight: bolder;
`

const Right = styled.div`
    grid-column: 2 / 3;
`

function About(props) {
    return (
        <GradiantBGWrapper>
            <GradiantBG>
                <Root>
                    <Content>
                        <Image img={img} />
                        <Right>
                            <Header>
                                <Fade bottom cascade>
                                    about me
                                </Fade>
                            </Header>
                            <Desc>
                                <Fade bottom>
                                    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video
                                </Fade>
                            </Desc>
                        </Right>
                    </Content>
                </Root>
            </GradiantBG>
        </GradiantBGWrapper>
    )
}

About.propTypes = {

}

export default About

