import { useState } from 'react';
import './FrameLogin.css';
import WelcomeContainer from '../../containers/WelcomeContainer/WelcomeContainer';
import LoginContainer from '../../containers/LoginContainer/LoginContainer';
import ForgotPasswordContainer from '../../containers/ForgotPasswordContainer/ForgotPasswordContainer';
import SetPasswordContainer from '../../containers/SetPasswordContainer/SetPasswordContainer';

const FrameLogin = () => {
    const [currentStep, setCurrentStep] = useState<'login' | 'forgotPassword' | 'setPassword'>('login');

    const handleLoginClick = () => {
        setCurrentStep('login');
    };

    const handleForgotPasswordClick = () => {
        setCurrentStep('forgotPassword');
    };

    const handleSetPasswordClick = () => {
        setCurrentStep('setPassword');
    }

    return (
        <div className='centered-container'>
            <div className='frame-login-left'>
                {currentStep === 'login' && <LoginContainer onForgotPassword={handleForgotPasswordClick} />}
                {currentStep === 'forgotPassword' && <ForgotPasswordContainer onLogin={handleLoginClick} onForgotPassword={handleSetPasswordClick} />}
                {currentStep === 'setPassword' && <SetPasswordContainer onLogin={handleLoginClick} />}
            </div>

            <div className='frame-login-right'>
                <WelcomeContainer type={currentStep} />
            </div>
        </div>
    );
}

export default FrameLogin;