import './Navbar.css';
import {HashLink as Link } from 'react-router-hash-link';
import { useEffect, useState } from 'react';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
const Navbar = () => {
    const [show, setShow] = useState(false);
    const [responsive, setResponsive] = useState(false);
    const sideNavItems = [
        {
            id: 1,
            title: "Home",
            to:"#home",
        },
        {
            id: 2,
            title: "Gallery",
            to:"#gallery",
        },
        {
            id: 3,
            title: "About",
            to:"#about",
        },
        {
            id: 3,
            title: "Contact",
            to:"#contact",
        }, 
    ];
    //____________________________________________________
    useEffect(() => {
        function handleWindowResize() {
        if (getWindowSize().innerWidth <= 750) {
            setResponsive(true);
        } else {
            setShow(false);
            setResponsive(false);
        }

        }
        handleWindowResize();

        window.addEventListener("resize", handleWindowResize);

        return () => {
        window.removeEventListener("resize", handleWindowResize);
        };
    }, []);
    //____________________________________________________
    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }
    //____________________________________________________
    const handleShowMenu = () => {
         
            setShow(!show);  
    }
    return ( 
        <div className="navbar">
            <div className='logo'>
                <Link className="logoTitle" to="#home" style={{ textDecoration: "none", color: "var(--white)",fontWeight: "900"}}>meix.</Link>
            </div>
            {responsive && !show && <MenuRoundedIcon className='menu'  onClick={handleShowMenu}/>}
            {responsive && show && <CloseRoundedIcon className='menu'  onClick={handleShowMenu}/>}
                <div className="links" style={{ display: !responsive ? "flex" : show ? "flex" : "none"}}>
                    {
                        sideNavItems.map((item,i) => <Link key={i} className='link' smooth to={item.to} style={{ textDecoration: "none", color: "var(--white)",fontWeight: "600"}}>{item.title}</Link>)
                    }
                    </div>
        </div>
     );
}
 
export default Navbar;