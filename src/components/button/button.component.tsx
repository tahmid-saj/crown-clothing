import { BaseButton, GoogleSignInButton, InvertedButton, ButtonSpinner } from './button.styles.jsx';

import { FC, ButtonHTMLAttributes } from "react";

export enum BUTTON_TYPE_CLASSES {
    base = 'base',
    google = 'google-sign-in',
    inverted = 'inverted'
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton => {
    return ({
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,

    }[buttonType]);
};

export type ButtonProps = {
    buttonType?: BUTTON_TYPE_CLASSES;
    isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, buttonType, isLoading, ...otherProps }: ButtonProps) => {
    const CustomButton = getButton(buttonType);

    return (
        <CustomButton disabled={isLoading} {...otherProps}>
            { isLoading ? children : ButtonSpinner }
        </CustomButton>
    );
};

export default Button;