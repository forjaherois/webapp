import { Grid, Input, Text } from '@nextui-org/react';
import {
    ButtonSignup,
    ContainerForm,
    WrapperItemsForm,
} from './signup-form-styles';

export const SignupForm = () => {
    return (
        <ContainerForm>
            <WrapperItemsForm>
                <Grid css={{ width: '35%' }}>
                    <Text h2 weight='bold'>
                        sign up
                    </Text>
                </Grid>

                <Input
                    bordered
                    css={{ marginTop: '15px' }}
                    width={'35%'}
                    label='email'
                />
                <Input
                    bordered
                    css={{ marginTop: '10px' }}
                    width={'35%'}
                    label='senha'
                />
                <Input
                    bordered
                    css={{ marginTop: '10px' }}
                    width={'35%'}
                    label='nickname'
                />
                <ButtonSignup shadow>sign up</ButtonSignup>
            </WrapperItemsForm>
        </ContainerForm>
    );
};
