import {Card} from "../components/card.tsx";
import bookPlaceholderImage from "../assets/bookPlaceholderImage.png"
import bookPlaceholder2 from "../assets/bookPlaceholder2.jpg"
import {SearchInput} from "../components/searchInput.tsx";
import ProfileButton from "../components/profileButton.tsx";
import { Header, Main, Section, Footer} from "../styles/home/homeStyle.ts";
import {Categories} from "../components/home/categoryContainer.tsx";
import { useParams , useNavigate} from 'react-router-dom'
import {categories} from "../components/home/categoryContainer.tsx";
import {useEffect} from "react";
function Home() {
    const params = useParams() as {category: string}
    const navigate = useNavigate()

    function validateParams(){
        if(!categories.includes(params.category)){
            navigate('/all')
        }
    }

    useEffect(validateParams, [params])


    return (
        <>
            <Header>
                <SearchInput/>
                <ProfileButton name={"george"} profilePicture={bookPlaceholder2}/>
            </Header>
            <Main>
                <Section>
                    <Categories/>
                    <Card imageSource={bookPlaceholderImage} title={"livro1"}/>
                    <Card imageSource={bookPlaceholderImage} title={"livro1"}/>
                    <Card imageSource={bookPlaceholderImage} title={"livro1"}/>
                    <Card imageSource={bookPlaceholderImage} title={"livro1"}/>
                    <Card imageSource={bookPlaceholderImage} title={"livro1"}/>
                    <Card imageSource={bookPlaceholderImage} title={"livro1"}/>
                    <Card imageSource={bookPlaceholderImage} title={"livro1"}/>
                    <Card imageSource={bookPlaceholderImage} title={"livro1"}/>
                    <Card imageSource={bookPlaceholderImage} title={"livro1"}/>
                </Section>
                <Footer>
                    {/*<Link>1</Link>*/}
                    {/*<Link>2</Link>*/}
                    {/*<Link>3</Link>*/}
                    {/*<Link>4</Link>*/}
                    {/*<Link>5</Link>*/}
                    {/*<Link>6</Link>*/}
                    {/*<Link>... &gt; </Link>*/}
                </Footer>
            </Main>
        </>
    );
}

export default Home;