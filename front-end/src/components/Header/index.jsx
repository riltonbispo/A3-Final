import { Component } from "react";
import logoEcho from '../../assets/img/ECHO-black.svg';
import './styles.css';
import ButtonAddGame from "../ButtonAddGame";
import ButtonManagementPlatform from "../ButtonManagementPlatform";

export default class Header extends Component {
    render() {
        return (
            <header className="header__container">
                <nav className="header__content navbar navbar-expand-lg navbar-light bg-light">
                    <img src={logoEcho} alt="Echo" className="header__logo"></img>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="header__buttons">
                            <ButtonAddGame />
                            <ButtonManagementPlatform />
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}