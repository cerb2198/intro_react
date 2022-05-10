import { useState } from "react";
import style from "./navbar.module.css";

import { FiMenu } from "react-icons/fi";
import { BsCalendarCheck } from "react-icons/bs";

const Navbar = () => {

    const [expand, setExpand] = useState(false);

    //Funciones
    const mostrar =()=>{
        setExpand(!expand)
    }
    


    return(
        <>
        {
            expand ?
                <nav className={style.navbar__expandido}>
                    <FiMenu className={style.navbar__icono} onClick={mostrar}/>
                    <a className={style.navbar__link}><BsCalendarCheck/> Link 1</a>
                    <a className={style.navbar__link}><BsCalendarCheck/> Link 2</a>
                    <a className={style.navbar__link}><BsCalendarCheck/> Link 3</a>
                    <a className={style.navbar__link}><BsCalendarCheck/> Link 4</a>
                </nav>
            :
                <nav className={style.navbar__retraido}>
                    <FiMenu className={style.navbar__icono} onClick={mostrar}/>
                    <a className={style.navbar__link}><BsCalendarCheck/> </a>
                    <a className={style.navbar__link}><BsCalendarCheck/> </a>
                    <a className={style.navbar__link}><BsCalendarCheck/> </a>
                    <a className={style.navbar__link}><BsCalendarCheck/> </a>
                </nav>
        }
        
        </>
    )
}

export default Navbar;