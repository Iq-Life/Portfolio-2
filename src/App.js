import './App.css';
import {Header} from "./header/Header";
import {Home} from "./home/Home";
import {Skills} from "./skills/Skills";
import {Contacts} from "./contacts/Contacts";
import {Projects} from "./projects/Projects";
import {Footer} from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
