import {Card} from "../components/card.tsx";
import bookPlaceholderImage from "../assets/bookPlaceholderImage.png"
import bookPlaceholder2 from "../assets/bookPlaceholder2.jpg"
import {SearchInput} from "../components/searchInput.tsx";
import ProfileButton from "../components/profileButton.tsx";
import {CategoryContainer, Header, Main, Link, Section, Footer} from "../styles/home/homeStyle.ts";

function Home() {
    return (
        <>
            <Header>
                <SearchInput/>
                <ProfileButton name={"george"} profilePicture={bookPlaceholder2}/>
            </Header>
            <Main>
                <CategoryContainer>
                    <h1>Categorias</h1>
                    <Link>Architecture</Link>
                    <Link>Art History</Link>
                    <Link>Graphic Design</Link>
                    <Link>Fantasy</Link>
                    <Link>Magic</Link>
                    <Link>Computer Science</Link>
                    <Link>Brazil</Link>
                    <Link>Finance</Link>
                    <Link>Horror</Link>
                    <Link>Humor</Link>
                    <Link>Exercise</Link>
                    <Link>Cooking</Link>
                </CategoryContainer>
                <Section>
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
                    <Link>1</Link>
                    <Link>2</Link>
                    <Link>3</Link>
                    <Link>4</Link>
                    <Link>5</Link>
                    <Link>6</Link>
                    <Link>... &gt; </Link>
                </Footer>
            </Main>
        </>
    );
}

export default Home;