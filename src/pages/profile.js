import React, {Component} from 'react'

import ProfileBlock from '../components/profile-block';
import GroupBlocks from "../components/group-blocks";
import GroupBlock from "../components/group-block";
import {Column, Columns, Container} from "bloomer";
import ConfettiBlock from "../components/confetti-block";

const adStyle = {
    height: "450px"
};

const groupsList = (groups, type) => {
    if (groups == undefined) return '';
    return groups.map((el) => {
        console.log("profile-grouplist", el);
        return (
            <Column isSize={'1/3'} >
                <GroupBlock className="profile-group-block" type={type} group={el} adStyle={adStyle}/>
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
        window.scrollTo(0, 0)
        this.setState({loading: true});
        this.props.getUser({id: this.props.id})
            .then(user =>  this.setState({user: user, loading: false}));
    }

    render() {
        const {groupBlockType, user} = this.state;
        const {userUpdate, countries, userDelete, groupUpdate, languages, almatyUniversities, apply, cancel} = this.props;
        let groups = this.state.user.groups;
        const isUser = (sessionStorage.getItem('id') == user.id)
        console.log("profile page  ", this.state.user.groups);
        return (
            <div className="page">
                <Container>
                    {this.state.loading ? <div>Loading ...</div> : <ProfileBlock userDelete={userDelete} userUpdate = {userUpdate} user={user} countries={countries} languages={languages} almatyUniversities={almatyUniversities}/>}

                    {
                        isUser &&
                        <div>
                            <h3 className="title2 title-groups">Мои группы</h3>

                            <Columns isMultiline={true}>
                                <Column isSize={'1/3'} >
                                    <ConfettiBlock/>
                                </Column>
                                {groups!=undefined && <GroupBlocks cancel={cancel} apply={apply} adStyle={adStyle} type={groupBlockType} groups={groups} groupUpdate={groupUpdate}/>}
                            </Columns>
                        </div>
                    }
                </Container>
            </div>
        );
    }
}

export default ProfilePage;