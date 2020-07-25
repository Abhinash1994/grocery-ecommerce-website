import React, { Component } from 'react'
import { Grid, Button } from '@material-ui/core';
import Sidebar from '../sidebar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCartNumbers }  from '../../../actions/productActions';
class Mobileheader extends Component {
    render() {
        return (
            <div>
                <Grid container className="header_info">
                    <Grid item xs={2} sm={2} md={2}>
                       <Sidebar />
                    </Grid>
                    <Grid item xs={7} sm={7} md={7}>
                        <div className="logo">
                            <h5><b>T<br />H<br />E</b><span>Big Store</span></h5>
                        </div>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} style={{ textAlign:'-webkit-center'}}>
                    <Link to="/carts">
                        <Button className="cart_item" variant="outlined">
                            <span className="item_count">{this.props.cartProps.cart}</span>
                            <i className="fa fa-shopping-cart my-cart-icon" aria-hidden="true" /><span></span>
                        </Button>
                    </Link>
                    </Grid>
                    {/* <Grid item xs={2} sm={2} md={2}>
                        <Button className="cart_item" variant="outlined">
                            Login
                        </Button>
                    </Grid> */}
                    <Grid item xs={12} sm={12} className="bk_mobile_searchbar">
                        <div className="search-form">
                            <form>
                                <button className="btn search__btn"><i class="fa fa-search" aria-hidden="true"></i></button>
                                <input type="text" name="search" placeholder="Search for Products..." />
                            </form>
                        </div>
                    </Grid>
                </Grid>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cartProps: state.cartState
}); 

export default connect(mapStateToProps, { getCartNumbers })(Mobileheader);