import React, {useEffect, useState} from 'react'
import "./nav.css"

function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY>100){
                handleShow(true);

            }else handleShow(false);
        })
        return () => {
            window.removeEventListener("scroll")
        };
    }, [])
    return (
        <div className={`Nav ${show && "nav_black"}`}>
            <img className="Nav-logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo"></img>
            <img className="Nav-Avatar" src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Aiga_uparrow_inv.png" alt="N"></img>
        </div>
    )
}
export default Nav
