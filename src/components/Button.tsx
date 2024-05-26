import {Button as StyledButton } from "../styles/button.ts";
import {ReactNode} from "react";

interface ButtonProps {
    type: 'blue' | 'gray' | 'transparent',
    children: ReactNode,
}

export function Button({children, type, } : ButtonProps){
    return (
            <StyledButton color={type}>
                {children}
            </StyledButton>
    )
}