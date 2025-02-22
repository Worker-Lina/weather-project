import { memo } from 'react';
import weather from '../../assets/weathers.svg'
import styled from 'styled-components';

const ImgStyled = styled.img`
    width: 500px;
    margin: 0 auto;
`

export const SvgWeather = memo(() => {
    return (
        <ImgStyled src={weather}/>  
    );
});