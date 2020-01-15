import React from 'react'
import {Box, Image, Content, Icon, Columns, Column, Notification, Button, Control} from "bloomer";
import {Link} from 'react-router-dom';
import "./group-block.css";
import Avatar from "../avatar";
import user2 from "./../../images/user2.png"
import user3 from "./../../images/user3.png"
import user4 from "./../../images/user4.png"


const boxStyle = {
    background: "#FFFFFF",
    boxShadow: "0px 0px 48px rgba(0, 0, 0, 0.05)",
    borderRadius: "8px",
    width: "352px",
    padding: "36px 24px"
}

const buttonStyle = {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "18px",
    color: "#0019FF"
}

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
}

const buttonStyle2 = {
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "21px",
    textalign: "center",
    letterSpacing: "0.25px",

    color: "#C2C2C2"
}

const membersList = () => {
    return(
        <div className="group-block-members">
            <Avatar size={64} image={user2}/>
            <Avatar size={64} image={user3}/>
            <Avatar size={64} image={user4}/>
        </div>
    )
};

const infoItem = (title, value) => {
    return (
        <div className="group-block-info-item">
            <div className="group-block-info-title">
                {title}
            </div>
            <div className="group-block-info-value">
                {value}
            </div>
        </div>
    )
}


const GroupBlock = (
    {
        type,
        isClick,
        group,
        showHeader = true,
        showAbout = true,
        showInfo = true,
        showMembers = true
    }) => {
    const {id, name, city, rentalPeriod, peopleNumber, free, groupInfo} = group;
    return (
        <div>
            <Box style={boxStyle} className="group-block">
                {
                    showHeader &&
                    <header className="group-block-header">
                        <h3 className="group-block-title"><Link to={`/group/${id}`}>{name}</Link></h3>
                        <span className="group-block-city">{city}</span>
                        <Link to={`/group/${id}`}>
                            <div className="arrow-right"/>
                        </Link>
                    </header>
                }
                {
                    showAbout &&
                    <div className="group-block-about">
                        <p>"{groupInfo}"</p>
                    </div>
                }
                {
                    showMembers && membersList()
                }
                {
                    showInfo &&
                    <div className="group-block-info">
                        {(rentalPeriod===1) && infoItem("Период аренды", "1 мес.")}
                        {(rentalPeriod===3) && infoItem("Период аренды", "3 мес.")}
                        {(rentalPeriod===6) && infoItem("Период аренды", "6 мес.")}
                        {(rentalPeriod===9) && infoItem("Период аренды", "9 мес.")}
                        {(rentalPeriod===12) && infoItem("Период аренды", "1 год")}
                        {(peopleNumber===2) && infoItem("Всего", "2 места")}
                        {(peopleNumber===3) && infoItem("Всего", "3 места")}
                        {(peopleNumber===4) && infoItem("Всего", "4 места")}
                        {(peopleNumber===5) && infoItem("Всего", "5 мест")}
                        {(peopleNumber===6) && infoItem("Всего", "6 мест")}
                        {(free===0) && infoItem("Осталось", "0 мест")}
                        {(free===1) && infoItem("Осталось", "1 место")}
                        {(free===2) && infoItem("Осталось", "2 места")}
                        {(free===3) && infoItem("Осталось", "3 места")}
                        {(free===4) && infoItem("Осталось", "4 места")}
                        {(free===5) && infoItem("Осталось", "5 мест")}
                    </div>
                }

                {
                    (type === "1") &&
                    <footer className="group-block-controls">
                        <Button style={buttonStyle1}>Подать заявку</Button>
                    </footer>
                }

                {
                    (type === "2") &&
                    <footer className="group-block-controls">
                        <Button disabled>Заявка подана</Button>
                        <Button style={buttonStyle}>Отменить</Button>
                    </footer>
                }

                {
                    (type === "3") &&
                    <footer className="group-block-controls">
                        <div style={buttonStyle2}>Ваша заявка на рассмотрении!</div>
                    </footer>
                }


            </Box>

        </div>

    );
};

export default GroupBlock;
