import React, { Component } from 'react';
import notfound from './notfound.jpg';
export default class NoMatch extends Component {
    render() {
        return (
            <div className="notfound">
               <img src={notfound} alt="NotFound"/>
            </div>
        );
    }
}