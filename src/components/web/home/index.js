import React, { Component } from 'react'
import Carousel from './Carousel';
import Kitchenitem from './kitechen-info';
import Menu from './Menu';
import Product from '../product';
import { Grid } from '@material-ui/core';
import Slider from "react-slick";

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

        var settings = {
            dots: false,
            infinite: true,
            autoplay: false,
            speed: 2000,
            autoplaySpeed: 2000,
            slidesToShow: 2,
            slidesToScroll: 2
        };

        return (
            <div>
            
                <Carousel />
                <Menu />
                <Grid container >
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ marginTop: '9rem' }}>
                <Slider {...settings}>
                {renderProduct}
               </Slider>
                </Grid>
                </Grid>
                <Kitchenitem />

            </div>
        )
    }
}
