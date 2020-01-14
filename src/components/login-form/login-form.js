import React from "react";
import {Button, Container, Control, Field, Help, Input, Label, Section} from "bloomer";
import {withRouter} from 'react-router-dom';

class LoginForm extends React.Component {
    state = {
        email: '',
        password: ''
    };

    handleSubmit = (event) => {
        const {login, history} = this.props;
        event.preventDefault();
        console.log("Submit", this.state);
        login({email: this.state.email, password: this.state.password});
        history.push('/');
    };

    handleInput = (key, value) => {
        this.setState({[key]: value} )
    };

    render() {
        const {email, password} = this.state;
        return(
            <Container style={{"margin-bottom": "246px"}}>
                <Section>
                    <p style={{
                        "font-family": "Roboto",
                        "font-style": "normal",
                        "font-weight": "500",
                        "font-size": "48px",
                        "line-height": "56px",
                        "text-align": "center",
                        "letter-spacing": "0.25px",
                        "margin-top": "120px",

                        "color": "#000000"

                    }}>Вход</p>
                    <Container style={{"width": "370px", "margin-top": "45px"}}>
                        <Field>
                            <Label>Электронный адрес</Label>
                            <Control>
                                <Input type="email"
                                       placeholder='example@gmail.com'
                                       name="email" value={email}
                                       onChange={(event) => this.handleInput('email', event.target.value)}
                                       style={{"margin-top": "4px",
                                           "background": "#FFFFFF",
                                           "border": "1px solid #0019FF",
                                           "box-sizing": "border-box",
                                           "border-radius": "8px",
                                           "height": "48px"
                                       }}/>
                            </Control>
                        </Field>
                        <Field>
                            <Label style={{"margin-top": "10px"}}>Пароль</Label>
                            <Control>
                                <Input type="password"
                                       name="password"
                                       placeholder="password"
                                       value={password}
                                       onChange={(event) => this.handleInput('password', event.target.value)}
                                       style={{"margin-top": "4px",
                                           "background": "#FFFFFF",
                                           "border": "1px solid #0019FF",
                                           "box-sizing": "border-box",
                                           "border-radius": "8px",
                                           "height": "48px"
                                       }}/>
                            </Control>
                            <Help isPulled="right"
                                  style={{
                                      "font-family": "Roboto",
                                      "font-style": "normal",
                                      "font-weight": "500",
                                      "font-size": "14px",
                                      "line-height": "16px",
                                      "letter-spacing": "0.25px",

                                      "color": "#0019FF"
                                  }}>Забыли пароль?</Help>
                        </Field>
                        <Control isPulled="right">
                            <Button type="submit"
                                    onClick={this.handleSubmit}
                                    style={{
                                "background": "#001AFF",
                                "border-radius": "4px",
                                "height": "54px",
                                "width": "341px",
                                "font-family": "Roboto",
                                "font-style": "normal",
                                "font-weight": "500",
                                "font-size": "14px",
                                "line-height": "16px",
                                "letter-spacing": "0.25px",

                                "color": "#FFFFFF"
                            }}>Начать поиск!</Button>
                        </Control>
                    </Container>
                </Section>
            </Container>
        )
    }
}

export default withRouter(LoginForm);