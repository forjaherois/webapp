import { Grid } from '@nextui-org/react';
import { SignupLogo } from './components/signup-logo/signup-logo';
import { SignupForm } from './components/signup-form/signup-form';
import { SignupFinish } from './components/signup-finish/signup-finish';

export const SignupPage = () => {
    const signFinish = true;
    return (
        <Grid.Container>
            <SignupLogo />
            {signFinish ? <SignupFinish /> : <SignupForm />}
        </Grid.Container>
    );
};
