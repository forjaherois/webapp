import Logo from '../../../../statics/imgs/logo-foja-herois-branca.png';
import { WrapperLogo } from './styles';

export const SignupLogo = () => {
    return (
        <WrapperLogo data-testid='signup-logo'>
            <img
                style={{ display: 'flex', marginBottom: '90px' }}
                width={420}
                height={420}
                src={Logo}
            />
        </WrapperLogo>
    );
};
