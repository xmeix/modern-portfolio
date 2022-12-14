import './Home.css';
import lime from "../../media/illustrations/lime.svg";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { HashLink } from 'react-router-hash-link';
const Home = () => {
    return ( 
        <section className="home" id="home">
            <div className="info">
                <p className="who">Hello there, I am<span> BOUALOUACHE Lamia </span> </p>
                <div className="what">
                    Mern-stack
                    & Flutter
                    Developer
                </div>
                <HashLink to={"#projects"} style={{color: "var(--white)"}}className="wannaSee">Sneak peek some of ma projects?</HashLink>
            </div>
            <img className="lime" src={lime} alt="lime" />
            <HashLink to={"#about"}><KeyboardArrowDownRoundedIcon className='arrow'/></HashLink>
        </section>
     );
}
 
export default Home;