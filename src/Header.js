import React from "react"
import image from "./gen-meme.png"

function Header() {
    return (
        <center>
            <img className="img-header" src={image}/>
        </center>
    )
}

export default Header