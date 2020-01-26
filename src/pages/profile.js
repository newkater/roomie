import React, {Component} from 'react'

import ProfileBlock from '../components/profile-block';
import GroupBlocks from "../components/group-blocks";
import GroupBlock from "../components/group-block";
import {Column, Columns, Container} from "bloomer";
import ConfettiBlock from "../components/confetti-block";

const groupsList = (groups, type) => {
    return groups.map((el) => {
        return (
            <Column isSize={'1/3'} >
                <GroupBlock type={type} group={el}/>
            </Column>
        );
    });
};

class ProfilePage extends Component {
    state = {
        loading: false,
        groupBlockType: "4",
        groups: [],
        user: {}
    };

    componentDidMount() {
        this.setState({loading: true});
        this.props.getUser({id: this.props.id})
            .then(user =>  this.setState({user: user, loading: false}));
    }

    render() {
        const {groupBlockType, user} = this.state;
        const {userUpdate, countries} = this.props;
        this.setState(user.groups);
        let groups = groupsList(this.state.groups, "2");
        //console.log("profile page countries ", countries);
        return (
            <div className="page">
                <Container>
                    {this.state.loading ? <div>Loading ...</div> : <ProfileBlock userUpdate = {userUpdate} user={user} countries={countries}/>}

                    <h3 className="title2 title-groups">Мои группы</h3>

                    <Columns isMultiline={true}>
                        <Column isSize={'1/3'} >
                            <ConfettiBlock/>
                        </Column>
                        <GroupBlocks type={groupBlockType} groups={groups}/>
                    </Columns>
                </Container>
            </div>
        );
    }
}

export default ProfilePage;