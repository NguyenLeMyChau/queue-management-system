import welcomeLogin from '../../assets/welcome-remove-bg.png';
import welcomeForgotPassword from '../../assets/welcome-2-remove-bg.png';
import './WelcomeContainer.css';

interface WelcomeContainerProps {
    type: 'login' | 'forgotPassword' | 'setPassword';
}

const WelcomeContainer: React.FC<WelcomeContainerProps> = ({ type }) => {
    const imageSrc = type === 'login' ? welcomeLogin : welcomeForgotPassword;

    return (
        <div className='welcome-container'>
            <img src={imageSrc} alt='welcome' className='welcome-img' />
        </div>
    );
}

export default WelcomeContainer;