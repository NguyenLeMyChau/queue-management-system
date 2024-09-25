import './Input.css';
import { InputProps } from './Input.types';
import { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

export default function Input(props: InputProps) {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(prev => !prev);
    };

    return (
        <div className='flex-columm'>
            <label className='input-label text-sm' style={{ color: props.color }}>{props.label}</label>
            <div className='input-wrapper flex-row-align-center'>
                {props.type === 'search' && <IoIosSearch className='input-icon' />}
                <input
                    type={props.type === 'password' && !showPassword ? 'password' : 'text'}
                    placeholder={props.placeholder}
                    className='input-field'
                    style={{ width: `${props.width}px`, height: `${props.height}px` }}
                    value={props.value}
                    onChange={props.onChange}
                />

                {props.type === 'password' && (
                    <button type="button" className="toggle-password" onClick={toggleShowPassword}>
                        {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                    </button>
                )}
            </div>
        </div>
    );
}