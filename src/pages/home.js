import React, {Component} from 'react';

import GroupBlocks from '../components/group-blocks';
import {Content, Title, Container, Section, Column, Columns} from "bloomer";
import GroupBlock from "../components/group-block";
import PromoBlock from "../components/promo-block";
import './home.css';

class HomePage extends Component {
    state = {
        groupBlockType: "1",
    };



    render() {
        let {groups} = this.props;
        const {groupBlockType} = this.state;
        console.log("home ", groups);
        const groupBlockRef = React.createRef();
        return (
            <Container>
                <div className="home-bg-image home-page">
                    <PromoBlock onAnchorClick={() => groupBlockRef.current.scrollIntoView({behavior: "smooth"})}/>
                </div>
                <h3 id="group-blocks" ref={groupBlockRef} className="title2 title-groups">Найдите подходящую группу</h3>
                <GroupBlocks type={groupBlockType} groups={groups}/>
            </Container>
        );
    }
}

export default HomePage;