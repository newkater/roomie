import React, {Component} from 'react'
import {Container} from "bloomer";
import FaqBlock from "../components/faq-block";
import * as PropTypes from "prop-types";

class FAQPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        let {questions} = this.props;

        return (
            <div className="page">
                <Container>
                    <h3 className="title2">Часто задаваемые вопросы</h3>
                    {questions && <FaqBlock questions={questions}/>}
                </Container>
            </div>
        );
    }
}

FAQPage.propTypes = {questions: PropTypes.any}

export default FAQPage;