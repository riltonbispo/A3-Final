import { Component } from "react";

export default class ButtonEdit extends Component {
    render() {
        return (
            <button type="button" className="btn btn__secondary" data-toggle="modal" data-target="#editGame-modal">
                Editar
            </button>
        );
    }
}