// General.js

import React, { Component } from 'react';

class General extends Component {
    constructor() {
        super();
        
        this.state = {
            userName: '',
            title: '',
            email: '',
            phone: '',
        };
    }

    handleUserName = (e) => {
        this.setState({
            userName: e.target.value
        });
    };

    handleTitle = (e) => {
        this.setState({
            title: e.target.value
        });
    };

    handlePhone = (e) => {
        this.setState({
            phone: e.target.value
        });
    };

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    };


    render() {
        const { userName, title, email, phone } = this.state;

        return(
           <div>
                <input 
                    onChange={this.handleUserName}
                    value={userName}
                    type='text'
                    id='userName'
                    placeholder='John Doe'
                />
                <input
                    onChange={this.handleTitle}
                    value={title}
                    type='text'
                    id='title'
                    placeholder='Employee'
                />
                <input
                    onChange={this.handlePhone}
                    value={phone}
                    type='text'
                    id='phone'
                    placeholder='(123)-456-7890'
                />
                <input
                    onChange={this.handleEmail}
                    value={email}
                    type='text'
                    id='email'
                    placeholder='johndoe@website.com'
                />
           </div>
        );
    };
}

export default General;