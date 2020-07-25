import React, { Component } from 'react'

export default class Singleproduct extends Component {
    render() {
        return (
            <div>
                <div className="banner-top">
                    <div className="container">
                        <h3>Product Details</h3>
                        <h4><a href="/">Home</a><label>/</label>product</h4>
                        <div className="clearfix"> </div>
                    </div>
                </div>

                <div className="single">
                    <div className="container">
                        <div className="single-top-main">
                            <div className="col-md-5 single-top">
                                <div className="single-w3agile">
                                    <div id="picture-frame" style={{ position: 'relative', overflow: 'hidden', cursor: 'crosshair' }}>
                                        <img src="images/si.jpg" data-src="images/si-1.jpg" alt="si" className="img-responsive" />
                                        <img src="images/si-1.jpg" alt="si" style={{ position: 'absolute', top: '-12px', left: 0, opacity: 0, width: 700, height: 700, border: 'none', maxWidth: 'none', maxHeight: 'none' }} /></div>
                                </div>
                            </div>
                            <div className="col-md-7 single-top-left ">
                                <div className="single-right">
                                    <h3>Wheat</h3>
                                    <div className="pr-single">
                                        <p className="reduced "><del>$10.00</del>$5.00</p>
                                    </div>
                                    <div className="block block-w3">
                                        <div className="starbox small ghosting"><div className="positioner"><div className="stars"><div className="ghost" style={{ display: 'none', width: '42.5px' }} /><div className="colorbar" style={{ width: '42.5px' }} /><div className="star_holder"><div className="star star-0" /><div className="star star-1" /><div className="star star-2" /><div className="star star-3" /><div className="star star-4" /></div></div></div></div>
                                    </div>
                                    <p className="in-pa"> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                                    <ul className="social-top">
                                        <li><a href="/" className="icon facebook"><i className="fa fa-facebook" aria-hidden="true" /><span /></a></li>
                                        <li><a href="/" className="icon twitter"><i className="fa fa-twitter" aria-hidden="true" /><span /></a></li>
                                        <li><a href="/" className="icon pinterest"><i className="fa fa-pinterest-p" aria-hidden="true" /><span /></a></li>
                                        <li><a href="/" className="icon dribbble"><i className="fa fa-dribbble" aria-hidden="true" /><span /></a></li>
                                    </ul>
                                    <div className="add add-3">
                                        <button className="btn btn-danger my-cart-btn my-cart-b" data-id={1} data-name="Wheat" data-summary="summary 1" data-price={6.00} data-quantity={1} data-image="images/si.jpg">Add to Cart</button>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                </div>

                {/* Similar items */}

                <div className="content-top offer-w3agile">
                    <div className="container ">
                        <div className="spec ">
                            <h3>Special Offers</h3>
                            <div className="ser-t">
                                <b />
                                <span><i /></span>
                                <b className="line" />
                            </div>
                        </div>
                        <div className=" con-w3l wthree-of">
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <a href="/" data-toggle="modal" data-target="#myModal5" className="offer-img">
                                        <img src="images/of4.png" className="img-responsive" alt="ofpic" />
                                        <div className="offer"><p><span>Offer</span></p></div>
                                    </a>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><a href="/">Lays</a>(100 g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$1.00</label><em className="item_price">$0.70</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={5} data-name="Lays" data-summary="summary 5" data-price="0.70" data-quantity={1} data-image="images/of4.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <a href="/" data-toggle="modal" data-target="#myModal6" className="offer-img">
                                        <img src="images/of5.png" className="img-responsive" alt="ofpic" />
                                        <div className="offer"><p><span>Offer</span></p></div>
                                    </a>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><a href="/">Kurkure</a>(100 g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$1.00</label><em className="item_price">$0.70</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={6} data-name="Kurkure" data-summary="summary 6" data-price="0.70" data-quantity={1} data-image="images/of5.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <a href="/" data-toggle="modal" data-target="#myModal7" className="offer-img">
                                        <img src="images/of6.png" className="img-responsive" alt="ofpic" />
                                        <div className="offer"><p><span>Offer</span></p></div>
                                    </a>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><a href="/">Popcorn</a>(250 g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$2.00</label><em className="item_price">$1.00</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={7} data-name="product 1" data-summary="summary 1" data-price={1.00} data-quantity={1} data-image="images/of6.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <a href="/" data-toggle="modal" data-target="#myModal8" className="offer-img">
                                        <img src="images/of7.png" className="img-responsive" alt="ofpic" />
                                        <div className="offer"><p><span>Offer</span></p></div>
                                    </a>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><a href="/"> Nuts</a>(250 g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$4.00</label><em className="item_price">$3.50</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={8} data-name="Nuts" data-summary="summary 8" data-price="3.50" data-quantity={1} data-image="images/of7.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <a href="/" data-toggle="modal" data-target="#myModal9" className="offer-img">
                                        <img src="images/of8.png" className="img-responsive" alt="ofpic" />
                                        <div className="offer"><p><span>Offer</span></p></div>
                                    </a>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><a href="/">Banana</a>(6 pcs)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$2.00</label><em className="item_price">$1.50</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={9} data-name="Banana" data-summary="summary 9" data-price="1.50" data-quantity={1} data-image="images/of8.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <a href="/" data-toggle="modal" data-target="#myModal10" className="offer-img">
                                        <img src="images/of9.png" className="img-responsive" alt="ofpic" />
                                        <div className="offer"><p><span>Offer</span></p></div>
                                    </a>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><a href="/">Onion</a>(1 kg)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$1.00</label><em className="item_price">$0.70</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={10} data-name="Onion" data-summary="summary 10" data-price="0.70" data-quantity={1} data-image="images/of9.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <a href="/" data-toggle="modal" data-target="#myModal11" className="offer-img">
                                        <img src="images/of10.png" className="img-responsive" alt="ofpic" />
                                        <div className="offer"><p><span>Offer</span></p></div>
                                    </a>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><a href="/"> Bitter Gourd</a>(1 kg)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$2.00</label><em className="item_price">$1.00</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={11} data-name="Bitter Gourd" data-summary="summary 11" data-price={1.00} data-quantity={1} data-image="images/of10.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <a href="/" data-toggle="modal" data-target="#myModal12" className="offer-img">
                                        <img src="images/of11.png" className="img-responsive" alt="ofpic" />
                                        <div className="offer"><p><span>Offer</span></p></div>
                                    </a>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><a href="/">Apples</a>(1 kg)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$4.00</label><em className="item_price">$3.50</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={12} data-name="Apples" data-summary="summary 12" data-price="3.50" data-quantity={1} data-image="images/of11.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <a href="/" data-toggle="modal" data-target="#myModal13" className="offer-img">
                                        <img src="images/of12.png" className="img-responsive" alt="ofpic" />
                                        <div className="offer"><p><span>Offer</span></p></div>
                                    </a>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><a href="/">Honey</a>(500g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$7.00</label><em className="item_price">$6.00</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={13} data-name="Honey" data-summary="summary 13" data-price={6.00} data-quantity={1} data-image="images/of12.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <a href="/" data-toggle="modal" data-target="#myModal14" className="offer-img">
                                        <img src="images/of13.png" className="img-responsive" alt="ofpic" />
                                        <div className="offer"><p><span>Offer</span></p></div>
                                    </a>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><a href="/">Chocos</a>(250g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$5.00</label><em className="item_price">$4.50</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={14} data-name="Chocos" data-summary="summary 14" data-price="4.50" data-quantity={1} data-image="images/of13.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <a href="/" data-toggle="modal" data-target="#myModal15" className="offer-img">
                                        <img src="images/of14.png" className="img-responsive" alt="ofpic" />
                                        <div className="offer"><p><span>Offer</span></p></div>
                                    </a>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><a href="/">Oats</a>(1 kg)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$4.00</label><em className="item_price">$3.50</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={15} data-name="Oats" data-summary="summary 15" data-price="3.50" data-quantity={1} data-image="images/of14.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <a href="/" data-toggle="modal" data-target="#myModal16" className="offer-img">
                                        <img src="images/of15.png" className="img-responsive" alt="ofpic" />
                                        <div className="offer"><p><span>Offer</span></p></div>
                                    </a>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><a href="/">Bread</a>(500 g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$1.00</label><em className="item_price">$0.80</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={16} data-name="Bread" data-summary="summary 16" data-price="0.80" data-quantity={1} data-image="images/of15.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
