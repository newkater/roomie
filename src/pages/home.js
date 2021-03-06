import React, {Component} from 'react';

import GroupBlocks from '../components/group-blocks';
import {Container, Columns} from "bloomer";
import PromoBlock from "../components/promo-block";
import './home.css';

class HomePage extends Component {
    state = {
        groupBlockType: "1",
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        let {groups, groupUpdate, apply, cancel} = this.props;
        const {groupBlockType} = this.state;
        console.log("home ", groups);
        const groupBlockRef = React.createRef();
        const isAuthorized = sessionStorage.getItem('isAuthorized');
        return (
            <Container>
                <div className="home-bg-image home-page">
                    <PromoBlock onAnchorClick={() => groupBlockRef.current.scrollIntoView({behavior: "smooth"})}/>
                </div>
                {
                    isAuthorized &&
                    <div>
                        <h3 id="group-blocks" ref={groupBlockRef} className="title2 title-groups">Найдите подходящую группу</h3>
                        <Columns isMultiline={true}>
                            <GroupBlocks cancel={cancel} apply={apply} type={groupBlockType} groups={groups} groupUpdate={groupUpdate}/>
                        </Columns>
                    </div>
                }
            </Container>
        );
    }
}

export default HomePage;