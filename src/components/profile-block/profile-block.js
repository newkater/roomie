import React, {Component} from 'react';
import { CSSTransition } from "react-transition-group";
import {Button, Icon, Input} from "bloomer";
import { withHelpersModifiers  } from 'bloomer';

import './profile-block.css';
import Avatar from "../avatar";
import {ageToString, COUNTRIES} from "../../utils";
import Select from "react-select";
import {LANGUAGES} from "../../utils/languages";

const habits = [
    {value: "Нет", label: "Нет"},
    {value: "Курение", label: "Курение"},
    {value: "Алкоголь", label: "Алкоголь"},
    {value: "Курение и алкоголь", label: "Курение и алкоголь"}
];

const userProp = (key, value, isChanging) => {
    return(
        <div className="profile-info-prop">
            <div className="profile-info-key">
                {key}
            </div>
            <div className="profile-info-value">
                {value}
            </div>
        </div>
    )
};

class ProfileBlock extends Component {
    state = {
        imgPath: this.props.user.imgPath,
        name: this.props.user.name,
        age: this.props.user.age,
        city: this.props.user.city,
        birthDate: this.props.user.birthDate,
        university: this.props.user.university,
        specialty: this.props.user.specialty,
        languages: this.props.user.languages,
        badHabits: this.props.user.badHabits,
        phoneNumber: this.props.user.phoneNumber,
        info: this.props.user.info,
        showDetails: false,
        isChanging: false
    };

    editMode = () => {
        if (!this.state.isChanging) this.setState({showDetails: true});
        this.setState({isChanging: !this.state.isChanging});
    };

    handleInput = (key, value) => {
        this.setState({[key]: value} );
        console.log("profile", this.state);
    };

    handleSubmit = (event) => {
        const {userUpdate, history} = this.props;
        console.log("update user props", this.props);
        event.preventDefault();
        console.log("Submit", this.state);
        userUpdate(
            {
                id: this.state.id,
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
                userInfo: this.state.userInfo,
                groups: this.state.groups
            });
    };

    render() {
        let {showDetails, isChanging} = this.state;
        let {imgPath, age, badHabits, birthDate, city, languages, info, name, phoneNumber, specialty, university} = this.state;
        return (
            <div className="profile">
                <div className="profile-edit-button" onClick={this.editMode}/>
                {
                    !isChanging &&
                    <div className={ showDetails ? "profile-dropdown-button profile-dropdown-button--open" : "profile-dropdown-button" }
                         onClick={() => this.setState({showDetails: !showDetails})}
                    >
                    </div>
                }
                {
                    !isChanging &&
                    <div className="box profile-block">
                        <div className="profile-picture">
                            <Avatar image={imgPath} size={200}/>
                        </div>
                        <div className="profile-info">
                            <div className="profile-info-name">{name}</div>
                            <div className="profile-info-age">{ageToString(age)}</div>
                            {userProp('Родная страна', 'Казахстан', isChanging)}
                            {userProp('Родной город', city, isChanging)}
                            <CSSTransition
                                in={showDetails}
                                timeout={300}
                                classNames="show-details"
                                unmountOnExit
                                appear
                            >
                                <section>
                                    {userProp('Дата рождения', birthDate, isChanging)}
                                    {userProp('Университет', university, isChanging)}
                                    {userProp('Специальность', specialty, isChanging)}
                                    {userProp('Языки', languages, isChanging)}
                                    {userProp('Вредные привычки', badHabits, isChanging)}
                                    {userProp('Телефон', phoneNumber, isChanging)}
                                    {userProp('О себе', info, isChanging)}
                                </section>
                            </CSSTransition>
                        </div>
                    </div>
                }
                {
                    isChanging &&
                    <div className="box profile-block">
                        <div className="profile-picture">
                            <Avatar image={imgPath} size={200}/>
                        </div>
                        <div className="profile-info">
                            <CSSTransition
                                in={showDetails}
                                timeout={300}
                                classNames="show-details"
                                unmountOnExit
                                appear
                            >
                                <section>
                                    <div className="profile-info-prop">
                                        <div className="profile-info-key">
                                            ФИО
                                        </div>
                                        <Input type="text"
                                               className="profile-change-value"
                                               onChange={(event) => this.handleInput('name', event.target.value)}
                                               placeholder='ФИО'
                                               isSize="medium"
                                               value={this.state.name}
                                        />
                                    </div>
                                    <div className="profile-info-prop">
                                        <div className="profile-info-key">
                                            Университет
                                        </div>
                                        <Select isSize="medium"
                                                className="profile-change-value"
                                                isSearchable
                                                closeMenuOnSelect={true}
                                                onChange={(value) => this.handleInput('university', value)}
                                                options={COUNTRIES}
                                                value={this.state.university}
                                        />
                                    </div>
                                    <div className="profile-info-prop">
                                        <div className="profile-info-key">
                                            Специальность
                                        </div>
                                        <Select isSize="medium"
                                                isSearchable
                                                className="profile-change-value"
                                                closeMenuOnSelect={true}
                                                onChange={(value) => this.handleInput('specialty', value)}
                                                options={COUNTRIES}
                                                value={this.state.specialty}
                                        />
                                    </div>
                                    <div className="profile-info-prop">
                                        <div className="profile-info-key">
                                            Языки
                                        </div>
                                        <Select isSize="medium"
                                                isMulti
                                                className="profile-change-value is-fullwidth"
                                                options={LANGUAGES}
                                                isSearchable
                                                closeMenuOnSelect={false}
                                                onChange={(value) => this.handleInput('languages', value)}
                                                value={this.state.languages}
                                        />
                                    </div>
                                    <div className="profile-info-prop">
                                        <div className="profile-info-key">
                                            Вредные привычки
                                        </div>
                                        <Select isSize="medium"
                                                isSearchable
                                                className="profile-change-value is-fullwidth"
                                                closeMenuOnSelect={true}
                                                onChange={(value) => this.handleInput('badHabits', value)}
                                                options={habits}
                                                value={this.state.badHabits}
                                        />
                                    </div>
                                    <div className="profile-info-prop">
                                        <div className="profile-info-key">
                                            Телефон
                                        </div>
                                        <Input type="tel"
                                               className="profile-change-value"
                                               onChange={(event) => this.handleInput('phoneNumber', event.target.value)}
                                               isSize="medium"
                                               value={this.state.phoneNumber}
                                               placeholder=''/>
                                    </div>
                                    <div className="profile-info-prop">
                                        <div className="profile-info-key">
                                            О себе
                                        </div>
                                        <div className="profile-change-value">
                                            <textarea className="profile-change-value textarea"
                                                      onChange={(event) => this.handleInput('info', event.target.value)}
                                                      placeholder=''
                                                      value={this.state.info}
                                                      isSize="medium"/>
                                        </div>
                                    </div>
                                </section>

                            </CSSTransition>
                            <Button className="save-changes" type="submit" onClick={this.handleSubmit}>Сохранить изменения</Button>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default withHelpersModifiers(ProfileBlock);