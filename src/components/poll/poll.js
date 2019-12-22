import React, {Component} from 'react';
import './poll.css';
import {Link} from "react-router-dom";
import {Button, Content, Progress} from "bloomer";

export default class Poll extends Component {
    render() {
        let {form} = this.props;
        let {id, type, person, positive, negative} = form;
        console.log("Poll ", form);
        return(
            <div>
                <div className="poll-title" hidden={(type==="DELETE")}>Добавить пользователя {person} в группу?</div>
                <div className="poll-title" hidden={(type==="ADD")}>Удалить пользователя {person} из группы?</div>
                <progress className="progress poll-progress is-link" value={positive} max={positive+negative}/>
                <div>
                    <div>Проголосовало {positive+negative}</div>
                    <Button>1</Button>
                    <Button>2</Button>
                </div>
            </div>
        );
    }
}