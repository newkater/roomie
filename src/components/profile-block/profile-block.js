import React, {Component} from 'react';
import { CSSTransition } from "react-transition-group";
import {Button, Input} from "bloomer";
import { withHelpersModifiers  } from 'bloomer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './profile-block.css';
import Avatar from "../avatar";
import {ageToString} from "../../utils";
import Select from "react-select";
import {COUNTRIES} from "./../../utils/countries";
import {Link} from "react-router-dom";
import Data from "../../data";
import cameraBlack from './../../images/camera-black.svg';
import cameraWhite from './../../images/camera-white.svg';

const habits = [
    {value: "Нет", label: "Нет"},
    {value: "Курение", label: "Курение"},
    {value: "Алкоголь", label: "Алкоголь"},
    {value: "Курение и алкоголь", label: "Курение и алкоголь"}
];

const userProp = (key, value) => {
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

const toBase64String = (type, data) => {
    return `data:${type};base64,${data}`;
};

class ProfileBlock extends Component {
    data=new Data();
    state = {
        id: this.props.user.id,
        photo: this.props.user.photo,
        name: this.props.user.name,
        age: this.props.user.age,
        sex: this.props.user.sex,
        currentCity: this.props.user.currentCity,
        birthCity: this.props.user.birthCity,
        birthDate: this.props.user.birthDate,
        university: this.props.user.university,
        specialty: this.props.user.speciality,
        languages: this.props.user.languages,
        badHabits: this.props.user.badHabits,
        phoneNumber: this.props.user.phoneNumber,
        userInfo: this.props.user.userInfo,
        maxRoommatesNumber: this.props.user.maxRoommatesNumber,
        rentalPeriod: this.props.user.rentalPeriod,
        showDetails: false,
        isChanging: false,
        specialities: []
    };

    notify = () => toast.error(this.toastMessage, {
        position: "bottom-center",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true
    });

    toastMessage = () => {
        return (
            <span>
                <p>Уверены, что хотите удалить аккаунт?</p>
                <Link onClick={this.handleDelete} to={'/'}>Да</Link>
            </span>
        );
    };

    editMode = () => {
        if (!this.state.isChanging) this.setState({showDetails: true});
        this.setState({isChanging: !this.state.isChanging});
    };

    handleDelete = (event) => {
        const {userDelete, history} = this.props;
        console.log("delete user props", this.props);
        event.preventDefault();
        console.log("Delete", this.state);
        userDelete(
            {
                email: sessionStorage.getItem('email'),
                password: sessionStorage.getItem('password'),
                id: this.state.id,
            });
    };

    handleInput = (key, value) => {
        this.setState({[key]: value} );
        console.log("profile", this.state);
    };

    handleChangeImage = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.addEventListener("load", () => (this.setState({photo: reader.result})));
        reader.readAsDataURL(file);
        //console.log("reader", reader.result)
    }

    handleSubmit = (event) => {
        const {userUpdate} = this.props;
        console.log("update user props", this.props);
        event.preventDefault();
        console.log("Submit", this.state);
        let lang = [...this.state.languages];
        lang= lang.map((item) => {return {id: item.id}});
        let badHabits = this.state.badHabits;
        if (badHabits.value != undefined) badHabits=badHabits.value;
        userUpdate(
            {
                email: sessionStorage.getItem('email'),
                password: sessionStorage.getItem('password'),
                photo: this.state.photo,
                id: this.state.id,
                userName: this.state.name,
                sex: this.state.sex,
                birthCountry: 'Казахстан',
                birthDate: this.state.birthDate,
                birthCity: this.state.birthCity,
                university: this.state.university,
                speciality: this.state.specialty,
                phoneNumber: this.state.phoneNumber,
                currentCity: this.state.currentCity,
                maxRoommatesNumber: this.state.maxRoommatesNumber,
                rentalPeriod: this.state.rentalPeriod,
                languages: lang,
                badHabits: badHabits,
                userInfo: this.state.userInfo,
                groups: this.state.groups
            });
        window.location.reload();
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

    handleChangeUniversity = (value) => {
        this.setState({university: value} );
        this.getSpecialities(value.value);
        //console.log("value", value);
        //console.log("handle cities", this.state.cities);
    }

    render() {
        let {showDetails, isChanging} = this.state;
        let {photo, age, languages, badHabits, birthDate, birthCity, currentCity, userInfo, name, phoneNumber, specialty, university} = this.state;
        const { almatyUniversities} = this.props;
        const allLanguages=this.props.languages;
        const isAuthorised = sessionStorage.getItem("email")?true:false;
        //console.log("profile-block coun", countries);
        return (
            <div className="profile">
                <ToastContainer
                    position="bottom-center"
                    containerId={'A'}
                    autoClose={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                />
                <div className="profile-delete-button" onClick={this.notify}/>
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
                            <Avatar image={photo || cameraBlack} size={200}/>
                        </div>
                        <div className="profile-info">
                            <div className="profile-info-name">{name}</div>
                            <div className="profile-info-age">{ageToString(age)}</div>
                            {userProp('Родная страна', 'Казахстан', isChanging)}
                            {userProp('Родной город', birthCity, isChanging)}
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
                                    {userProp('О себе', userInfo, isChanging)}
                                </section>
                            </CSSTransition>
                        </div>
                    </div>
                }
                {
                    isChanging &&
                    <div className="box profile-block">
                        <div className="profile-picture">
                            <Avatar image={photo || cameraBlack} size={200}/>
                            <div>
                                <Input type='file' onChange={this.handleChangeImage}/>
                            </div>
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
                                                onChange={(value) => {if (value!= undefined)this.handleChangeUniversity(value)}}
                                                options={almatyUniversities}
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
                                                onChange={(value) => {if (value!= undefined) this.handleInput('specialty', value)}}
                                                options={this.state.specialities}
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
                                                options={allLanguages}
                                                isSearchable
                                                closeMenuOnSelect={false}
                                                onChange={(value) => {if (value!= undefined) this.handleInput('languages', value)}}
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
                                                onChange={(value) => {if (value!= undefined) this.handleInput('badHabits', value)}}
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
                                                      onChange={(event) => this.handleInput('userInfo', event.target.value)}
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