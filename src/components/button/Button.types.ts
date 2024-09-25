import { BackgroundProps, BorderProps, ButtonEvent, ColorProps, CommonProps, SizeProps } from "../../types/globalTypes";

type ExtendedProps = ColorProps & SizeProps & BackgroundProps & CommonProps & BorderProps;

export interface ButtonProps extends ExtendedProps {
    type?: "button" | "submit" | "reset";
    text: string;
    icon?: JSX.Element;
    onClick?: ButtonEvent;
}