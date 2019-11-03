import React, {Component} from 'react';
import RegisterForm from "../components/register-form";
import {Button, Container, Section, Title} from "bloomer";

const registerTitle = {
    "font-family": "Roboto",
    "font-style": "normal",
    "font-weight": "500",
    "font-size": "48px",
    "line-height": "56px",
    "text-align": "center",
    "letter-spacing": "0.25px",

    "color": "#000000"
}

const dalshe = {
    "background": "#001AFF",
    "border-radius": "4px",
    "font-family": "Roboto",
    "font-weight": "500",
    "font-size": "14px",
    "line-height": "16px",
    "letter-spacing": "0.25px",

    "color": "#FFFFFF"
}

class RegisterPage extends Component {
    state = { page: 1}

    changePage = (page) => {
        if (page >= 1 && page <= 3 ) {
            this.setState({ page })
        }
    }

    render() {
        const { page } = this.state;

        return (
            <Container>
                <Section style={{"margin-top": "50px"}}>
                    { page === 1 && <Title style={registerTitle}
                                           hasTextAlign="centered">
                        Регистрация
                    </Title> }
                    { page === 2 && <Title style={registerTitle} hasTextAlign="centered">Завершение регистрации</Title> }
                    { page === 3 && <Title style={registerTitle} hasTextAlign="centered">Еще немного вопросов :)</Title> }
                </Section>

                <Section style={{"max-width": "500px", "margin": "0 auto"}}>
                    <RegisterForm page={page} changePage={this.changePage}/>
                    {/*{ page > 1 && <Button onClick={() => this.changePage(page - 1)} isColor='info' isSize="medium" style={{"margin-top": "10px"}}>Вернуться</Button> }*/}
                    <div style={{"display": "flex", "justify-content": "flex-end", "margin-top": "50px"}}>
                        { page < 3 && <Button onClick={() => this.changePage(page + 1)} isSize='large' isColor='info' style={{dalshe}}>Дальше</Button> }
                    </div>
                    { page === 3 && <Button onClick={() => this.changePage(page + 1)} isColor='info' style={{"width": "100%", "height": "54px"}}>Готово!</Button> }
                </Section>
            </Container>
        );
    }
}

export default RegisterPage;