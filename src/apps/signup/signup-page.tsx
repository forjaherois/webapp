import { Grid } from '@nextui-org/react';
import { SignupLogo } from './components/signup-logo/signup-logo';
import { SignupForm } from './components/signup-form/signup-form';

export const SignupPage = () => {
    return (
        <Grid.Container>
            <SignupLogo />
            <SignupForm />
        </Grid.Container>
    );
};
