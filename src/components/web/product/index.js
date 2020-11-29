import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Product extends Component {

    render() {
        return (
            <div className="col-md-3 m-wthree">
                <div className="col-m">
                    <Link to="/" data-toggle="modal" data-target="#myModal1" className="offer-img">
                        <img src={this.props.item.imgUrl} className="img-responsive" alt="" />
                        <div className="offer"><p><span>Offer</span></p></div>
                    </Link>
                    <div className="mid-1">
                        <div className="women">
                            <h6><Link to="/product-details">{this.props.item.name}</Link>(1 kg)</h6>
                        </div>
                        <div className="mid-2">
                            <p><label>$2.00</label><em className="item_price">{this.props.item.price}</em></p>
                            <div className="block">
                                <div className="starbox small ghosting"> </div>
                            </div>
                            <div className="clearfix" />
                        </div>
                        <div className="add">
                            <button className="btn btn-danger my-cart-btn my-cart-b ">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}