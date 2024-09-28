import React, { useState } from 'react';
import './LoginContainer.css';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

import { RiErrorWarningLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

interface LoginContainerProps {
    onForgotPassword: () => void;
}

const LoginContainer: React.FC<LoginContainerProps> = ({ onForgotPassword }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const data = {
        username: 'admin',
        password: 'admin'
    }

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (username !== data.username || password !== data.password) {
            setError(true);
        } else {
            setError(false);
            navigate('/admin');
        }
    };

    return (

        <form onSubmit={handleLogin} style={{ width: 300 }}>
            <div>
                <Input
                    label="Tên đăng nhập *"
                    name='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    error={error}
                />
                <Input
                    label="Mật khẩu *"
                    name='password'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={error}
                />
            </div>

            <div className='login-options'>
                <button
                    className='login-link text-sm font-weight-medium'
                    onClick={onForgotPassword}
                >
                    Quên mật khẩu?</button>
            </div>

            <div className='flex-column-center'>
                <div className='login-button'>
                    <Button
                        type='submit'
                        text='Đăng nhập'
                        backgroundImage='var(--title-color)'
                    />
                </div>

                {error &&
                    <div className='error-message flex-row-center'>
                        <RiErrorWarningLine className='error-icon' size={20} />
                        Sai mật khẩu hoặc tên đăng nhập
                    </div>
                }

            </div>
        </form>
    );
};

export default LoginContainer;