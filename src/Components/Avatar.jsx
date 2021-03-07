import React from 'react';
import styled from 'styled-components';

const Avatar = (props) => {
    const {src, width, height, background, borderRadius} = props

    return (
        <Image src={src} alt='avatar' width={width} height={height}
               background={background} borderRadius={borderRadius}/>
    )
}

const Image = styled.img`
  width: ${props => props.width || 'unset'};
  height: ${props => props.height || 'unset'};
  background ${props => props.background || 'unset'};
  border-radius: ${props => props.borderRadius || 'unset'};
`

export default Avatar;