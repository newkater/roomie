import React, {Component} from 'react';
import {Box} from "bloomer";
import { withHelpersModifiers  } from 'bloomer';


import UsersListItem from "../users-list-item";
import "./users-list-collapse.css";
import * as PropTypes from "prop-types";

class UsersListCollapse extends Component {
    state = {
        isBoxBottomHidden: true
    };

    render() {
        let {isBoxBottomHidden} = this.state;
        let {name, membersNumber, usersList} = this.props;
        const elements = usersList.map((item) => {
            const id = item.id;
            return (
                <li key={id}>
                    <UsersListItem user={item}/>
                </li>
            );
        });

        return (
            <div>
                <Box className="users-box-style" onClick={() => this.setState({isBoxBottomHidden: !isBoxBottomHidden})}>
                    <div className="collapse-header">
                        <div>{name} ({membersNumber})</div>
                        <div className={ isBoxBottomHidden ? "collapse-dropdown-button collapse-dropdown-button--open" : "collapse-dropdown-button" }
                        />
                    </div>
                </Box>
                <Box className="users-container-style" isHidden={isBoxBottomHidden}>
                    <ul>
                        {elements}
                    </ul>
                </Box>
            </div>
        );
    }
}

UsersListCollapse.propTypes = {
    name: PropTypes.any,
    membersNumber: PropTypes.any,
    usersList: PropTypes.any
};

export default withHelpersModifiers(UsersListCollapse);