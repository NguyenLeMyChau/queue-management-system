import { ColorProps, InputChangeEvent, SizeProps } from "../../types/globalTypes";

export interface InputProps extends ColorProps, SizeProps {
    label: string;
    type?: string;
    placeholder?: string;
    value: string;
    onChange: InputChangeEvent;
    icon?: JSX.Element;
}