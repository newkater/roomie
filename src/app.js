import React, {Component} from 'react';
import * as authService from "./services/auth-service"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './app.css';
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';
import HomePage from './pages/home';
import FAQPage from './pages/faq';
import GroupPage from './pages/group';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import ProfilePage from './pages/profile';
import Data from './data';
import CreateGroupPage from "./pages/create-group";
import AboutPage from "./pages/about";

toast.configure();

export default class App extends Component {
    data = new Data();

    initialAuthData = {
        id: null,
        email: null,
        password: null,
        loading: false,
        error: null
    };

    state = {
        groups: [],
        countries: [],
        languages: [],
        cities: [],
        almatyUniversities: [],
        kazakhCities: [],
        Auth: this.initialAuthData
    };

    setAuthData = ({id, email, password}) => {
        const newAuthData = {
            id, email, password, loading: false, error: null,
        };
        this.setState({Auth: newAuthData});
        console.log(this.state);
    };

    setAuthLoading = () => {
        const newAuthData = {...this.state.Auth, loading: true, error: null};
        this.setState({Auth: newAuthData})
    };

    setAuthError = (errorMessage) => {
        const newAuthData = {...this.state.Auth, loading: false, error: errorMessage};
        this.setState({Auth: newAuthData})
    };

    onError = (err) => {
        console.log("Error", err);
    };

    onGroupsLoaded = (groups) => {
        this.setState({
            groups: [...groups]
        });
    };

    getGroups = () => {
        this.data.getGroups()
            .then(groups => {
                this.onGroupsLoaded(groups);
            })
            .catch(this.onError)
    };

    onCountriesLoaded = (countries) => {
        this.setState({
            countries: [...countries]
        });
    };

    onLanguagesLoaded = (languages) => {
        this.setState({
            languages: [...languages]
        });
    };

    onKazakhCitiesLoaded = (kazakhCities) => {
        this.setState({
            kazakhCities: [...kazakhCities]
        });
    };

    onAlmatyUniversitiesLoaded = (almatyUniversities) => {
        this.setState({
            almatyUniversities: [...almatyUniversities]
        });
    };

    getCountries = () => {
        this.data.getCountries()
            .then(countries => {
                this.onCountriesLoaded(countries);
            })
            .catch(this.onError)
    };

    getLanguages = () => {
        this.data.getLanguages()
            .then(languages => {
                this.onLanguagesLoaded(languages);
            })
            .catch(this.onError)
    };

    getKazakhCities = () => {
        this.data.getKazakhCities()
            .then(kazakhCities => {
                this.onKazakhCitiesLoaded(kazakhCities);
            })
            .catch(this.onError)
    };

    getAlmatyUniversities = () => {
        this.data.getAlmatyUniversities()
            .then(almatyUniversities => {
                this.onAlmatyUniversitiesLoaded(almatyUniversities);
            })
            .catch(this.onError)
    };

    getUser = ({id}) => {
        this.data.getUser({id}).then(res => console.log("app getUser", res))
            .catch(this.onError);
    };

    componentDidMount() {
        this.getGroups();
        this.getCountries();
        this.getLanguages();
        this.getKazakhCities();
        this.getAlmatyUniversities();
    }

    register = (form) => {
        this.setAuthLoading();
        authService.signUp(form)
            .then(res => {
                let result = JSON.parse(res);
                console.log("app register ", result);
                const {id, name, photo} = result[0];
                sessionStorage.setItem('id', id);
                sessionStorage.setItem('photo', photo);
                sessionStorage.setItem('name', name);
                sessionStorage.setItem('isAuthorized', 'yes');
                this.setAuthData({id: id});
            })
            .catch(error => {
                console.log(error);
                this.setAuthError(error);
            })
    };

