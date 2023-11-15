import { Component } from "react";
import './styles.css';

export default class ButtonAddGame extends Component {
    render() {
        return (
            <button type="button" className="btn btn__primary" data-toggle="modal" data-target="#game-modal">
                Adicionar Jogo
            </button>
        );
    }
}