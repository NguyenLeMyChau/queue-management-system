import welcomeLogin from '../../assets/welcome-remove-bg.png';
import welcomeForgotPassword from '../../assets/welcome-2-remove-bg.png';

interface WelcomeContainerProps {
    type: 'login' | 'forgotPassword' | 'setPassword';
}

const WelcomeContainer: React.FC<WelcomeContainerProps> = ({ type }) => {
    const imageSrc = type === 'login' ? welcomeLogin : welcomeForgotPassword;

    return (
        <div style={{ backgroundColor: '#FFFFFF' }}>
            <img src={imageSrc} alt='welcome' />
        </div>
    );
}

export default WelcomeContainer;