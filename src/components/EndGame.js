import React, { Component } from 'react';
// import Login from './Login'
import { FaRegLaughSquint } from 'react-icons/fa';
import { TiThumbsOk } from 'react-icons/ti';
// import Login from './Login';

export default class EndGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tied: 'You guys tied!',
            playerWin: this.props.winner + ' Won!'
        };
    }

    handleClick = () => {
        this.props.endgame(false);
    }

    handleNewClick = () => {
        this.props.endgame(false);
    }

    render() {
        const { winner } = this.props;
        const { tied, playerWin } = this.state;
        return (
            <div className='wrapper'>
                <div className='screen'>
                    <p>{winner === 'Tied' ? tied : playerWin}
                    </p>
                    {winner === 'Tied' ? <FaRegLaughSquint size="35px" color="#66d9ff" /> : <TiThumbsOk size="35px" color="#66d9ff" />}
                    <button className='btn-submit' onClick={this.handleClick}>
                        Wanna play again?
                    </button>
                    {/* <button className='btn-submit' onClick={this.handleNewClick}>
                        New Game
                  </button> */}
                </div>
            </div>
        )
    }
}