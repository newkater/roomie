import React, {Component} from "react";
import Poll from "../poll";
import {Box} from "bloomer";
import './poll-list.css';

export default class PollList extends Component {
    state = {
        isBoxBottomHidden: true
    };
    render() {
        let {isBoxBottomHidden} = this.state;
        let {name, membersNumber, pollList} = this.props;
        console.log("PollList elements", pollList);
        const elements = pollList.map((item) => {
            const id = item.id;
            return (
                <li key={id}>
                    <Poll form={item}/>
                </li>
            );
        });

        return (
            <div>
                <Box className="box-style" onClick={() => this.setState({isBoxBottomHidden: !isBoxBottomHidden})}>
                    <div className="collapse-header">
                        <div>{name} ({membersNumber})</div>
                        <div className={ isBoxBottomHidden ? "collapse-dropdown-button collapse-dropdown-button--open" : "collapse-dropdown-button" }
                        />
                    </div>
                </Box>
                <Box className="poll-container-style" isHidden={isBoxBottomHidden}>
                    <ul>
                        {elements}
                    </ul>
                </Box>
            </div>
        );
    }
}