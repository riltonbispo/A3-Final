import { Component } from "react";
import './styles.css';
import showCategories from '../../utils/showCategoriesModal';
import showPlatforms from '../../utils/showPlatformsModal';

export default class GameModal extends Component {
    addCategoryModal = () => {
        const categories = ['jogado', 'jogando', 'zerado', 'nao-recomendo'];
        const checkCategories = document.getElementById("categories-select-game");

        categories.map(category => {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = category;
          
            const label = document.createElement('label');
            label.htmlFor = category;
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(category));
          
            checkCategories.appendChild(label);
        });
    }

    render() {
        setTimeout(() => {
            this.addCategoryModal();
        }, 10);

        return (
            <div className="modal fade" id="game-modal" tabIndex="-1" role="dialog" aria-labelledby="game-modalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="game-modalTitle">Adicione um novo jogo</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <label htmlFor="game-name" className="input-gameName">
                                <span className="modal__subtitle">Nome do Jogo</span>
                                <input type="text" name="" id="game-name" placeholder="digite aqui"></input>
                            </label>

                            <label htmlFor="game-photo" className="input-gameImage">
                                <span className="modal__subtitle">Enviar imagem</span>
                                <img src="./assets/img/upload.svg" alt=""></img>
                                <input type="file" name="" id="game-photo"></input>
                            </label>

                            <p className="star-title">Avaliação</p>

                            <div className="stars">
                                <input className="star star-5" id="star-5" type="radio" name="star" value="5" />
                                <label className="star star-5" htmlFor="star-5"></label>

                                <input className="star star-4" id="star-4" type="radio" name="star" value="4" />
                                <label className="star star-4" htmlFor="star-4"></label>

                                <input className="star star-3" id="star-3" type="radio" name="star" value="3" />
                                <label className="star star-3" htmlFor="star-3"></label>

                                <input className="star star-2" id="star-2" type="radio" name="star" value="2" />
                                <label className="star star-2" htmlFor="star-2"></label>

                                <input className="star star-1" id="star-1" type="radio" name="star" value="1" />
                                <label className="star star-1" htmlFor="star-1"></label>
                            </div>

                            <div className="selects">
                                <div className="multiselect">
                                    <span className="modal__subtitle">Categoria</span>
                                    <div className="selectBox" onClick={() => showCategories(true)}>
                                        <select>
                                            <option>select</option>
                                        </select>

                                        <div className="overSelect"></div>
                                    </div>
                                    <div id="categories-select-game"></div>
                                </div>

                                <div className="multiselect">
                                    <span className="modal__subtitle">Plataformas</span>
                                    <div className="selectBox" onClick={() => showPlatforms(true)}>
                                        <select>
                                            <option>select</option>
                                        </select>
                                        <div className="overSelect"></div>
                                    </div>
                                    <div id="platforms-select-game"></div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn__delete" data-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn__primary">Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}