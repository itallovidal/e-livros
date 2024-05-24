import {Button} from "./Button.tsx";
import {Heart, Plus} from "phosphor-react";

import {CardContainer} from "../styles/CardStyle.ts";

interface CardProps {
    imageSource: string,
    title: string
}

export function Card({title, imageSource} : CardProps) {
    return (
        <CardContainer>
            <Button type={'gray'}>
                <Heart size={32} />
            </Button>
            <img alt={'Imagem de livro'}  src={imageSource}/>
            <label htmlFor="">{title}</label>
            <div>
                <Button type={'blue'}>
                    Reservar
                </Button>
                <Button type={'gray'}>
                    <Plus size={32} />
                </Button>
            </div>
        </CardContainer>
    );
}

