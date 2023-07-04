import { Button, Grid } from '@nextui-org/react';
import { styled } from 'styled-components';

export const ContainerForm = styled(Grid.Container)`
    display: flex;
    width: 50%;
`;

export const ButtonSignup = styled(Button)`
    background: #15447e;
    width: 40%;
    margin-top: 40px;
`;

export const WrapperItemsForm = styled(Grid)`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
`;
