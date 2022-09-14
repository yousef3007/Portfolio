import "./navbar.scss"
import { useState } from "react";

const listItems = ["Skills", "Projects", "Contact"];
export default function Navbar(){
    return(
        <nav>
            <ul className="list">
                {listItems.map(key => (<li id={key}><a href={`#${key}`}>{key}</a></li>))}
            </ul>
        </nav>
    )
}