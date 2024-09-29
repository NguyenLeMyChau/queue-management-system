import { useState } from 'react';
import './FrameLogin.css';
import WelcomeContainer from '../../containers/WelcomeContainer/WelcomeContainer';
import LoginContainer from '../../containers/LoginContainer/LoginContainer';
import ForgotPasswordContainer from '../../containers/ForgotPasswordContainer/ForgotPasswordContainer';
import SetPasswordContainer from '../../containers/SetPasswordContainer/SetPasswordContainer';
import Logo from '../../components/logo/Logo';

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
        <div className='frame-login-container'>
            <div className='frame-login-left'>
                <div className='flex-column-center'>
                    <Logo width={170} height={136} margin='35px 0px' />
                    {currentStep === 'forgotPassword' && <h3>Đặt lại mật khẩu</h3>}
                    {currentStep === 'setPassword' && <h3>Đặt lại mật khẩu mới</h3>}
                    {components[currentStep]}
                </div>
            </div>
            <div className='frame-login-right'>
                <WelcomeContainer type={currentStep} />
            </div>
        </div>
    );
};

export default FrameLogin;
