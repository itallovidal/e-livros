import {Card} from "./card.tsx";
import bookPlaceholderImage from "../assets/bookPlaceholderImage.png";
import {CardAndTitle, Section, StyledModelCard} from "../styles/modelCardStyle.ts";

export function ModelCard() {
    return (
        <Section>
            <CardAndTitle>
                <h1>Você pode gostar</h1>
                <StyledModelCard>
                    <Card imageSource={bookPlaceholderImage} title={"Livro1"}/>
                    <Card imageSource={bookPlaceholderImage} title={"Livro1"}/>
                    <Card imageSource={bookPlaceholderImage} title={"Livro1"}/>
                    <Card imageSource={bookPlaceholderImage} title={"Livro1"}/>
                </StyledModelCard>
            </CardAndTitle>
        </Section>
    )
}