    login = (credentials) => {
        this.setAuthLoading();
        authService.signIn(credentials)
            .then(res => {
                let result = JSON.parse(res);
                console.log("res", result);
                const {id, name, photo} = result[0];
                sessionStorage.setItem('id', id);
                sessionStorage.setItem('photo', photo);
                sessionStorage.setItem('name', name);
                sessionStorage.setItem('isAuthorized', 'yes');
                this.setAuthData({id: id});
            })
            .catch(error => {
                console.log(error);
                this.setAuthError(error);
            })
    };

    userDelete = (credentials) => {
        this.setAuthLoading();
        authService.userDelete(credentials)
            .then(result => {
                sessionStorage.clear();
                console.log("deleted");
            })
            .catch(error => {
                console.log(error);
                this.setAuthError(error);
            })
    };

    createGroup = (form) => {
        this.setAuthLoading();
        authService.groupCreation(form)
            .then(result => {
                console.log("app createGroup ", result);
            })
            .catch(error => {
                console.log(error);
                this.setAuthError(error);
            })
    };

    userUpdate = (form) => {
        this.setAuthLoading();
        console.log("app userUpdate ", form);
        authService.userUpdate(form)
            .then(result => {
                console.log("app userUpdate ", result);
                sessionStorage.setItem('photo', form.photo);
            })
            .catch(error => {
                console.log(error);
                this.setAuthError(error);
            })
    };

    groupUpdate = (form) => {
        this.setAuthLoading();
        console.log("app groupUpdate ", form);
        authService.userUpdate(form)
            .then(result => {
                console.log("app groupUpdate ", result);
            })
            .catch(error => {
                console.log(error);
                this.setAuthError(error);
            })
    };

    getGroupById = (id) => {
        let {groups} = this.state;
        const index = groups.findIndex(el => el.id === id);
        if (index > -1)
            return groups[index];
        return null;
    };

    render() {
        let {groups, countries, languages, almatyUniversities, kazakhCities} = this.state;
        return (
            <Router>
                <div>
                    <AppHeader/>
                    <Switch>
                        <Route exact path={'/'}
                               render = {() =>
                                   <HomePage
                                       groupUpdate={this.groupUpdate}
                                       groups={groups}
                                   />
                               }
                        />
                        <Route exact path={'/faq'}
                               render = {() => <FAQPage questions={this.data.getQuestions()}/>}
                        />
                        <Route exact path={'/group/:id'}
                               render ={({match}) => {
                                   //console.log("APP", this.getGroupById(parseInt(match.params.id)));
                                   return <GroupPage
                                       groupUpdate={this.groupUpdate}
                                       id={match.params.id}
                                       group={this.getGroupById(parseInt(match.params.id))}
                                   />
                               }}
                        />
                        <Route exact path={'/login'}
                            render = {() =>
                                <LoginPage
                                    authData={this.state.Auth}
                                    login={this.login}
                                />
                            }
                        />
                        <Route exact path={'/register'}
                               render = {() =>
                                   <RegisterPage
                                       countries={countries}
                                       register={this.register}
                                       languages={languages}
                                       kazakhCities={kazakhCities}
                                       almatyUniversities={almatyUniversities}
                                       num={"first"}
                                   />
                               }
                        />
                        <Route exact path={'/about'}
                               render = {() =>
                                   <AboutPage
                                       projectInfo={this.data.getProjectInfo()}
                                   />
                               }
                        />
                        <Route exact path={'/create-group'}
                               render = {() =>
                                   <CreateGroupPage
                                       kazakhCities={kazakhCities}
                                       createGroup={this.createGroup}
                                   />
                               }
                        />
                        <Route exact path={'/profile/:id'}
                               render = {({match}) =>
                                   <ProfilePage
                                       groupUpdate={this.groupUpdate}
                                       countries={countries}
                                       userUpdate={this.userUpdate}
                                       id={match.params.id}
                                       languages={languages}
                                       almatyUniversities={almatyUniversities}
                                       getUser = {this.data.getUser}
                                       userDelete={this.userDelete}
                                       //user={this.getUser(match.params.id)}
                                   />
                               }
                        />
                    </Switch>
                    <AppFooter/>
                </div>
            </Router>
        );
    };
}