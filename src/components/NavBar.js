import React from "react";

const style = {
    bgDark: {
        backgroundColor: `rgb(30, 200, 230)`
    }
}

const NavBar = props => (
    <header style={style.bgDark} className="w-100 ph3 pv3 pv2-ns ph4-m ph5-l tc">
        <nav className="">
            <p className="link dim white dib mr3">Clicky Game</p>
            <p className="link dim white dib mr3">Your guess is {props.status}</p>
            <p className="link dim white dib mr3">Score: {props.currentScore}</p>
            <p className="link dim white dib">High Score: {props.topScore}</p>
        </nav>
    </header>
)

export default NavBar;