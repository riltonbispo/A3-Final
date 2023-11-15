import { Component } from "react";
import penIcon from '../../assets/img/pen-icon.svg';
import iconTrash from '../../assets/img/icon-trash.svg';

export default class LiPlatformModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                <div className="platform-input__container">
                    <input type="text" id={this.props.platform} name={this.props.platform} value={this.props.platform} className="platform-input"></input>
                    <img src={penIcon} className="platform-icon"/>
                </div>
                <img src={iconTrash} className="platform-image" onClick={() => this.props.removePlatform(this.props.index)}/>
            </li>
        );
    }
}