import { Component } from "react";
import ButtonEdit from "../ButtonEdit";
import img from '../../assets/img/image-game-1.png';
import starFill from '../../assets/img/star-fill.svg';
import star from '../../assets/img/star.svg';
import './styles.css';
import GameTagCategory from "../GameTagCategory";
import GameTagPlatform from "../GameTagPlatform";

export default class ContainerGame extends Component {
    render() {
        return (
            <div className="container__game">
                <img src={img} alt="img" className="game__image"></img>

                <div className="game__info">
                    <div className="game__rating">
                        <img src={starFill} alt="Estrela preenchida"></img>
                        <img src={starFill} alt="Estrela preenchida"></img>
                        <img src={starFill} alt="Estrela preenchida"></img>
                        <img src={star} alt="Estrela vazia"></img>
                        <img src={star} alt="Estrela vazia"></img>
                    </div>

                    <div className="game__details">
                        <h3 className="game__title">Stardew Valley</h3>
                        <ButtonEdit />
                    </div>

                    <div className="game__tags">
                        <div className="game__tags-category">
                            <GameTagCategory />
                        </div>

                        <div className="game__tags-platform">
                            <GameTagPlatform />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}