import React, {Component, Fragment} from 'react';
import {Container} from "bloomer";
import GroupBlock from "../components/group-block";
import UsersListCollapse from "../components/users-list-collapse";
import "./group.css";
import PollList from "../components/poll-list";
import {Link} from "react-router-dom";
import LinksBlock from "../components/links-block/links-block";
import Data from './../data';

class GroupPage extends Component {
    data = new Data();

    state = {
        groupBlockType: "2",
        group: this.props.group || null,
        loading: false,
        error: false
    };

    isClick = () => {
        this.setState({groupBlockType: "3"});
    };

    isMember = () => {
        if (!this.state.group) {
            return false;
        }
        return this.state.group.members.findIndex(x => x.id==sessionStorage.getItem('id')) > -1;
    };

    isApplicant = () => {
        return this.state.group.applications.findIndex(x => x.id==sessionStorage.getItem('id')) > -1;
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        if (!this.state.group) {
            this.setState({loading: true, error: false});
            this.data.getGroup(this.props.id).then((group) => {this.setState({loading: false, group: group, error: false})})
                .catch((err) => this.setState({error: true, loading:false, group: null}))
        }

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
        const {groupBlockType, group, error, loading} = this.state;
        let {groupUpdate, apply, cancel} = this.props;
        //console.log("group page props ", this.props);
        console.log("group page", group);
        const {name, members, applications, telegramLink, whatsappLink} = group;
        console.log("name group", name);
        console.log("check", this.isMember());
        const arr = applications.map((item) => {return {
            id: item.id,
            type: "ADD",
            person: item.name,
            positive: 0,
            negative: 0
        }});


        return (
            <Container>
                {loading && <div>Loading group</div>}
                {error && <div>Группа не найдена</div>}
                { group &&
                <Fragment>
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
                                            apply={apply}
                                            cancel={cancel}
                                            isClick={this.isClick}
                                            groupUpdate={groupUpdate}
                                            group={group}
                                            showMembers={false}
                                            showHeader={false}
                                />
                            </div>
                            {
                                this.isMember() &&
                                <div>
                                    <LinksBlock telegramLink={telegramLink} whatsappLink={whatsappLink}/>
                                </div>
                            }
                        </div>
                        <div style={{"flex-basis": "737px", "margin-left": "32px", "margin-top": "0px"}}>
                            <UsersListCollapse name="Участники" membersNumber={members.length} usersList={members}/>
                            <UsersListCollapse name="Заявки на участие" membersNumber={applications.length} usersList={applications}/>
                            <PollList name="Опросы" membersNumber={arr.length} pollList={arr} groupUpdate={groupUpdate} group={group}/>
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
                </Fragment>
                }
            </Container>
        );
    }
}

export default GroupPage;