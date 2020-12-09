import React, { Component } from "react";

import CreateNew from "./createNew";
import Board from "./board";

export default class Project extends Component {
  state = {
    boards: [],
  };
  handleNewBoard = (title = "") => {
    const { boards } = this.state;
    const newProjectBoard = [...boards, title];
    this.setState({ boards: newProjectBoard });
  };
  render() {
    const { boards } = this.state;
    const { projectName } = this.props;
    return (
      <>
        <div className="card">
          {projectName ? (
            <>
              <div className="row text-center p-2">
                <strong className="col justify-content-start">
                  {projectName}
                </strong>
                <CreateNew
                  className="col justify-content-end"
                  withTitle={true}
                  withContent={false}
                  itemType="Board"
                  handleCreateNew={this.handleNewBoard}
                />
              </div>
              <div className="card-group m-2 rounded">
                {boards
                  ? boards.map((boardItem) => (
                      <Board boardTitle={boardItem}></Board>
                    ))
                  : null}
              </div>
            </>
          ) : null}
        </div>
      </>
    );
  }
}
