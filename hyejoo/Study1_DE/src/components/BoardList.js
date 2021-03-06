import React, { Component } from "react";
import BoardListItemGroup from "./BoardListItemGroup";
import "./BoardList.scss";

class BoardList extends Component {
    render () {
        const { groupList } = this.props;
        const groupLists = groupList.map((group, index) => {
            const { groupName, boardList }= group; 
            return (
                <BoardListItemGroup
                    key={index}
                    groupName={groupName}
                    boardList={boardList}
                />
            );

        });
        return <div className="board-list">{groupLists}</div>;
    }
}
export default BoardList;