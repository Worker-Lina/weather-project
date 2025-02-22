import { memo, ReactNode } from 'react';
import styled from 'styled-components';

interface ContainerProps {
    children?: ReactNode;
}

const ContainerStyled = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items:center;
    background: #fafafa3d;
    height: 100%;
    padding: 20px;
`

export const Container = memo(({ children }: ContainerProps) => {
    return (
        <ContainerStyled>
            {children}
        </ContainerStyled>
    );
});