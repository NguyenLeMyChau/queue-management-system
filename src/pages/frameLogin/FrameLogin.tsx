import { useState } from 'react';
import './FrameLogin.css';
import WelcomeContainer from '../../containers/WelcomeContainer/WelcomeContainer';
import LoginContainer from '../../containers/LoginContainer/LoginContainer';
import ForgotPasswordContainer from '../../containers/ForgotPasswordContainer/ForgotPasswordContainer';
import SetPasswordContainer from '../../containers/SetPasswordContainer/SetPasswordContainer';

const FrameLogin = () => {
    const [currentStep, setCurrentStep] = useState<'login' | 'forgotPassword' | 'setPassword'>('login');

    const handleStepChange = (step: 'login' | 'forgotPassword' | 'setPassword') => {
        setCurrentStep(step);
    };

    const components = {
        login: <LoginContainer onForgotPassword={() => handleStepChange('forgotPassword')} />,
        forgotPassword: <ForgotPasswordContainer onLogin={() => handleStepChange('login')} onForgotPassword={() => handleStepChange('setPassword')} />,
        setPassword: <SetPasswordContainer onLogin={() => handleStepChange('login')} />
    };

    return (
        <div className='centered-container'>
            <div className='frame-login-left'>
                {components[currentStep]}
            </div>
            <div className='frame-login-right'>
                <WelcomeContainer type={currentStep} />
            </div>
        </div>
    );
};

export default FrameLogin;
