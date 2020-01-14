import React, {Component} from "react";
import {Box, Button} from "bloomer";
import {Link} from "react-router-dom";

import { ReactComponent as Confetti } from './../../images/confetti.svg';
import './confetti-block.css';

const boxStyle = {
    background: "#FFFFFF",
    boxShadow: "0px 0px 48px rgba(0, 0, 0, 0.05)",
    borderRadius: "8px",
    width: "352px",
    padding: "36px 24px"
};

const buttonStyle1 = {
    display: "flex",
    background: "#001AFF",
    borderRadius: "4px",
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "16px",
    textAlign: "center",
    letterSpacing: "0.25px",
    width: "90%",
    height: "50px",

    color: "#FFFFFF"
};

export default class ConfettiBlock extends Component {
    render() {
        return (
            <div>
                <Box style={boxStyle} className="confetti-block">
                    <header>
                        <div className="confetti-title">Не нашли подходящей для Вас группы?</div>
                        <div className="confetti-title-afterword">Не беда, Вы можете создать свою</div>
                    </header>
                    <Confetti className="confetti"/>
                    <footer className="confetti-block-controls">
                        <Button style={buttonStyle1} href="./../../create-group">Создать группу</Button>
                    </footer>
                </Box>
            </div>
        );
    }
}