import React, {Component} from 'react';
import {Container} from "bloomer";
import GroupBlock from "../components/group-block";
import UsersListCollapse from "../components/users-list-collapse";
import "./group.css";
import * as PropTypes from "prop-types";
import PollList from "../components/poll-list";
import {Link} from "react-router-dom";
import LinksBlock from "../components/links-block/links-block";

class GroupPage extends Component {
    state = {
        groupBlockType: "2"
    };

    isClick = () => {
        this.setState({groupBlockType: "3"});
    };

    isMember = () => {
        return this.props.group.members.findIndex(x => x.id==sessionStorage.getItem('id')) > -1;
    };

    isApplicant = () => {
        return this.props.group.applications.findIndex(x => x.id==sessionStorage.getItem('id')) > -1;
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        const elements = [
            {
                id: 1,
                type: "DELETE",
                person: "person1",
                positive: 3,
                negative: 2
            }, {
                id: 2,
                type: "ADD",
                person: "person2",
                positive: 3,
                negative: 7
            }, {
                id: 3,
                type: "DELETE",
                person: "person3",
                positive: 3,
                negative: 4
            }
            ];
        const {groupBlockType} = this.state;
        let {group, groupUpdate} = this.props;
        console.log("group page props ", this.props);
        console.log("group page", group);
        const {name, members, applications, telegramLink, whatsappLink} = group;
        console.log("check", this.isMember());
        return (
            <Container>
                <Link to="/">
                    <div className="previous-page">
                        <div className="previous-page-button"/>
                        <div className="previous-page-text">Назад к списку групп</div>
                    </div>
                </Link>
                <p className="group-name">{name}</p>
                <div className="flex-container">
                     <div style={{"flex-basis": "352px"}}>
                        <div>
                            <GroupBlock type={groupBlockType}
                                        isClick={this.isClick}
                                        groupUpdate={groupUpdate}
                                        group={group}
                                        showMembers={false}
                                        showHeader={false}
                            />
                        </div>
                        <div>
                            <LinksBlock telegramLink={telegramLink} whatsappLink={whatsappLink}/>
                        </div>
                    </div>
                    <div style={{"flex-basis": "737px", "margin-left": "32px", "margin-top": "0px"}}>
                        <UsersListCollapse name="Участники" membersNumber={members.length} usersList={members}/>
                        <UsersListCollapse name="Заявки на участие" membersNumber={applications.length} usersList={applications}/>
                        <PollList name="Опросы" membersNumber={elements.length} pollList={elements} groupUpdate={groupUpdate} group={group}/>
                    </div>
                </div>
                {/*<Columns>*/}
                {/*    <Column isSize="1/3">*/}
                {/*        <GroupBlock type={groupBlockType} isClick={this.isClick} group={group}/>*/}
                {/*    </Column>*/}
                {/*    <Column>*/}
                {/*        <UsersListCollapse name="Участники" membersNumber={group.members.length} usersList={group.members}/>*/}
                {/*        <UsersListCollapse name="Заявки на участие" membersNumber={group.applications.length} usersList={group.applications}/>*/}
                {/*    </Column>*/}
                {/*</Columns>*/}
            </Container>
        );
    }
}

GroupPage.propTypes = {id: PropTypes.any};

export default GroupPage;