import './Input.css';
import { IoIosSearch } from "react-icons/io";
import { InputProps } from './Input.types';

export default function Input(props: InputProps) {
    return (
        <div className='flex-columm'>
            <label className='input-label text-sm' style={{ color: props.color }}>{props.label}</label>
            <div className='input-wrapper flex-row-align-center'>
                {props.type === 'search' && <IoIosSearch className='input-icon' />}
                <input
                    type={props.type || 'text'}
                    placeholder={props.placeholder}
                    className='input-field'
                    style={{ width: `${props.width}px`, height: `${props.height}px` }}
                    value={props.value}
                    onChange={props.onChange}
                />
            </div>
        </div>
    );
}