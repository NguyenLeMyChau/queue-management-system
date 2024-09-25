import React, { useState } from 'react';
import '../LoginContainer/LoginContainer.css';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

interface SetPasswordContainerProps {
    onLogin: () => void;
}

const SetPasswordContainer: React.FC<SetPasswordContainerProps> = ({ onLogin }) => {
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (

        <form onSubmit={handleSubmit} style={{ width: 300 }}>

            <div>
                <Input
                    label="Mật khẩu"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <Input
                    label="Nhập lại mật khẩu"
                    type="password"
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                />
            </div>

            <div className='flex-row-center'>
                <div className='login-button'>
                    <Button
                        type='submit'
                        text='Xác nhận'
                        backgroundImage='var(--title-color)'
                        onClick={() => onLogin()}
                    />
                </div>
            </div>

        </form>
    );
};

export default SetPasswordContainer;