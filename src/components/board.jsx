import React, { Component } from "react";

import UniqId from "uniqid";
import Card from "./card";
import CreateNew from "./createNew";

export class Board extends Component {
  state = { cards: [] };
  handleNewCard = (title, content) => {
    const cardObj = { cardTitle: title, cardContent: content };
    const { cards } = this.state;
    const updatedCards = [...cards, cardObj];
    this.setState({ cards: updatedCards });
  };
  handleDeleteCard = (value) => {
    const { cards } = this.state;
    const filteredCards = cards.filter((el) => el.cardTitle !== value);
    this.setState({ cards: filteredCards });
  };
  render() {
    const { cards } = this.state;
    const { boardTitle } = this.props;
    return (
      <div className="card">
        <div className="card-header text-center">
          <strong>{boardTitle}</strong>
          <CreateNew
            withTitle={true}
            withContent={true}
            itemType="Card"
            handleCreateNew={this.handleNewCard}
          />
        </div>
        <div className="card-body">
          {cards
            ? cards.map((cardItem) => (
                <div key={UniqId()} className="card m-1">
                  <Card {...cardItem} />
                  <button
                    onClick={() => this.handleDeleteCard(cardItem.cardTitle)}
                    type="button"
                    className="btn btn-secondary justify-content-end mt-1 mb-1"
                  >
                    <strong>DEL</strong>
                  </button>
                </div>
              ))
            : null}
        </div>
      </div>
    );
  }
}

export default Board;
