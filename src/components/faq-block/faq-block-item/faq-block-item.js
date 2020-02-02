import React, {Component} from "react";
import "./faq-block-item.css";
import { CSSTransition } from "react-transition-group";

export default class FaqBlockItem extends Component {

    state = { showAnswer: false }

    render() {
        const {item} = this.props;
        const {showAnswer} = this.state;
        return(
            <div onClick={() => this.setState({showAnswer: !showAnswer})}>
                <li key={item.id} className="faq-item">
                    <div className="faq-item-question">
                        {item.question}
                        <div className={ showAnswer? "faq-item-control faq-item-control--open" : "faq-item-control" }
                             onClick={() => this.setState({showAnswer: !showAnswer})}>
                        </div>
                    </div>
                    <CSSTransition
                        in={showAnswer}
                        timeout={200}
                        classNames="show-answer"
                        unmountOnExit
                        appear
                    >
                        <div className="faq-item-answer">{item.answer}</div>
                    </CSSTransition>

                </li>
            </div>
        )
    }
}
