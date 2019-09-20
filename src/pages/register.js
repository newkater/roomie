import React, {Component} from 'react';
import RegisterForm from "../components/register-form";
import {Button, Container, Section, Title} from "bloomer";


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
                    { page === 1 && <Title isSize={2} hasTextAlign="centered">Регистрация</Title> }
                    { page === 2 && <Title isSize={2} hasTextAlign="centered">Завершение регистрации</Title> }
                    { page === 3 && <Title isSize={2} hasTextAlign="centered">Еще немного вопросов :)</Title> }
                </Section>

                <Section style={{"max-width": "500px", "margin": "0 auto"}}>
                    <RegisterForm page={page} changePage={this.changePage}/>
                    { page > 1 && <Button onClick={() => this.changePage(page - 1)} isColor='info' isSize="medium" style={{"margin-top": "10px"}}>Вернуться</Button> }
                    { page < 3 && <Button onClick={() => this.changePage(page + 1)} isColor='info' isSize="medium" style={{"margin-top": "10px"}}>Дальше</Button> }
                    { page === 3 && <Button onClick={() => this.changePage(page + 1)} isColor='info' isSize="medium" style={{"margin-top": "10px"}}>Завершить</Button> }
                </Section>
            </Container>
        );
    }
}

export default RegisterPage;