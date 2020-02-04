import React, {Component} from 'react'
import {Container} from "bloomer";
import {Link} from "react-router-dom";

export default class AboutPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        let {projectInfo} = this.props;
        let form = projectInfo.map((item) => {
            const reff = React.createRef();
            return (
                {
                    question: item.question,
                    answer: item.answer,
                    id: item.id,
                    myItemRef: reff
                }
            );
        })
        let questions = form.map((item) =>
            <li><Link onClick={() => item.myItemRef.current.scrollIntoView({behavior: "smooth"})}>{item.question}</Link></li>
        );
        let answers = form.map((item) => {
            return (
                <div ref={item.myItemRef}>
                    <p>{item.question}</p>
                    <p>{item.answer}</p>
                </div>
            );
        });

        return (
            <div className="page">
                <Container>
                    <h3 className="title2">О проекте</h3>
                    <p>Roomie – возможность быстрого и качественного поиска сожителей с использованием минимальных усилий.</p>
                    <ul>
                        {questions}
                    </ul>
                    <ul>{answers}</ul>
                </Container>
            </div>
        );
    }
}