
export interface ColorProps {
    color?: string;
}

export interface BackgroundProps {
    backgroundColor?: string;
    backgroundImage?: string;
}

export interface SizeProps {
    width?: number;
    height?: number;
}

export interface SpacingProps {
    margin?: string; // ví dụ: "10px", "1rem"
    padding?: string; // ví dụ: "10px", "1rem"
}

export interface BorderProps {
    border?: string; // ví dụ: "1px solid #ccc"
    borderRadius?: string; // ví dụ: "4px"
}

export interface TextProps {
    fontSize?: string; // ví dụ: "14px", "1rem"
    fontWeight?: string; // ví dụ: "normal", "bold"
    textAlign?: 'left' | 'center' | 'right'; // ví dụ: "left"
}

export interface DisabledProps {
    disabled?: boolean;
}

export interface CommonProps {
    id?: string;
    className?: string;
}

export interface InputChangeEvent {
    (event: React.ChangeEvent<HTMLInputElement>): void;
}

export interface ButtonEvent {
    (event: React.MouseEvent<HTMLButtonElement>): void;
}
