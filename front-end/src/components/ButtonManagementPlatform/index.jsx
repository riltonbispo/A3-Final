import { Component } from "react";
import './styles.css';

export default class ButtonManagementPlatform extends Component {
    render() {
        return (
            <button type="button" className="btn btn__secondary" data-toggle="modal" data-target="#platform-modal">
                Gerenciar Plataformas
            </button>
        );
    }
}