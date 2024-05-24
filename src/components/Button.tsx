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


// function soma(a: number, b: number){
//     return a + b
// }
//
// soma(1,2)