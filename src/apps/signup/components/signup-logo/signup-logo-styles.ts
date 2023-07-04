import { Grid } from '@nextui-org/react';
import { styled } from 'styled-components';

export const WrapperLogo = styled(Grid)<{ bgColor?: string }>`
    background-color: ${(props) => props?.bgColor};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100vh;
`;
