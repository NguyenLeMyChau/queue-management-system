import React, { useState } from 'react';
import './ForgotPasswordContainer.css';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import Logo from '../../components/logo/Logo';

interface ForgotPasswordContainerProps {
    onLogin: () => void;
    onForgotPassword: () => void;
}

const ForgotPasswordContainer: React.FC<ForgotPasswordContainerProps> = ({ onLogin, onForgotPassword }) => {
    const [email, setEmail] = useState('');

    const handleForgotPassword = (e: React.FormEvent) => {
        e.preventDefault();
        onForgotPassword();
    };

    return (
        <div className='flex-column-center'>

            <Logo width={170} height={136} margin='35px 0px' />

            <h3>Đặt lại mật khẩu</h3>

            <form onSubmit={handleForgotPassword}>
                <div>
                    <Input
                        label="Vui lòng nhập email để đặt lại mật khẩu của bạn *"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='flex-row-center forgot-password-button-group'>
                    <div className='button-wrapper'>
                        <Button
                            text='Huỷ'
                            border='1px solid var(--title-color)'
                            color='var(--title-color)'
                            onClick={() => onLogin()}
                        />
                    </div>
                    <div className='button-wrapper'>
                        <Button
                            type='submit'
                            text='Tiếp tục'
                            backgroundColor='var(--title-color)'
                        />
                    </div>

                </div>
            </form>
        </div>
    );
};

export default ForgotPasswordContainer;