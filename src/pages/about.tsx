import {DivImgContainer, Header, Main, Section} from "../styles/about/aboutStyle.ts";
import ProfileButton from "../components/profileButton.tsx";
import bookPlaceholderImage from "../assets/bookPlaceholderImage.png"
import bookPlaceholder2 from "../assets/bookPlaceholder2.jpg"
import {Button} from "../components/Button.tsx";
import {Check, Heart} from "phosphor-react";
import {ModelCard} from "../components/modelCard.tsx";

function About() {
    return (
        <>
            <Header>
                <Button type={'transparent'}>
                    {/*<LessThan size={32} />*/}
                    &lt; {/*Temporario, o LessThan está dando erro aqui*/}
                </Button>
                <ProfileButton name={"george"} profilePicture={bookPlaceholder2}/>
            </Header>
            <Main>
                <Section>
                    <DivImgContainer>
                        <img src={bookPlaceholderImage}/>
                        <div>
                            <h1>Livro 1</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur corporis
                                dignissimos distinctio doloremque earum est et facilis magnam, minima mollitia nam nisi
                                officiis perspiciatis quas quibusdam, quos repellendus velit! Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit. Adipisci aliquam amet autem doloremque dolores et
                                incidunt laborum, nulla officiis omnis possimus quae quos reiciendis repellat sapiente
                                sequi tempora ut veniam?
                            </p>
                            <Button type={'blue'}>
                                Reservar
                            </Button>
                            <Button type={'gray'}>
                                <Heart size={32} />
                            </Button>
                            <Button type={'gray'}>
                                Lido
                                <Check size={32} />
                            </Button>
                        </div>
                    </DivImgContainer>
                </Section>
                <ModelCard/>
            </Main>
        </>
    );
}

export default About;