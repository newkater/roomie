import React, {Component} from 'react';
import RegisterForm from "../components/register-form";
import {Button, Container, Section, Tag, Title} from "bloomer";

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

class RegisterPage extends Component {
    state = {page: 1};

    changePage = (page) => {
        if (page >= 1 && page <= 3 ) {
            this.setState({ page })
        }
    };

    render() {
        const { page } = this.state;
        const {register} = this.props;

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
                    <RegisterForm register={register} page={page} changePage={this.changePage}/>
                    {/*{ page > 1 && <Button onClick={() => this.changePage(page - 1)} isColor='info' isSize="medium" style={{"margin-top": "10px"}}>Вернуться</Button> }*/}

                </Section>
            </Container>
        );
    }
}

export default RegisterPage;