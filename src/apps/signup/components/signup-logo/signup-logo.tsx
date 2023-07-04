import Logo from '../../../../statics/imgs/logo-foja-herois-branca.png';
import { WrapperLogo } from './signup-logo-styles';

export const SignupLogo = () => {
    return (
        <WrapperLogo bgColor='#E95513'>
            <img
                style={{ display: 'flex', marginBottom: '90px' }}
                width={420}
                height={420}
                src={Logo}
            />
        </WrapperLogo>
    );
};
