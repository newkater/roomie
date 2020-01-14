import React, {Component} from 'react'

import ProfileBlock from '../components/profile-block';
import GroupBlocks from "../components/group-blocks";
import GroupBlock from "../components/group-block";
import {Column, Columns, Container} from "bloomer";
import ConfettiBlock from "../components/confetti-block";

class ProfilePage extends Component {
    state = {
        loading: false,
        groupBlockType: "4",
        user: {}
    };

    componentDidMount() {
        this.setState({loading: true});
        this.props.getUser({id: this.props.id})
            .then(user =>  this.setState({user: user, loading: false}));
    }

    render() {
        const {groupBlockType, user} = this.state;
        const groups = user.groups;
        return (
            <div className="page">
                <Container>
                    {this.state.loading ? <div>Loading ...</div> : <ProfileBlock user={user}/>}

                    <h3 className="title2 title-groups">Мои группы</h3>

                    <Columns isMultiline={true}>
                        <Column isSize={'1/3'} >
                            <ConfettiBlock/>
                        </Column>
                        <GroupBlocks type={groupBlockType} groups={[
                            <GroupBlock type={groupBlockType}/>,
                            <GroupBlock type={groupBlockType}/>,
                            <GroupBlock type={groupBlockType}/>]
                        }/>
                    </Columns>
                </Container>
            </div>
        );
    }
}

export default ProfilePage;