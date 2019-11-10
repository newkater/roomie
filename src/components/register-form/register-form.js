import React, {Component} from "react";
import "./register-form.css";
import {Button, Control, Field, Input, Label, Select} from "bloomer";
import {COUNTRIES} from "../../utils";

const dalshe = {
    "background": "#001AFF",
    "border-radius": "4px",
    "font-family": "Roboto",
    "font-weight": "500",
    "font-size": "14px",
    "line-height": "16px",
    "letter-spacing": "0.25px",

    "color": "#FFFFFF"
};

export default class RegisterForm extends Component {
    state = {
        email: '',
        password: '',
        userName: '',
        sex: '',
        birthCountry: '',
        birthCity: '',
        university: '',
        speciality: '',
        phoneNumber: '',
        currentCity: '',
        maxRoommatesNumber: '',
        rentalPeriod: '',
        languages: [],
        badHabits: [],
        userInfo: '',
        isPasswordCorrect: true
    };

    handleInput = (key, value) => {
        this.setState({[key]: value} )
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submit", this.state);
        this.props.register(
            {
                email: this.state.email,
                password: this.state.password,
                userName: this.state.userName,
                sex: this.state.sex,
                birthCountry: this.state.birthCountry,
                birthCity: this.state.birthCity,
                university: this.state.university,
                speciality: this.state.speciality,
                phoneNumber: this.state.phoneNumber,
                currentCity: this.state.currentCity,
                maxRoommatesNumber: this.state.maxRoommatesNumber,
                rentalPeriod: this.state.rentalPeriod,
                languages: this.state.languages,
                badHabits: this.state.badHabits,
                userInfo: this.state.userInfo
            });
    };

    render() {
        const { page, changePage, register } = this.props;

        if (page === 3) {
            return (
                <form>
                    <Field>
                        <Label isSize="medium">В каком городе вы ищете жилье?</Label>
                        <Control className="is-expanded">
                            <Select isSize="medium" className="is-fullwidth">
                                {COUNTRIES.map(country => <option value={country}>{country}</option>)}
                            </Select>
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Максимальное число сожителей</Label>
                        <Control>
                            <Input type="text"
                                   placeholder=''
                                   onChange={(event) => this.handleInput('maxRoommatesNumber', event.target.value)}
                                   isSize="medium"/>
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Период аренды</Label>
                        <Control className="is-expanded">
                            <Select isSize="medium" className="is-fullwidth">
                                <option>1 месяц</option>
                                <option>3 месяца</option>
                                <option>6 месяцев</option>
                                <option>9 месяцев</option>
                                <option>1 год</option>
                            </Select>
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Языки!!!!!!!!!</Label>
                        <Control className="is-expanded">
                            <Select isSize="medium" className="is-fullwidth">
                                <option>1 месяц</option>
                                <option>3 месяца</option>
                                <option>6 месяцев</option>
                                <option>9 месяцев</option>
                                <option>1 год</option>
                            </Select>
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Есть ли вредные привычки</Label>
                        <Control className="is-expanded">
                            <Select isSize="medium" className="is-fullwidth">
                                <option>Нет</option>
                                <option>Курение</option>
                                <option>Алкоголь</option>
                                <option>Курение и алкоголь</option>
                            </Select>
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Дополнительная информация</Label>
                        <Control>
                            <textarea  style={{"width": "100%"}}
                                       type="text"
                                       onChange={(event) => this.handleInput('userInfo', event.target.value)}
                                       placeholder=''
                                       isSize="medium"/>
                        </Control>
                    </Field>
                    <div>
                        { page === 3 && <Button type="submit" onClick={this.handleSubmit} isColor='info' style={{"width": "100%", "height": "54px"}}>Готово!</Button> }
                    </div>
                </form>
            )
        }

        if (page === 2) {
            return (
                <form>
                    <Field>
                        <Label isSize="medium">ФИО</Label>
                        <Control>
                            <Input type="text"
                                   onChange={(event) => this.handleInput('userName', event.target.value)}
                                   placeholder='Александр Сергеевич Пушкин'
                                   isSize="medium"/>
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Пол</Label>
                        <Control className="is-expanded">
                            <Select isSize="medium" className="is-fullwidth">
                                <option>Женский</option>
                                <option>Мужской</option>
                            </Select>
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Родная страна</Label>
                        <Control className="is-expanded">
                            <Select isSize="medium" className="is-fullwidth">
                                {COUNTRIES.map(country => <option value={country}>{country}</option>)}
                            </Select>
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Родной город</Label>
                        <Control className="is-expanded">
                            <Select isSize="medium" className="is-fullwidth">
                                {COUNTRIES.map(country => <option value={country}>{country}</option>)}
                            </Select>
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Университет или колледж</Label>
                        <Control className="is-expanded">
                            <Select isSize="medium" className="is-fullwidth">
                                {COUNTRIES.map(country => <option value={country}>{country}</option>)}
                            </Select>
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Специальность</Label>
                        <Control className="is-expanded">
                            <Select isSize="medium" className="is-fullwidth">
                                {COUNTRIES.map(country => <option value={country}>{country}</option>)}
                            </Select>
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Контактный телефон</Label>
                        <Control>
                            <Input type="tel"
                                   onChange={(event) => this.handleInput('phoneNumber', event.target.value)}
                                   isSize="medium"
                                   placeholder=''/>
                        </Control>
                    </Field>
                    <div style={{"display": "flex", "justify-content": "flex-end", "margin-top": "50px"}}>
                        <Button onClick={() => changePage(page + 1)} isSize='large' isColor='info' style={{dalshe}}>Дальше</Button>
                    </div>
                </form>
            )
        }

        return (
            <form>
                <Field>
                    <Label isSize="medium">Электронная почта</Label>
                    <Control>
                        <Input type="email"
                               onChange={(event) => this.handleInput('email', event.target.value)}
                               placeholder='example@gmail.com'
                               isSize="medium"/>
                    </Control>
                </Field>
                {console.log(this.state)}
                <Field>
                    <Label isSize="medium">Пароль</Label>
                    <Control>
                        <Input type="password"
                               onChange={(event) => this.handleInput('password', event.target.value)}
                               isSize="medium"
                               placeholder='password'/>
                    </Control>
                </Field>
                <Field>
                    <Label isSize="medium">Повторите пароль</Label>
                    <Control>
                        <Input type="password"
                               isSize="medium"
                               onChange={(event) => ((event.target.value === this.state.password)? this.handleInput('isPasswordCorrect', true): this.handleInput('isPasswordCorrect', false))}
                               placeholder='password'/>
                    </Control>
                    <div>
                        {
                            !this.state.isPasswordCorrect &&
                            <h3 style={{"color": "red"}}>Неверный пароль</h3>
                        }
                    </div>
                </Field>
                <div style={{"display": "flex", "justify-content": "flex-end", "margin-top": "50px"}}>
                    <Button disabled={!this.state.isPasswordCorrect} onClick={this.state.isPasswordCorrect && (() => changePage(page + 1))} isSize='large' isColor='info' style={{dalshe}}>Дальше</Button>
                </div>
            </form>
        )
    }
}