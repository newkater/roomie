import React, {Fragment} from 'react';
import {Column} from "bloomer";

import GroupBlock from '../group-block';

const GroupBlocks = ({groups, type, groupUpdate, adStyle, apply, cancel}) => {
    //console.log(groups);
    const groupsList = groups.map((el) => {
        //console.log("group-blocks", el);
        return (
            <Column isSize={'1/3'} >
                <GroupBlock key={el.id} cancel={cancel} apply={apply} type={type} group={el} groupUpdate={groupUpdate} adStyle={adStyle}/>
            </Column>
        );
    });
    return (
        <Fragment>
            {groupsList}
        </Fragment>
    );
};

export default GroupBlocks;