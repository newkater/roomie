import React, {Component} from 'react';
import './poll.css';
import {Button} from "bloomer";

export default class Poll extends Component {
    state = {
        form: this.props.form,
        groupBlockType: this.props.type,
        id: this.props.group.id,
        name: this.props.group.name,
        city: this.props.group.city,
        groupInfo: this.props.group.groupInfo,
        memberNumber: this.props.group.memberNumber,
        peopleNumber: this.props.group.peopleNumber,
        rentalPeriod: this.props.group.rentalPeriod,
        free: this.props.group.free,
        members: this.props.group.members,
        applications: this.props.group.applications,
        polls: this.props.group.polls
    };

    positiveAnswer = () => {
        console.log("positive");
        let ar = this.props.group.polls;
        let f = this.props.form;
        f.positive++;
        const {id} = this.props;
        ar.map((item) => {
            if (item.id !== id) return item;
            else {
                return f;
            }
        });
        this.setState({polls: ar});
        this.handleSubmit();
    };

    negativeAnswer = () => {
        console.log("negative");
        let ar = this.props.group.polls;
        let {form} = this.props;
        form.negative++;
        const {id} = this.props;
        ar.map((item) => {
            if (item.id !== id) return item;
            else {
                return form;
            }
        });
        this.setState({polls: ar});
        this.handleSubmit();
    };

    handleSubmit = () => {
        const {groupUpdate} = this.props;
        //console.log("update group props", this.props);
        //event.preventDefault();
        console.log("Submit", this.state);
        groupUpdate(
            {
                userId: Number(sessionStorage.getItem('id')),
                email: sessionStorage.getItem('email'),
                password: sessionStorage.getItem('password'),
                id: this.state.id,
                name: this.state.name,
                city: this.state.city,
                groupInfo: this.state.groupInfo,
                memberNumber: this.state.memberNumber,
                peopleNumber: this.state.peopleNumber,
                rentalPeriod: this.state.rentalPeriod,
                free: this.state.free,
                members: this.state.members,
                applications: this.state.applications,
                polls: this.state.polls
            });
        //window.location.reload();
    };

    render() {
        let {form, groupUpdate} = this.props;
        let {type, person, positive, negative, id} = form;
        console.log("Poll ", form);
        return(
            <div className="single-poll">
                <div className="poll-title" hidden={(type==="DELETE") || (type==="GROUP_DELETE")}>Добавить пользователя {person} в группу?</div>
                <div className="poll-title" hidden={(type==="ADD") || (type==="GROUP_DELETE")}>Удалить пользователя {person} из группы?</div>
                <div className="poll-title" hidden={(type==="DELETE") || (type==="ADD")}>Удалить группу?</div>
                <progress className="progress poll-progress is-link" value={positive} max={positive+negative}/>
                <span>
                    <div className="voted-people">Проголосовало {positive+negative}</div>
                    <div className="flex-container">
                        <Button className="flex-item vote-button" onClick={this.positiveAnswer}>Я за!</Button>
                        <Button className="flex-item vote-button" isColor="#C4C4C4" isOutlined onClick={this.negativeAnswer}>Я против</Button>
                    </div>
                </span>
            </div>
        );
    }
}