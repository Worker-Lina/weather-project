import { memo, ReactNode } from 'react';
import styled from 'styled-components';

interface H1Props {
    children?: ReactNode;
}

const H1Styled = styled.h1`
    font-size: 40px;
`

export const H1 = memo(({ children }: H1Props) => {
    return (
        <H1Styled>
            {children}
        </H1Styled>
    );
});