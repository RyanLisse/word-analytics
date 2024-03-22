import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Container from "./components/Container.jsx";
import {useState} from "react";
import Stats from "./components/Stats.jsx";
import TextArea from "./components/TextArea.jsx";

function Home() {
    const [stats, setStats] = useState({
        numberOfWords: 0,
        numberOfCharacters: 0,
        instagramCharactersLeft: 280,
        facebookCharactersLeft: 2200,
    });
    return (
        <>
        <Header />
        <Container>

            <TextArea setStats={setStats} />
            <Stats stats={stats} />
        </Container>
        <Footer />
        </>)
}

export default Home
