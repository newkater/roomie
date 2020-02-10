import React, {Component} from "react";
import debounce from "lodash";
import "./register-form.css";
import {Button, Control, Field, Input, Label} from "bloomer";
import {COUNTRIES} from "../../utils/countries";
import Select from 'react-select';
import {withRouter} from 'react-router-dom';
import "react-date-picker/dist/DatePicker.css";
import Data from "../../data";

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
    { value: 'MALE', label: 'Мужской' },
    { value: 'FEMALE', label: 'Женский' }
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

let putError = (password, pass) => {
    return ((password !== pass) || (pass === '' && password === ''));
};

let debouncedError = (password, pass) => {
    //console.log("debouncedError came ", putError(password, pass));
    return (debounce(putError(password, pass), 500));
};

class RegisterForm extends Component {
    data= new Data();
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
        currentCity: 183,
        maxRoommatesNumber: '',
        rentalPeriod: '',
        languages: null,
        badHabits: '',
        userInfo: '',
        isPasswordCorrect: true,
        cities: [],
        specialities: [],
        universities: []
    };

    getCities = (cityName) => {
        this.data.getCities({cityName}).then(res => {
            console.log("getCities", res);
            return res;
        }).then(res => this.setState({cities: res})).then(() => console.log("handle cities", this.state.cities));
    };

    getUniversities = (cityId) => {
        this.data.getUniversities({cityId}).then(res => {
            console.log("getUniversities", res);
            return res;
        }).then(res => this.setState({universities: res})).then(() => console.log("handle universities", this.state.universities));
    };

    getSpecialities = (universityId) => {
        this.data.getSpecialities({universityId})
        // .then(res => {
        //     console.log("getSpecialities", res);
        //     return res;
        // })
            .then(res => this.setState({specialities: res}))
        // .then(() => console.log("after", this.state.specialities));
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
        let lang = [...this.state.languages];
        lang= lang.map((item) => {return {id: item.id}});
        register(
            {
                email: this.state.email,
                password: this.state.password,
                userName: this.state.userName,
                sex: this.state.sex.value,
                birthCountry: this.state.birthCountry.value,
                birthDate: this.state.birthDate,
                birthCity: this.state.birthCity.value,
                university: this.state.university.value,
                speciality: this.state.speciality.value,
                phoneNumber: this.state.phoneNumber,
                currentCity: this.state.currentCity.value,
                maxRoommatesNumber: this.state.maxRoommatesNumber.value,
                rentalPeriod: this.state.rentalPeriod.value,
                languages: lang,
                badHabits: this.state.badHabits.value,
                userInfo: this.state.userInfo
            });
        history.push('/');
    };

    handleChangeCountry = (value) => {
        this.setState({birthCountry: value} );
        this.getCities(value.value);
        console.log("value", value);
        console.log("handle cities", this.state.cities);
    }

    handleChangeCity = (value) => {
        this.setState({currentCity: value} );
        this.getUniversities(value.value);
        console.log("value", value);
        console.log("handle universities", this.state.universities);
    }

    handleChangeUniversity = (value) => {
        this.setState({university: value} );
        this.getSpecialities(value.value);
        //console.log("value", value);
        //console.log("handle cities", this.state.cities);
    }

    render() {
        const { page, changePage, almatyUniversities, kazakhCities } = this.props;

        const allLanguages=this.props.languages;

        const {specialities, cities, universities} = this.state;

        if (page === 3) {
            return (
                <form>
                    <Field>
                        <Label isSize="medium">Максимальное число сожителей</Label>
                        <Control>
                            <Select isSize="medium"
                                    isSearchable
                                    closeMenuOnSelect={true}
                                    onChange={(value) => this.handleInput('maxRoommatesNumber', value)}
                                    options={roommatesNumber}
                                    className="is-fullwidth mandatory-field"
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
                                    className="is-fullwidth mandatory-field"
                                    value={this.state.rentalPeriod}
                            />
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Языки</Label>
                        <Control className="is-expanded">
                            <Select isSize="medium"
                                    isMulti
                                    options={allLanguages}
                                    isSearchable
                                    closeMenuOnSelect={false}
                                    onChange={(value) => this.handleInput('languages', value)}
                                    className="is-fullwidth mandatory-field"
                                    value={this.state.languages}
                                />
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">В каком городе вы ищете жилье?</Label>
                        <Control className="is-expanded">
                            <Select isSize="medium"
                                    isSearchable
                                    closeMenuOnSelect={true}
                                    onChange={(value) => this.handleChangeCity(value)}
                                    options={kazakhCities}
                                    className="is-fullwidth mandatory-field"
                                    value={this.state.currentCity}
                            />
                        </Control>
                    </Field>
                    <Field>
                        <Label isSize="medium">Университет или колледж</Label>
                        <Control className="is-expanded">
                            <Select isSize="medium"
                                    isSearchable
                                    closeMenuOnSelect={true}
                                    onChange={(value) => this.handleChangeUniversity(value)}
                                    options={universities}
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
                                    options={specialities}
                                    className="is-fullwidth"
                                    value={this.state.speciality}
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
                        { page === 3 && <Button disabled={this.state.maxRoommatesNumber==="" || this.state.languages===null || this.state.currentCity==="" || this.state.rentalPeriod===""} type="submit" onClick={this.handleSubmit} isColor='info' style={{"width": "100%", "height": "54px"}}>Готово!</Button> }
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
                                   className="mandatory-field"
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
                                   className="mandatory-field"
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
                                    className="is-fullwidth mandatory-field"
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
                                    onChange={(value) => this.handleChangeCountry(value)}
                                    options={COUNTRIES}
                                    className="is-fullwidth mandatory-field"
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
                                    options={kazakhCities}
                                    className="is-fullwidth"
                                    value={this.state.birthCity}
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
                        <Button disabled={this.state.userName==="" || this.state.birthDate==="" || this.state.birthCountry===""} onClick={() => changePage(page + 1)} isSize='large' isColor='info' style={{dalshe}}>Дальше</Button>
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
                               className="mandatory-field"
                               onChange={(event) => this.handleInput('email', event.target.value)}
                               placeholder='example@gmail.com'
                               isSize="medium"/>
                    </Control>
                </Field>
                <Field>
                    <Label isSize="medium">Пароль</Label>
                    <Control>
                        <Input type="password"
                               className="mandatory-field"
                               onChange={(event) => this.handleInput('password', event.target.value)}
                               isSize="medium"
                               placeholder='password'/>
                    </Control>
                </Field>
                <Field>
                    <Label isSize="medium">Повторите пароль</Label>
                    <Control>
                        <Input type="password"
                               className="mandatory-field"
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
                    <Button disabled={putError(this.state.password, this.state.pass) || this.state.email===""} onClick={(() => changePage(page + 1))} isSize='large' isColor='info' style={{dalshe}}>Дальше</Button>
                </div>
            </form>
        )
    }
}

export default withRouter(RegisterForm);