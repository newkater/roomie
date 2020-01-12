import React, {Component} from "react";
import debounce from "lodash";
import "./register-form.css";
import DatePicker from "react-date-picker";
import {Button, Control, Field, Input, Label} from "bloomer";
import {COUNTRIES} from "../../utils";
import {LANGUAGES} from "../../utils/languages";
//import ".../data.js";
import Select from 'react-select';
import {withRouter} from 'react-router-dom';
import "react-date-picker/dist/DatePicker.css";

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

const genders = [
    { value: 'male', label: 'Мужской' },
    { value: 'female', label: 'Женский' }
];

const habits = [
    {value: "Нет", label: "Нет"},
    {value: "Курение", label: "Курение"},
    {value: "Алкоголь", label: "Алкоголь"},
    {value: "Курение и алкоголь", label: "Курение и алкоголь"}
];

const timePeriods = [
    { value: 1, label: '1 месяц' },
    { value: 3, label: 'до 3 месяцев' },
    { value: 6, label: 'до 6 месяцев' },
    { value: 9, label: 'до 9 месяцев' },
    { value: 12, label: 'больше' }
];

const roommatesNumber = [
    {value: 1, label: '1'},
    {value: 2, label: '2'},
    {value: 3, label: '3'},
    {value: 4, label: '4'},
    {value: 5, label: '5'},
    {value: 6, label: '6'}
];

const customStyles = {
    option: (provided) => ({
        ...provided,
        borderBottom: '1px dotted pink',
        padding: 20,
    }),
    control: () => ({
        // none of react-select's styles are passed to <Control />
        width: 200,
    }),
    singleValue: (provided, state) => {
        const transition = 'opacity 300ms';

        return { ...provided, transition };
    }
};

let putError = (password, pass) => {
    //console.log("putError came");
    //console.log("PutError: ", (password !== pass));
    return ((password !== pass) || (pass == '' && password == ''));
};

let debouncedError = (password, pass) => {
    console.log("debouncedError came ", putError(password, pass));
    return (debounce(putError(password, pass), 500));
};

class RegisterForm extends Component {
    state = {
        email: '',
        password: '',
        pass: '',
        userName: '',
        sex: '',
        birthCountry: '',
        birthCity: '',
        birthDate: '',
        university: '',
        speciality: '',
        phoneNumber: '',
        currentCity: '',
        maxRoommatesNumber: '',
        rentalPeriod: '',
        languages: null,
        badHabits: '',
        userInfo: '',
        isPasswordCorrect: true
    };

    handleInput = (key, value) => {
        if (key === 'pass') {
            debouncedError();
            console.log(debouncedError());
        }
        this.setState({[key]: value} );
        console.log(this.state);
    };

    handleSubmit = (event) => {
        const {register, history} = this.props;
        console.log("register props", this.props);
        event.preventDefault();
        console.log("Submit", this.state);
        register(
            {
                email: this.state.email,
                password: this.state.password,
                userName: this.state.userName,
                sex: this.state.sex,
                birthCountry: this.state.birthCountry,
                birthDate: this.state.birthDate,
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
        history.push('/');
    };

    render() {
        const { page, changePage, register } = this.props;

        if (page === 3) {
            return (
                <form>
                    <Field>
                        <Label isSize="medium">В каком городе вы ищете жилье?</Label>
                        <Control className="is-expanded">
                            <Select isSize="medium"
                                    isSearchable
                                    closeMenuOnSelect={true}
                                    onChange={(value) => this.handleInput('currentCity', value)}
                                    options={COUNTRIES}
                                    className="is-fullwidth"
                                    value={this.state.currentCity}
                            />
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Максимальное число сожителей</Label>
                        <Control>
                            <Select isSize="medium"
                                    isSearchable
                                    closeMenuOnSelect={true}
                                    onChange={(value) => this.handleInput('maxRoommatesNumber', value)}
                                    options={roommatesNumber}
                                    className="is-fullwidth"
                                    value={this.state.maxRoommatesNumber}
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
                        <Label isSize="medium">Языки</Label>
                        <Control className="is-expanded">
                            <Select isSize="medium"
                                    isMulti
                                    options={LANGUAGES}
                                    isSearchable
                                    closeMenuOnSelect={false}
                                    onChange={(value) => this.handleInput('languages', value)}
                                    className="is-fullwidth"
                                    value={this.state.languages}
                                />
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Есть ли вредные привычки</Label>
                        <Control className="is-expanded">
                            <Select isSize="medium"
                                    isSearchable
                                    closeMenuOnSelect={true}
                                    onChange={(value) => this.handleInput('badHabits', value)}
                                    options={habits}
                                    className="is-fullwidth"
                                    value={this.state.badHabits}
                            />
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Дополнительная информация</Label>
                        <Control>
                            <textarea  style={{"width": "100%"}}
                                       className="textarea"
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
                                   isSize="medium"
                                   value={this.state.userName}
                            />
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Дата рождения</Label>
                        <Control>
                            <Input type="date"
                                   isSize="medium"
                                   value={this.state.birthDate}
                                   onChange={(event) => this.handleInput('birthDate', event.target.value)}
                            />
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Пол</Label>
                        <Control className="is-expanded">
                            <Select isSize="medium"
                                    options={genders}
                                    onChange={(value) => this.handleInput('sex', value)}
                                    className="is-fullwidth"
                                    value={this.state.sex}
                            />
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Родная страна</Label>
                        <Control className="is-expanded">
                            <Select isSize="medium"
                                    isSearchable
                                    closeMenuOnSelect={true}
                                    onChange={(value) => this.handleInput('birthCountry', value)}
                                    options={COUNTRIES}
                                    className="is-fullwidth"
                                    value={this.state.birthCountry}
                            />
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Родной город</Label>
                        <Control className="is-expanded">
                            <Select isSize="medium"
                                    isSearchable
                                    closeMenuOnSelect={true}
                                    onChange={(value) => this.handleInput('birthCity', value)}
                                    options={COUNTRIES}
                                    className="is-fullwidth"
                                    value={this.state.birthCity}
                            />
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Университет или колледж</Label>
                        <Control className="is-expanded">
                            <Select isSize="medium"
                                    isSearchable
                                    closeMenuOnSelect={true}
                                    onChange={(value) => this.handleInput('university', value)}
                                    options={COUNTRIES}
                                    className="is-fullwidth"
                                    value={this.state.university}
                            />
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Специальность</Label>
                        <Control className="is-expanded">
                            <Select isSize="medium"
                                    isSearchable
                                    closeMenuOnSelect={true}
                                    onChange={(value) => this.handleInput('speciality', value)}
                                    options={COUNTRIES}
                                    className="is-fullwidth"
                                    value={this.state.speciality}
                            />
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
                               onChange={(event) => this.handleInput('pass', event.target.value)}
                               placeholder='password'/>
                    </Control>
                    <div>
                        {
                            (putError(this.state.password, this.state.pass) && this.state.pass !== '' && this.state.password !== '') &&
                            <h3 style={{"color": "red"}}>Неверный пароль</h3>
                        }
                    </div>
                </Field>
                <div style={{"display": "flex", "justify-content": "flex-end", "margin-top": "50px"}}>
                    <Button disabled={putError(this.state.password, this.state.pass)} onClick={(() => changePage(page + 1))} isSize='large' isColor='info' style={{dalshe}}>Дальше</Button>
                </div>
            </form>
        )
    }
}

export default withRouter(RegisterForm);