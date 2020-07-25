import React from 'react'
import { Link } from 'react-router-dom';
import './kitechen.css';
import { connect } from 'react-redux';
import Sliderproduct from '../Carousel/sliderproduct';
import { addToCart } from '../../../../actions/productActions';

const Kitchenitem = (props) => {
    return (
        <div className="content-top">
            <div className="container ">
                <div className="spec ">
                    <h3>Special Offers</h3>
                    <div className="ser-t">
                        <b />
                        <span><i /></span>
                        <b className="line" />
                    </div>
                </div>

                <div className="tab-pane active text-style" id="tab1">
                    <div className=" con-w3l">
                        <div className="col-md-3 m-wthree">
                            <div className="col-m">
                                <Link to="/" data-toggle="modal" data-target="#myModal1" className="offer-img">
                                    <img src="/images/of.png" className="img-responsive" alt="" />
                                    <div className="offer"><p><span>Offer</span></p></div>
                                </Link>
                                <div className="mid-1">
                                    <div className="women">
                                        <h6><Link to="/product-details">Moong</Link>(1 kg)</h6>
                                    </div>
                                    <div className="mid-2">
                                        <p><label>$2.00</label><em className="item_price">$1.50</em></p>
                                        <div className="block">
                                            <div className="starbox small ghosting"> </div>
                                        </div>
                                        <div className="clearfix" />
                                    </div>
                                    <div className="add">
                                        <button className="btn btn-danger my-cart-btn my-cart-b " onClick={() => props.addToCart("moong")}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 m-wthree">
                            <div className="col-m">
                                <Link to="#" data-toggle="modal" data-target="#myModal2" className="offer-img">
                                    <img src="images/of1.png" className="img-responsive" alt="" />
                                    <div className="offer"><p><span>Offer</span></p></div>
                                </Link>
                                <div className="mid-1">
                                    <div className="women">
                                        <h6><Link to="/product-details">Sunflower Oil</Link>(5 kg)</h6>
                                    </div>
                                    <div className="mid-2">
                                        <p><label>$10.00</label><em className="item_price">$9.00</em></p>
                                        <div className="block">
                                            <div className="starbox small ghosting"> </div>
                                        </div>
                                        <div className="clearfix" />
                                    </div>
                                    <div className="add">
                                        <button className="btn btn-danger my-cart-btn my-cart-b" onClick={() => props.addToCart("sunflower")}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 m-wthree">
                            <div className="col-m">
                                <Link to="#" data-toggle="modal" data-target="#myModal3" className="offer-img">
                                    <img src="images/of2.png" className="img-responsive" alt="" />
                                    <div className="offer"><p><span>Offer</span></p></div>
                                </Link>
                                <div className="mid-1">
                                    <div className="women">
                                        <h6><Link to="/product-details">Kabuli Chana</Link>(1 kg)</h6>
                                    </div>
                                    <div className="mid-2">
                                        <p><label>$3.00</label><em className="item_price">$2.00</em></p>
                                        <div className="block">
                                            <div className="starbox small ghosting"> </div>
                                        </div>
                                        <div className="clearfix" />
                                    </div>
                                    <div className="add">
                                        <button className="btn btn-danger my-cart-btn my-cart-b" onClick={() => props.addToCart("kabuli")}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 m-wthree">
                            <div className="col-m">
                                <Link to="#" data-toggle="modal" data-target="#myModal4" className="offer-img">
                                    <img src="images/of3.png" className="img-responsive" alt="" />
                                    <div className="offer"><p><span>Offer</span></p></div>
                                </Link>
                                <div className="mid-1">
                                    <div className="women">
                                        <h6><Link to="/product-details">Soya Chunks</Link>(1 kg)</h6>
                                    </div>
                                    <div className="mid-2">
                                        <p><label>$4.00</label><em className="item_price">$3.50</em></p>
                                        <div className="block">
                                            <div className="starbox small ghosting"> </div>
                                        </div>
                                        <div className="clearfix" />
                                    </div>
                                    <div className="add">
                                        <button className="btn btn-danger my-cart-btn my-cart-b" onClick={() => props.addToCart("soyachunks")}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix" />
                    </div>
                </div>


                {/*content*/}
                <div className="content-mid">
                    <div className="container">
                        <div className="col-md-4 m-w3ls">
                            <div className="col-md1 ">
                                <Link to="/">
                                    <img src="images/co1.jpg" className="img-responsive img" alt="" />
                                    <div className="big-sa">
                                        <h6>New Collections</h6>
                                        <h3>Season<span>ing </span></h3>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 m-w3ls1">
                            <div className="col-md ">
                                <Link to="/">
                                    <img src="images/co.jpg" className="img-responsive img" alt="" />
                                    <div className="big-sale">
                                        <div className="big-sale1">
                                            <h3>Big <span>Sale</span></h3>
                                            <p>It is a long established fact that a reader </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 m-w3ls">
                            <div className="col-md2 ">
                                <Link to="/">
                                    <img src="images/co2.jpg" className="img-responsive img1" alt="" />
                                    <div className="big-sale2">
                                        <h3>Cooking <span>Oil</span></h3>
                                        <p>It is a long established fact that a reader </p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md3 ">
                                <Link to="/">
                                    <img src="images/co3.jpg" className="img-responsive img1" alt="" />
                                    <div className="big-sale3">
                                        <h3>Vegeta<span>bles</span></h3>
                                        <p>It is a long established fact that a reader </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="clearfix" />
                    </div>
                </div>
                {/*content*/}

                {/*content*/}
                <div className="product">
                    <div className="container">
                        <div className="spec ">
                            <h3>Essential Grocery</h3>
                            <div className="ser-t">
                                <b />
                                <span><i /></span>
                                <b className="line" />
                            </div>
                        </div>
                        <div className=" con-w3l">
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal17" className="offer-img">
                                        <img src="images/of16.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/product-details">Moisturiser</Link>(500 g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$7.00</label><em className="item_price">$6.00</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add add-2">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={1} data-name="product 1" data-summary="summary 1" data-price={6.00} data-quantity={1} data-image="images/of16.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal18" className="offer-img">
                                        <img src="images/of17.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/product-details">  Lady Finger</Link>(250 g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$5.00</label><em className="item_price">$4.50</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={1} data-name="product 1" data-summary="summary 1" data-price="4.50" data-quantity={1} data-image="images/of17.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal19" className="offer-img">
                                        <img src="images/of18.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/product-details"> Ribbon</Link>(1 pc)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$4.00</label><em className="item_price">$3.50</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={1} data-name="product 1" data-summary="summary 1" data-price="3.50" data-quantity={1} data-image="images/of18.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal20" className="offer-img">
                                        <img src="images/of19.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/product-details">Grapes</Link>(500 g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$1.00</label><em className="item_price">$0.80</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={1} data-name="product 1" data-summary="summary 1" data-price="0.80" data-quantity={1} data-image="images/of19.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal21" className="offer-img">
                                        <img src="images/of20.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/product-details">Clips</Link>(1 pack)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$7.00</label><em className="item_price">$6.00</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={1} data-name="product 1" data-summary="summary 1" data-price={6.00} data-quantity={1} data-image="images/of20.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal22" className="offer-img">
                                        <img src="images/of21.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/product-details">Conditioner</Link>(250 g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$5.00</label><em className="item_price">$4.50</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={1} data-name="product 1" data-summary="summary 1" data-price="4.50" data-quantity={1} data-image="images/of21.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal23" className="offer-img">
                                        <img src="images/of22.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/product-details">Cleaner</Link>(250 kg)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$4.00</label><em className="item_price">$3.50</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={1} data-name="product 1" data-summary="summary 1" data-price="3.50" data-quantity={1} data-image="images/of22.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal24" className="offer-img">
                                        <img src="images/of23.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/product-details">Gel</Link>(150 g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$1.00</label><em className="item_price">$0.80</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={1} data-name="product 1" data-summary="summary 1" data-price="0.80" data-quantity={1} data-image="images/of23.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>

                {/* another slider  */}
                <div className="tab-pane active text-style" id="tab1" style={{ paddingBottom: '3rem' }}>
                    <div className="spec ">
                        <h3>Best Offers View</h3>
                        <div className="ser-t">
                            <b />
                            <span><i /></span>
                            <b className="line" />
                        </div>
                    </div>
                    <div className="slick-slider slick-initialized slider-bk" dir="ltr">
                        <Sliderproduct state={props}/>
                        <div className="clearfix" />
                    </div>
                </div>
                {/* End slider */}

            </div>
        </div >

    )
}

export default connect(null, { addToCart })(Kitchenitem);