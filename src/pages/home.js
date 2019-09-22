import React, {Component} from 'react';

import GroupBlocks from '../components/group-blocks';
import {Content, Title, Container, Section, Column, Columns} from "bloomer";
import GroupBlock from "../components/group-block";
import HomeMain from "../components/home-main";

class HomePage extends Component {
    state = {
        groupBlockType: "1"
    };


    render() {
        let {groups} = this.props;
        const {groupBlockType} = this.state;
        console.log("home ", groups);
        return (
            <Container>
                <HomeMain/>
                <h3 className="title2 title-groups">Найдите подходящую группу</h3>
                <GroupBlocks type={groupBlockType} groups={groups}/>
            </Container>
        );
    }
}

export default HomePage;