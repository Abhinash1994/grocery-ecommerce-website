import React, { Component } from 'react'
import Carousel from './Carousel';
import Kitchenitem from './kitechen-info';
import Product from '../product';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products:[
                {
                    id: "1",
                    name: 'Moong',
                    price: 1.50,
                    imgUrl: 'images/of.png'
                },
                {
                    id: "2",
                    name: 'Sunflower oil',
                    price: 9.00,
                    imgUrl: 'images/of1.png'
                },
                {
                    id: "3",
                    name: 'Kabuli Chana',
                    price: 3.00,
                    imgUrl: 'images/of2.png'
                }
            ],
        };
    }

    render() {

        const renderProduct = this.state.products.map(product => (
            <Product item={product}/>
        ));

        return (
            <div>
            
                <Carousel />
                <div>
                {renderProduct}
                </div>
                <Kitchenitem />

            </div>
        )
    }
}
