import { Grid, Input, Text } from '@nextui-org/react';
import {
    ButtonSignup,
    ContainerForm,
    WrapperItemsForm,
} from './signup-form-styles';
import { useState } from 'react';

export const SignupForm = () => {
    const [email, setEmail] = useState<string>('');
    const [nickname, setNickname] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isEmailValid, setEmailValid] = useState<boolean>(true);
    const [incompleteForm, setIncompleteForm] = useState<boolean>();

    const validateEmail = (email: string) => {
        const pattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        setEmailValid(pattern.test(email) || email === '');
    };

    const getEmail = (email: string) => {
        setIncompleteForm(false);
        setEmail(email);
    };

    const handleSubmit = () => {
        const formInvalid = email === '' || nickname === '' || password === '';

        if (formInvalid) {
            setIncompleteForm(true);
        }
    };

    return (
        <ContainerForm data-testid='signup-form'>
            <WrapperItemsForm>
                <Grid css={{ width: '40%' }}>
                    <Text h2 weight='bold'>
                        sign up
                    </Text>
                </Grid>

                <Input
                    clearable
                    onBlur={(e) => validateEmail(e.currentTarget.value)}
                    onChange={(e) => getEmail(e.currentTarget.value)}
                    css={{ marginTop: '15px' }}
                    width={'40%'}
                    label='email'
                    status={
                        isEmailValid && !incompleteForm ? 'default' : 'error'
                    }
                />
                <Input
                    clearable
                    css={{ marginTop: '10px' }}
                    onChange={(e) => setNickname(e.currentTarget.value)}
                    width={'40%'}
                    label='nickname'
                    status={incompleteForm ? 'error' : 'default'}
                />
                <Input.Password
                    clearable
                    css={{ marginTop: '10px' }}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    width={'40%'}
                    label='senha'
                    status={incompleteForm ? 'error' : 'default'}
                />

                <ButtonSignup onPress={handleSubmit} shadow>
                    enviar
                </ButtonSignup>
                {incompleteForm && <Text>os campos são obrigatorios</Text>}
            </WrapperItemsForm>
        </ContainerForm>
    );
};
