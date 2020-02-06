import React, {Component} from 'react';
import {Box, Image} from "bloomer";
import {Link} from "react-router-dom";
import telegram from "./../../images/telegram.svg"
import whatsapp from "./../../images/whatsapp.svg"
import './links-block.css'

const boxStyle = {
    background: "#FFFFFF",
    boxShadow: "0px 0px 48px rgba(0, 0, 0, 0.05)",
    borderRadius: "8px",
    width: "352px",
    padding: "36px 24px"
};

export default class LinksBlock extends Component {
    render() {
        const {telegramLink, whatsappLink} = this.props;
        return (
            <div>
                <Box style={boxStyle} className="group-block">
                    <div className="title">Ссылки на беседы</div>
                    <Link to={telegramLink} className="group-link">
                        <img src={telegram} alt="telegram"/>
                        <div className="link-text">Telegram</div>
                    </Link>
                    <Link to={whatsappLink} className="group-link bottom-link">
                        <img src={whatsapp} alt="whatsapp"/>
                        <div className="link-text">WhatsApp</div>
                    </Link>
                </Box>
            </div>
        );
    }
}