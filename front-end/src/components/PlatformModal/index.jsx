import { Component } from "react";
import ReactDOM from 'react-dom/client';
import './styles.css';
import LiPlatformModal from "../LiPlatformModal";

let platformList;

setTimeout(() => {
    platformList = ReactDOM.createRoot(document.getElementById("platform-list"));
}, 10);

export default class PlatformModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            platformsArray: []
        }
    }

    handleCreatePlatform = (e) => {
        const platformInput = document.getElementById('platform-name');

        if(platformInput.value === '') return;
        
        if(e.keyCode !== undefined) {
            if(e.keyCode !== 13) return;
        }

        this.state.platformsArray.push(platformInput.value.trim());

        this.setState({
            platformsArray: this.state.platformsArray
        });

        setTimeout(() => {
            platformList.render(
                this.state.platformsArray.map((platform, index) => <LiPlatformModal key={index} index={index} platform={platform} removePlatform={this.handleRemovePlatform} />)
            );
        }, 10);
    }

    handleRemovePlatform = (index) => {
        this.state.platformsArray.slice(index, 1);
    }

    render() {
        return (
            <div className="modal fade" id="platform-modal" tabIndex="-1" role="dialog" aria-labelledby="platform-modalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="platform-modalTitle">Adicione uma Plataforma</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <label htmlFor="platform-name" className="input-gameName">
                                <span className="modal__subtitle">Nome da Plataforma</span>
                                <input type="text" name="" id="platform-name" placeholder="digite aqui" onKeyDown={this.handleCreatePlatform}></input>
                            </label>

                            <span className="modal__subtitle">Editar Plataformas</span>
                            <ul id="platform-list"></ul>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn__delete" data-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn__primary" onClick={this.handleCreatePlatform}>Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}