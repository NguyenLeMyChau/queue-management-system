import React, { useState } from 'react';
import '../LoginContainer/LoginContainer.css';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import Logo from '../../components/logo/Logo';

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
        <div className='flex-column-center'>

            <Logo width={170} height={136} margin='35px 0px' />

            <h3>Đặt lại mật khẩu mới</h3>

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
        </div>
    );
};

export default SetPasswordContainer;