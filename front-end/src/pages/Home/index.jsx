import { Component } from "react";
import Header from "../../components/Header";
import './styles.css';
import ContainerGame from "../../components/ContainerGame";

export default class Home extends Component {
	render() {
		return (
			<>
				<Header />
				<main className="main__container">
					<section className="main__content">
						<div>
							<p className="main-description">Seja bem-vindo ao seu universo de jogos! Relembre suas aventuras e registre-as para
								nunca mais
								esquecê-las.</p>
						</div>

						<div className="game__list" id="game-list">
							<ContainerGame />
						</div>
					</section>
				</main>
			</>
		);
	}
}