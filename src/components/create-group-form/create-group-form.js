import React, {Component} from "react";
import {Button, Control, Field, Input, Label} from "bloomer";
import Select from "react-select";
import {COUNTRIES} from "../../utils";
import {withRouter} from 'react-router-dom';

const timePeriods = [
    { value: 1, label: '1 месяц' },
    { value: 3, label: 'до 3 месяцев' },
    { value: 6, label: 'до 6 месяцев' },
    { value: 9, label: 'до 9 месяцев' },
    { value: 12, label: 'больше' }
];

const peopleNumber = [
    { value: 2, label: '2' },
    { value: 3, label: '≤ 3' },
    { value: 4, label: '≤ 4' },
    { value: 5, label: '≤ 5' },
    { value: 6, label: 'больше' }
];

class CreateGroupForm extends Component {
    state = {
        groupName: '',
        city: '',
        peopleNeeded: '',
        rentalPeriod: '',
        telegramLink: '',
        whatsappLink: '',
        groupInfo: ''
    };

    handleInput = (key, value) => {
        this.setState({[key]: value} );
        console.log(this.state);
    };

    handleSubmit = (event) => {
        const {createGroup, history} = this.props;
        console.log("create-group props", this.props);
        event.preventDefault();
        console.log("Submit", this.state);
        createGroup(
            {
                email: sessionStorage.getItem('email'),
                password: sessionStorage.getItem('password'),
                groupName: this.state.groupName,
                city: this.state.city,
                peopleNeeded: this.state.peopleNeeded,
                rentalPeriod: this.state.rentalPeriod,
                telegramLink: this.state.telegramLink,
                whatsappLink: this.state.whatsappLink,
                groupInfo: this.state.groupInfo
            });
        history.push('/');
    };

    render() {
        return (
            <form>
                <Field>
                    <Label isSize="medium">Название группы</Label>
                    <Control>
                        <Input type="text"
                               onChange={(event) => this.handleInput('groupName', event.target.value)}
                               placeholder='Студенты-физики'
                               isSize="medium"
                               value={this.state.groupName}
                        />
                    </Control>
                </Field>
                <Field>
                    <Label isSize="medium">Количество человек в группе</Label>
                    <Control className="is-expanded">
                        <Select isSize="medium"
                                isSearchable
                                closeMenuOnSelect={true}
                                onChange={(value) => this.handleInput('peopleNeeded', value)}
                                options={peopleNumber}
                                className="is-fullwidth"
                                value={this.state.peopleNeeded}
                        />
                    </Control>
                </Field>
                <Field>
                    <Label isSize="medium">Город</Label>
                    <Control className="is-expanded">
                        <Select isSize="medium"
                                isSearchable
                                closeMenuOnSelect={true}
                                onChange={(value) => this.handleInput('city', value)}
                                options={COUNTRIES}
                                className="is-fullwidth"
                                value={this.state.city}
                        />
                    </Control>
                </Field>
                <Field>
                    <Label isSize="medium">Период аренды</Label>
                    <Control className="is-expanded">
                        <Select isSize="medium"
                                isSearchable
                                closeMenuOnSelect={true}
                                onChange={(value) => this.handleInput('rentalPeriod', value)}
                                options={timePeriods}
                                className="is-fullwidth"
                                value={this.state.rentalPeriod}
                        />
                    </Control>
                </Field>
                <Field>
                    <Label isSize="medium">Ссылка на беседу в Telegram</Label>
                    <Control>
                        <Input type="text"
                               onChange={(event) => this.handleInput('telegramLink', event.target.value)}
                               isSize="medium"
                               value={this.state.telegramLink}
                        />
                    </Control>
                </Field>
                <Field>
                    <Label isSize="medium">Ссылка на беседу в Whats app</Label>
                    <Control>
                        <Input type="text"
                               onChange={(event) => this.handleInput('whatsappLink', event.target.value)}
                               isSize="medium"
                               value={this.state.whatsappLink}
                        />
                    </Control>
                </Field>
                <Field>
                    <Label isSize="medium">Дополнительная информация</Label>
                    <Control>
                            <textarea  style={{"width": "100%"}}
                                       className="textarea"
                                       onChange={(event) => this.handleInput('groupInfo', event.target.value)}
                                       placeholder=''
                                       isSize="medium"/>
                    </Control>
                </Field>
                <div>
                    <Button type="submit"
                            onClick={this.handleSubmit}
                            isColor='info'
                            style={{"width": "100%", "height": "54px"}}>
                        Готово!
                    </Button>
                </div>
            </form>
        )
    }
}

export default withRouter(CreateGroupForm);