import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player1: '',
            player2: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = (event) => {
        let player = event.target.id;
        this.setState({
            [player]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { player1, player2 } = this.state;
        this.props.names(player1, player2)
    }

    render() {
        return (
            <div className='wrapper'>
                <div className='screen'>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input
                                className='input'
                                required
                                type='text'
                                id='player1'
                                placeholder='Player 1'
                                value={this.state.value}
                                onChange={this.handleInputChange} />

                            <input
                                className='input'
                                required
                                type='text'
                                id='player2'
                                placeholder='Player 2'
                                value={this.state.value}
                                onChange={this.handleInputChange} />
                            <small >Player 1 & 2 will have X & O respectively </small>
                        </div>

                        <button
                            type="submit"
                            className='btn-submit'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}