import React, { Component } from 'react'
import Carousel from './Carousel';
import Kitchenitem from './kitechen-info';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <Kitchenitem />
            </div>
        )
    }
}
