import React, {Component} from 'react';
import {Box, Column, Columns, Container, Content, Table} from "bloomer";
import GroupBlock from "../components/group-block";
import UsersListCollapse from "../components/users-list-collapse";
import "./group.css";
import * as PropTypes from "prop-types";

class GroupPage extends Component {
    state = {
        groupBlockType: "2"
    };

    isClick = () => {
        this.setState({groupBlockType: "3"});
    };

    render() {

        const {groupBlockType} = this.state;
        let {group} = this.props;
        console.log("group page props ", this.props);
        console.log("group page", group);
        const {id, name} = group;
        return (
            <Container>
                <p className="group-name">{name}</p>
                <div className="flex-container">
                    <div style={{"flex-basis": "352px"}}>
                        <GroupBlock type={groupBlockType}
                                    isClick={this.isClick}
                                    group={group}
                                    showMembers={false}
                                    showHeader={false}
                        />
                    </div>
                    <div style={{"flex-basis": "737px", "margin-left": "32px", "margin-top": "36px"}}>
                        <UsersListCollapse name="Участники" membersNumber={group.members.length} usersList={group.members}/>
                        <UsersListCollapse name="Заявки на участие" membersNumber={group.applications.length} usersList={group.applications}/>
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