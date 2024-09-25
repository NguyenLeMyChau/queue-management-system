import logo from '../../assets/logo-alta-remove-bg.png';
import './Logo.css';
import { SizeProps, SpacingProps } from '../../types/globalTypes';

type LogoProps = SizeProps & SpacingProps;

export default function Logo(props: LogoProps) {
    return (
        <img
            src={logo}
            alt="logo"
            className='logo'
            style={{
                width: props.width,
                height: props.height,
                margin: props.margin,
                padding: props.padding
            }}
        />
    );
}

