import React, {Component} from "react";
import Poll from "../poll";
import {Box} from "bloomer";

const containerStyle = {
    marginTop: "-15px",
    zIndex: "10"
};

const boxStyle = {
    zIndex: "100"
};

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
                <Box style={boxStyle} onClick={() => this.setState({isBoxBottomHidden: !isBoxBottomHidden})}>
                    <div className="collapse-header">
                        <div>{name} ({membersNumber})</div>
                        <div className={ isBoxBottomHidden ? "collapse-dropdown-button collapse-dropdown-button--open" : "collapse-dropdown-button" }
                        />
                    </div>
                </Box>
                <Box style={containerStyle} isHidden={isBoxBottomHidden}>
                    <ul>
                        {elements}
                    </ul>
                </Box>
            </div>
        );
    }
}