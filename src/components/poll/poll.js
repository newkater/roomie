import React, {Component} from 'react';
import './poll.css';
import {Button} from "bloomer";

export default class Poll extends Component {
    render() {
        let {form} = this.props;
        let {type, person, positive, negative} = form;
        console.log("Poll ", form);
        return(
            <div className="single-poll">
                <div className="poll-title" hidden={(type==="DELETE")}>Добавить пользователя {person} в группу?</div>
                <div className="poll-title" hidden={(type==="ADD")}>Удалить пользователя {person} из группы?</div>
                <progress className="progress poll-progress is-link" value={positive} max={positive+negative}/>
                <span>
                    <div className="voted-people">Проголосовало {positive+negative}</div>
                    <div className="flex-container">
                        <Button className="flex-item vote-button">Я за!</Button>
                        <Button className="flex-item vote-button" isColor="#C4C4C4" isOutlined>Я против</Button>
                    </div>
                </span>
            </div>
        );
    }
}