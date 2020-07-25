import React, { Component } from 'react'
import { Grid, Paper } from '@material-ui/core/';
import Summarycart from './summarycart';
import { connect } from 'react-redux';
import { productQuantity, clearProduct } from '../../../actions/productQuantity'
import { Link } from 'react-router-dom';

class Checkout extends Component {
    render() {
        return (
            <div>
                <header className="header1 header1--white-mode">
                    <div className="header1-item header1-item--checkout-promise display--none@mobile">
                        <div className="checkout-promise-item checkout-promise-item--replacement-guarantee">100% Replacement Guarantee</div>
                        <div className="checkout-promise-item checkout-promise-item--genuine-products">100% Genuine Products</div>
                        <div className="checkout-promise-item checkout-promise-item--secure-payments">Secure Payments</div>
                    </div>
                </header>
                <Grid container>
                    <Grid item md={2} xl={2} lg={2}></Grid>
                    <Grid item xs={12} sm={12} md={12} xl={8} lg={8}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={12} md={12} xl={8} lg={8}>
                                <Paper className="summary_bottom_size">
                                    <div className="checkout-step checkout-step--active">
                                        <h3 className="_1fM65H _2RMAtd"><span className="_1Tmvyj">1</span><span className="_1_m52b">Login or Signup</span></h3>
                                    </div>
                                    <Grid container className="_30BGxP">
                                        <Grid item xs={12} sm={12} md={12} xl={7} lg={7} className="login_bk_sk">
                                            <form>
                                                <div className="checkout-login__msg">We need your phone/email so that we can update you about your order.</div>
                                                <div className="login-phone">
                                                    <input type="text" className="login-phone__input input" data-test-id="phone-no-text-box" placeholder="Enter Email/Mobile Number" />
                                                    <input type="password" className="login-phone__input input" data-test-id="phone-no-text-box" placeholder="Enter Password" />
                                                    <div className="_3VM3wx">
                                                        By continuing, you agree to janakpurshop's
                                                    <Link className="_1eS5je" target="_blank" to="/term-and-condition">Terms of Use</Link> and
                                                    <Link className="_1eS5je" target="_blank" to="/privacy-and-policy"> Privacy Policy</Link>.
                                                </div>
                                                </div>
                                                <div className="_1-GI4s">
                                                    <button className="_2AkmmA T7K48m _7UHT_c" type="submit">
                                                        <div className="_2VTdOs _1_qmw3"><svg className="_2zN0mv" viewBox="25 25 50 50">
                                                            <circle stroke="#fff" className="_1VgS7d" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10">
                                                            </circle></svg>
                                                        </div>
                                                        <span>CONTINUE</span>
                                                    </button>
                                                </div>
                                            </form>
                                        </Grid>
                                        <Grid item xl={5} lg={5}></Grid>
                                    </Grid>
                                </Paper>
                                {/* 2nd block address */}
                                <Paper >
                                    <h3 className="_1fM65H _2RMAtd"><span className="_1Tmvyj">2</span><span className="_1_m52b">Delivery Address</span></h3>
                                    <Grid container spacing={4} className="address_bk_checkout ">
                                        <Grid className="address_field_bk" item xs={12} sm={12} md={12} xl={6} lg={6}>
                                            <input type="text" className="login-phone__input input" data-test-id="phone-no-text-box" placeholder="Name" />
                                        </Grid>
                                        <Grid className="address_field_bk" item xs={12} sm={12} md={12} xl={6} lg={6}>
                                            <input type="Number" className="address_field_bk__input input" data-test-id="phone-no-text-box" placeholder="Number" />
                                        </Grid>
                                        <Grid className="address_field_bk" item xs={12} sm={12} md={12} xl={6} lg={6}>
                                            <input type="Number" className="address_field_bk__input input" data-test-id="phone-no-text-box" placeholder="Pincode" />
                                        </Grid>
                                        <Grid className="address_field_bk" item xs={12} sm={12} md={12} xl={6} lg={6}>
                                            <input type="Number" className="address_field_bk__input input" data-test-id="phone-no-text-box" placeholder="Locality" />
                                        </Grid>
                                        <Grid className="address_field_bk" item xs={12} sm={12} md={12} xl={12} lg={12}>
                                            <textarea className="address_field_bk__input input" data-test-id="phone-no-text-box" placeholder="Address(Area and Street)" />
                                        </Grid>
                                        <Grid className="address_field_bk" item xs={12} sm={12} md={12} xl={6} lg={6}>
                                            <input type="text" className="address_field_bk__input input" data-test-id="phone-no-text-box" placeholder="City/District/Town" />
                                        </Grid>
                                        <Grid className="address_field_bk" item xs={12} sm={12} md={12} xl={6} lg={6}>
                                            <input type="text" className="login-phone__input input" data-test-id="phone-no-text-box" placeholder="state" />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <div className="_3XXwRR">
                                                <p className="_2dwzAy">Address Type</p>
                                                <div className="_3qg3HS">
                                                    <div>
                                                        <label htmlFor="HOME" className="_8J-bZE _2tcMoY">
                                                            <input type="radio" className="_2haq-9" name="locationTypeTag" readOnly id="HOME" defaultValue="on" />
                                                            <div className="_6ATDKp" />
                                                            <div className="_2o59RR"><span>Home (All day delivery)</span></div></label>
                                                        <label htmlFor="WORK" className="_8J-bZE _2tcMoY">
                                                            <input type="radio" className="_2haq-9" name="locationTypeTag" readOnly id="WORK" defaultValue="on" />
                                                            <div className="_6ATDKp" />
                                                            <div className="_2o59RR"><span>Work (Delivery between 10 AM - 5 PM)</span></div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="_1qbqu2 uK6xOa">
                                                <button class="_2AkmmA EqjTfe _7UHT_c" type="button">Save and Deliver Here</button>
                                                <button class="_2AkmmA _237M5J" type="button" >Cancel</button>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Paper>
                                {/* 2nd end block address */}
                                <Summarycart />

                            </Grid>
                            <Grid item xs={12} sm={12} md={12} xl={4} lg={4}>
                                <Paper>
                                    <span className="summary_price_cart_details">Price details</span>
                                    <div className="_2twTWD">
                                        <div className="hJYgKM">
                                            <div className="_10vVqD">Price ({this.props.cartProps.cart} item)</div>
                                            <span> ₹{this.props.cartProps.cartPrice}</span>
                                        </div>
                                        <div className="hJYgKM">
                                            <div className="_10vVqD">Delivery Fee</div>
                                            <span><span className="_27kB8M _3Oa-sk">Free</span></span>
                                        </div>
                                        <div className="_3xFQAD">
                                            <div className="hJYgKM">
                                                <div className="_10vVqD">Total Amount</div>
                                                <span>
                                                    <div className="tnAu1u">
                                                        <span > ₹{this.props.cartProps.cartPrice}</span>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="_22vQVX">You will save ₹210 on this order</div>
                                    </div>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} xl={2} lg={2}></Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cartProps: state.cartState
});

export default connect(mapStateToProps, { productQuantity, clearProduct })(Checkout);