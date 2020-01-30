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

toast.configure()

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

    getCountries = () => {
        this.data.getCountries()
            .then(countries => {
                this.onCountriesLoaded(countries);
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
    }

    register = (form) => {
        this.setAuthLoading();
        authService.signUp(form)
            .then(result => {
                console.log("app register ", result);
                const {id} = result;
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
            .then(result => {
                console.log(result);
                const {id} = result;
                this.setAuthData({id: id});
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
        let {groups, countries} = this.state;
        return (
            <Router>
                <div>
                    <AppHeader/>
                    <Switch>
                        <Route exact path={'/'}
                               render = {() =>
                                   <HomePage
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
                                       num={"first"}
                                   />
                               }
                        />
                        <Route exact path={'/create-group'}
                               render = {() =>
                                   <CreateGroupPage
                                       createGroup={this.createGroup}
                                   />
                               }
                        />
                        <Route exact path={'/profile/:id'}
                               render = {({match}) =>
                                   <ProfilePage
                                       countries={countries}
                                       userUpdate={this.userUpdate}
                                       id={match.params.id}
                                       getUser = {this.data.getUser}
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