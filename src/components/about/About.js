import { useEffect, useState } from "react";
import "./About.css";
const About = () => {
    const [size, setSize] = useState(1);
    const description = [
        "A software engineer specializing in building (and occasionally designing) exceptional digital experiences.",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis facere voluptate quae porro impedit sit fugit, mollitia nihil autem rerum.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vero quos, ipsa doloribus facere illum distinctio voluptas aut, ullam laudantium nam rerum beatae quasi! Similique possimus nisi quos id nam?"
    ];

    const isChecked = (value) => value === size;

    const handleOptions = (e) => { 
        if(e.target.value ==="short") setSize(1);
        else if(e.target.value ==="medium") setSize(2);
        else if(e.target.value ==="long") setSize(3);
        else console.log("err"); 
    }
    useEffect(() => {
    }, [setSize]);
    
    return ( 
        <section className="about" id="about">
            <h1 className="sectionTitle">
                About me
            </h1>
            <div className="bioInfo">
                <label>adjust bio length:</label>
                <div className="options" onChange={handleOptions}>
                    <input 
                        type="radio" 
                        value="short" 
                        name="length"  
                        defaultChecked={isChecked(1)}
                    /> less is more
                    <input 
                        type="radio" 
                        value="medium" 
                        name="length"  
                        defaultChecked={isChecked(2)}
                        /> a bit more
                    <input 
                        type="radio" 
                        value="long" 
                        name="length"  
                        defaultChecked={isChecked(3)} 
                        /> story of ma life
                </div>
                <div className="bio">
                {
                    (size === 1) ? description[0] : ((size===2 )? description[1] : description[2])
                }
                </div>
            </div>
        </section>
     );
}
 
export default About;