import React, { useState } from 'react';
import './LoginContainer.css';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import Logo from '../../components/logo/Logo';


interface LoginContainerProps {
    onForgotPassword: () => void;
}

const LoginContainer: React.FC<LoginContainerProps> = ({ onForgotPassword }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (username: string, password: string) => {
        // Xử lý đăng nhập ở đây
        console.log('Username:', username);
        console.log('Password:', password);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleLogin(username, password);
    };

    return (
        <div className='flex-column-center'>

            <Logo width={170} height={136} margin='35px 0px' />

            <form onSubmit={handleSubmit} style={{ width: 300 }}>
                <div>
                    <Input
                        label="Tên đăng nhập *"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <Input
                        label="Mật khẩu *"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className='login-options'>
                    <button
                        className='login-link text-sm font-weight-medium'
                        onClick={onForgotPassword}
                    >
                        Quên mật khẩu?</button>
                </div>

                <div className='login-button'>
                    <Button
                        type='submit'
                        text='Đăng nhập'
                        backgroundImage='var(--title-color)'
                    />
                </div>
            </form>
        </div>
    );
};

export default LoginContainer;