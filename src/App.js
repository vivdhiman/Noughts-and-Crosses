import React from 'react';
import Login from './components/Login';
import EndGame from './components/EndGame';
import Game from './components/Game';
import Navbar from './components/Navbar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ties: 0,
      userName1: "Player 1",
      userName2: "Player 2",
      winner: "",
      player1: 0,
      player2: 0,
      showLogin: true,
      showEndgame: false,
    }
  };

  handleScore = (player) => {
    const { userName1, userName2 } = this.state;
    let winner;
    if (player === "player1") {
      winner = userName1;
    } else if (player === "player2") {
      winner = userName2;
    } else {
      winner = "Tied";
    }
    this.setState({
      [player]: this.state[player] + 1,
      winner: winner,
    })
  }

  handleName = (player1, player2) => {
    this.setState({
      userName1: player1,
      userName2: player2,
      showLogin: false
    })
  }

  handleEndgame = (input) => {
    this.setState({
      showEndgame: input
    })
  }

  render() {
    const {
      userName1,
      userName2,
      winner,
      player1,
      player2,
      ties,
      showLogin,
      showEndgame,
    } = this.state
    return (
      <div className="App">
        <Navbar
          ties={ties}
          player1={player1}
          player2={player2}
          userName1={userName1}
          userName2={userName2} />
        {showEndgame ? (
          <EndGame
            winner={winner}
            endgame={this.handleEndgame} />
        ) : null}
        {showLogin ? <Login
          names={this.handleName} /> : null}
        <Game
          userName1={userName1}
          userName2={userName2}
          endgame={this.handleEndgame}
          handleScore={this.handleScore}
        />
      </div>
    );
  }
}