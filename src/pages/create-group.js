import React, {Component} from 'react';
import {Container, Section, Title} from "bloomer";
import CreateGroupForm from "../components/create-group-form/create-group-form";

const registerTitle = {
    "font-family": "Roboto",
    "font-style": "normal",
    "font-weight": "500",
    "font-size": "48px",
    "line-height": "56px",
    "text-align": "center",
    "letter-spacing": "0.25px",

    "color": "#000000"
};

class CreateGroupPage extends Component {
    render() {
        const {createGroup} = this.props;
        return (
            <Container>
                <Section style={{"margin-top": "50px"}}>
                    <Title style={registerTitle}
                           hasTextAlign="centered">
                        Создание группы
                    </Title>
                </Section>
                <Section style={{"max-width": "500px", "margin": "0 auto"}}>
                    <CreateGroupForm createGroup={createGroup}/>
                </Section>
            </Container>
        );
    }
}

export default CreateGroupPage;