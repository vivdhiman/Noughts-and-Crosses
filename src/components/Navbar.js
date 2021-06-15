import React, { Component } from 'react';
import Logo from '../assets/icons/logo.png';
import { ImWink } from 'react-icons/im';

export default class Navbar extends Component {
    render() {
        const { player1, player2, ties, userName1, userName2 } = this.props;
        return (
            <div className='navbar'>
                <div className="logo-title">
                    <div>
                        <img className='logo' src={Logo} alt='logo' />
                    </div>
                    <div className='title'>
                        <h1 className='h1'>O's&X's</h1>
                        <small>Just for fun!! <ImWink color="purple" size="15px" /></small>
                    </div>
                </div>
                <div className='statistics'>
                    <h3 className='winstat'>
                        {userName1} :&nbsp;{player1}
                    </h3>
                    <h3 className='winstat'>
                        {userName2} :&nbsp;{player2}
                    </h3>
                    <h3>
                        Ties :&nbsp;{ties}
                    </h3>
                </div>
            </div>
        )
    }
}