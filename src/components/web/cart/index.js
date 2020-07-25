import React from 'react'
import { Grid, Card } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { productQuantity, clearProduct } from '../../../actions/productQuantity'
import './cart.css';

function Cart({ cartProps, productQuantity, clearProduct }) {
    let productsInCart = [];
    Object.keys(cartProps.products).forEach(function (item) {
        if (cartProps.products[item].inCart) {
            productsInCart.push(cartProps.products[item])
        }
    })
    // console.log("cart number", cartProps)
    return (
        <div>
            <Grid container className="shopping_cart">
                <Grid item md={2} lg={2} xl={2}></Grid>
                <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
                    <div className="spec ">
                        <h3>Shopping Cart</h3>
                        <div className="ser-t">
                            <b />
                            <span><i /></span>
                            <b className="line" />
                        </div>
                    </div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
                            <table className="table ">
                                <tbody><tr>
                                    <th className="t-head head-it ">Products</th>
                                    <th className="t-head">Price</th>
                                    <th className="t-head">Quantity</th>
                                    <th className="t-head">Total</th>
                                </tr>
                                    {
                                        productsInCart.map((product, index) => {
                                            return (
                                                <tr className="cross1" key={index}>
                                                    <td className="t-data ring-in">
                                                        <Link className="at-in"><img src="images/wi1.png" className="img-responsive" alt="" /></Link>
                                                        <div className="sed">
                                                            <h5>{product.name}</h5>
                                                        </div>
                                                        <div className="clearfix"> </div>
                                                        <div className="close2" onClick={() => clearProduct(product.tagName)}> <i className="fa fa-times" aria-hidden="true" /></div>
                                                    </td>
                                                    <td className="t-data">{product.price}</td>
                                                    <td className="t-data"><div className="quantity">
                                                        <div className="quantity-select">
                                                            <div className="entry value-minus" onClick={() => productQuantity('decrease', product.tagName)}>&nbsp;</div>
                                                            <div className="entry value"><span className="span-1">{product.numbers}</span></div>
                                                            <div className="entry value-plus active" onClick={() => productQuantity('increase', product.tagName)}>&nbsp;</div>
                                                        </div>
                                                    </div>
                                                    </td>
                                                    <td className="t-data t-w3l">{product.price * product.numbers}</td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3} className="price_details_bk">
                            <Card>
                                <span className="title">Price details</span>
                                <div class="_2twTWD">
                                    <div class="hJYgKM">
                                        <div class="_10vVqD">Price ({cartProps.cart} item)</div>
                                        <span> ₹{cartProps.cartPrice}</span>
                                    </div>
                                    <div class="hJYgKM">
                                        <div class="_10vVqD">Delivery Fee</div>
                                        <span><span class="_27kB8M _3Oa-sk">Free</span></span>
                                    </div>
                                    <div class="_3xFQAD">
                                        <div class="hJYgKM">
                                            <div class="_10vVqD">Total Amount</div>
                                            <span>
                                                <div class="tnAu1u">
                                                    <span > ₹{cartProps.cartPrice}</span>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="_22vQVX">You will save ₹210 on this order</div>
                                </div>
                                <Link to="/checkout">
                                    <div className="process_checkout_bk">
                                        <span>Proceed to Checkout</span>
                                    </div>
                                </Link>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                {/* <Grid item xs={2} sm={2} md={2} lg={2} xl={2}></Grid> */}
            </Grid>
        </div>

    )
}
const mapStateToProps = (state) => ({
    cartProps: state.cartState
});

export default connect(mapStateToProps, { productQuantity, clearProduct })(Cart);