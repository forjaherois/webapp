import { Grid, Input, Loading, Text } from '@nextui-org/react';
import { ButtonSignup, ContainerForm, WrapperItemsForm } from './styles';
import { useState } from 'react';
import { FormDataType, FormStatusType } from './types';
import { useSignup } from '../../../../apis/use-signup';

export const SignupForm = () => {
    const { postAccount, isLoading } = useSignup();
    const [formData, setFormData] = useState<FormDataType>({
        email: '',
        nickname: '',
        password: '',
    });

    const [formStatus, setFormStatus] = useState<FormStatusType>({
        email: 'default',
        nickname: 'default',
        password: 'default',
    });

    const validateEmail = (email: string) => {
        const pattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        return pattern.test(email) || email === '';
    };

    const validateSubmit = () => {
        const newFormStatus = {
            email: formData.email === '' || !validateEmail(formData.email) ? 'error' : 'default',
            nickname: formData.nickname === '' ? 'error' : 'default',
            password: formData.password === '' ? 'error' : 'default',
        } as FormStatusType;

        setFormStatus(newFormStatus);
        return !Object.values(newFormStatus).includes('error');
    };

    const handleInputChange = (field: keyof FormDataType, value: string) => {
        setFormData({ ...formData, [field]: value });
        setFormStatus((prevStatus) => ({ ...prevStatus, [field]: 'default' }));
    };

    const handleSubmit = async () => {
        if (validateSubmit()) {
            await postAccount(formData);
        }
    };

    return (
        <ContainerForm data-testid='signup-form'>
            <WrapperItemsForm>
                <Grid css={{ width: '40%' }}>
                    <Text h3 weight='bold'>
                        cadastre-se
                    </Text>
                </Grid>

                <Input
                    clearable
                    disabled={isLoading}
                    onBlur={(e) => handleInputChange('email', e.currentTarget.value)}
                    onChange={(e) => handleInputChange('email', e.currentTarget.value)}
                    css={{ marginTop: '25px' }}
                    width={'40%'}
                    label='email'
                    status={formStatus.email}
                    helperColor='error'
                    helperText={formStatus.email === 'error' ? 'obrigatório' : undefined}
                />
                <Input
                    clearable
                    disabled={isLoading}
                    onChange={(e) => handleInputChange('nickname', e.currentTarget.value)}
                    css={{ marginTop: '25px' }}
                    width={'40%'}
                    label='nickname'
                    status={formStatus.nickname}
                    helperColor='error'
                    helperText={formStatus.nickname === 'error' ? 'obrigatório' : undefined}
                />
                <Input.Password
                    clearable
                    disabled={isLoading}
                    onChange={(e) => handleInputChange('password', e.currentTarget.value)}
                    css={{ marginTop: '25px' }}
                    width={'40%'}
                    label='senha'
                    helperColor='error'
                    helperText={formStatus.password === 'error' ? 'obrigatório' : undefined}
                    status={formStatus.password}
                />

                <ButtonSignup disabled={isLoading} onPress={handleSubmit} shadow>
                    {isLoading && <Loading color='white' size='sm' />}
                    {!isLoading && <span>enviar</span>}
                </ButtonSignup>
            </WrapperItemsForm>
        </ContainerForm>
    );
};
