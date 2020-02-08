import React, {Component} from 'react'
import {Box, Button} from "bloomer";
import {Link} from 'react-router-dom';
import "./group-block.css";
import Avatar from "../avatar";
import camera from './../../images/camera-black.svg';

const boxStyle = {
    background: "#FFFFFF",
    boxShadow: "0px 0px 48px rgba(0, 0, 0, 0.05)",
    borderRadius: "8px",
    width: "352px",
    padding: "36px 24px"
};

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

const plus = (num) => {
    return(
        <div className="group-block-plus">
            +{num}
        </div>
    )
}

const membersList = (members) => {
    const firstMembers = members.slice(0, 3);
    return(
        <div className="group-block-members">
            {firstMembers.map(member => <Avatar size={64} image={member.photo || camera}/>)}
            {(members.length === 4) && <Avatar size={64} image={members[3].photo || camera}/>}
            {(members.length > 4) && plus(members.length - 3)}
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
};

export default class GroupBlock extends Component {

    state = {
        groupBlockType: this.props.type,
        id: this.props.group.id,
        name: this.props.group.name,
        city: this.props.group.city,
        groupInfo: this.props.group.groupInfo,
        memberNumber: this.props.group.memberNumber,
        peopleNumber: this.props.group.peopleNumber,
        rentalPeriod: this.props.group.rentalPeriod,
        free: this.props.group.free,
        members: this.props.group.members,
        applications: this.props.group.applications,
        polls: this.props.group.polls
    };

    addApplication = () => {
        this.setState({groupBlockType: "3"});
        this.setState({applications: ()=>[...this.state.applications, {
                id: sessionStorage.getItem('id'),
                name: sessionStorage.getItem('name'),
                age: undefined,
                photo: sessionStorage.getItem('photo'),
                userCity: undefined,
                userInfo: undefined
            }]});
        this.handleSubmit();
    };

    deleteApplication = () => {
        this.setState({groupBlockType: "1"});
        let array = [...this.state.applications];
        const index = Number(sessionStorage.getItem('id'));
        array.splice(index, 1);
        this.setState({applications: array});
        this.handleSubmit();
    };

    handleSubmit = () => {
        const {groupUpdate} = this.props;
        //console.log("update group props", this.props);
        //event.preventDefault();
        console.log("Submit", this.state);
        groupUpdate(
            {
                email: sessionStorage.getItem('email'),
                password: sessionStorage.getItem('password'),
                id: this.state.id,
                name: this.state.name,
                city: this.state.city,
                groupInfo: this.state.groupInfo,
                memberNumber: this.state.memberNumber,
                peopleNumber: this.state.peopleNumber,
                rentalPeriod: this.state.rentalPeriod,
                free: this.state.free,
                members: this.state.members,
                applications: this.state.applications,
                polls: this.state.polls
            });
        //window.location.reload();
    };

    render() {
        let {
            type,
            isClick,
            group,
            showHeader,
            showAbout,
            showInfo,
            showMembers,
            user
        } = this.props;
        const {id, name, city, rentalPeriod, members, peopleNumber, free, groupInfo} = group;
        type = this.state.groupBlockType;
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
                        showMembers && membersList(members)
                    }
                    {
                        showInfo &&
                        <div className="group-block-info">
                            {(rentalPeriod === 1) && infoItem("Период аренды", "1 мес.")}
                            {(rentalPeriod === 3) && infoItem("Период аренды", "3 мес.")}
                            {(rentalPeriod === 6) && infoItem("Период аренды", "6 мес.")}
                            {(rentalPeriod === 9) && infoItem("Период аренды", "9 мес.")}
                            {(rentalPeriod === 12) && infoItem("Период аренды", "1 год")}
                            {(peopleNumber === 2) && infoItem("Всего", "2 места")}
                            {(peopleNumber === 3) && infoItem("Всего", "3 места")}
                            {(peopleNumber === 4) && infoItem("Всего", "4 места")}
                            {(peopleNumber === 5) && infoItem("Всего", "5 мест")}
                            {(peopleNumber === 6) && infoItem("Всего", "6 мест")}
                            {(free === 0) && infoItem("Осталось", "0 мест")}
                            {(free === 1) && infoItem("Осталось", "1 место")}
                            {(free === 2) && infoItem("Осталось", "2 места")}
                            {(free === 3) && infoItem("Осталось", "3 места")}
                            {(free === 4) && infoItem("Осталось", "4 места")}
                            {(free === 5) && infoItem("Осталось", "5 мест")}
                        </div>
                    }

                    {
                        (type === "1") &&
                        <footer className="group-block-controls">
                            <Button style={buttonStyle1} onClick={this.addApplication}>Подать заявку</Button>
                        </footer>
                    }

                    {
                        (type === "2") &&
                        <footer className="group-block-controls">
                            <Button disabled>Заявка подана</Button>
                            <Button style={buttonStyle} onClick={this.deleteApplication}>Отменить</Button>
                        </footer>
                    }

                    {
                        (type === "3") &&
                        <footer className="group-block-controls">
                            <div style={buttonStyle2}>Ваша заявка на рассмотрении!</div>
                        </footer>
                    }

                    {
                        (type === "4") &&
                        <footer className="group-block-controls">
                            <div style={buttonStyle2}>Вы состоите в группе.</div>
                        </footer>
                    }


                </Box>

            </div>

        );
    }
}

GroupBlock.defaultProps = {showHeader: true, showAbout: true, showInfo: true, showMembers: true}
