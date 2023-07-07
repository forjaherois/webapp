import { Grid } from '@nextui-org/react';
import { SignupLogo } from './components/signup-logo/signup-logo';
import { SignupForm } from './components/signup-form/signup-form';
import { SignupFinish } from './components/signup-finish/signup-finish';
import { useContext } from 'react';
import { SignupContext } from '@src/contexts/signup-context';

export const SignupPage = () => {
    const { signupFinish } = useContext(SignupContext);
    return (
        <Grid.Container>
            <SignupLogo />
            {signupFinish ? <SignupFinish /> : <SignupForm />}
        </Grid.Container>
    );
};
