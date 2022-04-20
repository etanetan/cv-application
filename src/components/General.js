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

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    };

    render() {
        const { userName, title, email, phone } = this.state;

        return(
           <div>
                <input 
                    onChange={this.handleChange}
                    value={userName}
                    type='text'
                    name='userName'
                    id='userName'
                    placeholder='John Doe'
                />
                <input
                    onChange={this.handleChange}
                    value={title}
                    type='text'
                    name='title'
                    id='title'
                    placeholder='Employee'
                />
                <input
                    onChange={this.handleChange}
                    value={phone}
                    type='text'
                    name='phone'
                    id='phone'
                    placeholder='(123)-456-7890'
                />
                <input
                    onChange={this.handleChange}
                    value={email}
                    type='text'
                    name='email'
                    id='email'
                    placeholder='johndoe@website.com'
                />
           </div>
        );
    };
}

export default General;