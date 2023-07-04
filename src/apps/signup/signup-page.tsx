import { Grid } from '@nextui-org/react';

import { SignupForm } from './components/signup-form/signup-form';
import { SignupLogo } from './components/signup-logo/signup-logo';

export const SignupPage = () => {
    return (
        <Grid.Container>
            <SignupLogo />
            <SignupForm />
        </Grid.Container>
    );
};
