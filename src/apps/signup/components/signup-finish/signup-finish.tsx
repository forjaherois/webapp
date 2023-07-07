import { Button, Grid, Text } from '@nextui-org/react';
import { WrapperFinish } from './styles';

export const SignupFinish = () => {
    return (
        <WrapperFinish>
            <Grid>
                <img style={{ display: 'flex' }} width={90} height={90} src='https://i.imgur.com/wjIW3sW.png' />
            </Grid>
            <Grid css={{ maxWidth: '400px', marginTop: '35px' }}>
                <Text size={'$lg'} weight={'semibold'} css={{ textAlign: 'center', lineHeight: '$sm' }}>
                    Sua conta foi criada com sucesso!
                    <br /> Enviamos um link de confirmação para o seu e-mail.
                </Text>
            </Grid>
            <Button css={{ background: '#15447e', marginTop: '45px' }} shadow>
                OK
            </Button>
        </WrapperFinish>
    );
};
