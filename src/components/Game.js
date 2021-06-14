import React, { Component } from 'react';
import Board from "./Board"

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player1: true,
            player2: false,
            check: true
        };
    }
    handleTurn = (firstPlayer, firstBoolean, secondPlayer, secondBoolean) => {
        this.setState({
            [firstPlayer]: firstBoolean,
            [secondPlayer]: secondBoolean
        })
    }

    render() {
        const { player1, player2 } = this.state;
        const { userName1, userName2, endgame } = this.props;

        return (
            <div className="game">
                <p className='turn-text'>Its {player1 ? userName1 : userName2}'s Turn</p>
                <Board
                    turn={this.handleTurn}
                    player1={player1}
                    player2={player2}
                    handleScore={this.props.handleScore}
                    endgame={endgame} />
            </div >
        )
    }
}