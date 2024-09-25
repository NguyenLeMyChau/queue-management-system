import './Button.css';
import { ButtonProps } from './Button.types';

export default function Button(props: ButtonProps) {

    return (
        <button
            type={props.type || 'button'}
            className={`button ${props.className || ''}`}
            style={{
                width: `${props.width}px`,
                height: `${props.height}px`,
                color: props.color,
                backgroundColor: props.backgroundColor || 'transparent',
                backgroundImage: props.backgroundImage || 'transparent',
                border: props.border,
            }}
            onClick={props.onClick}
        >
            {props.icon && <span style={{ marginTop: '5px', marginRight: '5px' }}>{props.icon}</span>}
            {props.text}
        </button>

    );
}