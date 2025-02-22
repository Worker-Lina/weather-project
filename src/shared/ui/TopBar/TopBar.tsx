import { memo } from 'react';
import styled from 'styled-components';
import { H1 } from '../Headlines';
import { SelectCity } from '../../../features/selectCity';

const TopBarStyled = styled.div`
    display: flex;
    justify-content: space-between;
`

export const TopBar = memo(() => {
    return (
        <TopBarStyled>
            <H1>Прогноз погоды</H1>
        </TopBarStyled>
    );
});