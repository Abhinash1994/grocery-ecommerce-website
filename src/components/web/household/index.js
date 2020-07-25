import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Household extends Component {
    render() {
        return (
            <div>
                {/* Carousel
      ================================================== */}
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    {/* Indicators */}
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to={0} className="active" />
                        <li data-target="#myCarousel" data-slide-to={1} />
                        <li data-target="#myCarousel" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <Link to="/"><img className="first-slide" src="images/ba2.jpg" alt="First slide" /></Link>
                        </div>
                        <div className="item">
                            <Link to="/"><img className="second-slide " src="images/ba.jpg" alt="Second slide" /></Link>
                        </div>
                        <div className="item">
                            <Link to="/"> <img className="third-slide " src="images/ba1.jpg" alt="Third slide" /></Link>
                        </div>
                    </div>
                </div>{/* /.carousel */}
                {/*content*/}
                <div className="kic-top ">
                    <div className="container ">
                        <div className="kic ">
                            <h3>Popular Categories</h3>
                        </div>
                        <div className="col-md-4 kic-top1">
                            <Link to="/">
                                <img src="images/ki6.jpg" className="img-responsive" alt="" />
                            </Link>
                            <h6>Clips</h6>
                            <p>Nam libero tempore</p>
                        </div>
                        <div className="col-md-4 kic-top1">
                            <Link to="/">
                                <img src="images/ki7.jpg" className="img-responsive" alt="" />
                            </Link>
                            <h6>Cleaning Wear</h6>
                            <p>Nam libero tempore</p>
                        </div>
                        <div className="col-md-4 kic-top1">
                            <Link to="/">
                                <img src="images/ki8.jpg" className="img-responsive" alt="" />
                            </Link>
                            <h6>Toothbrush</h6>
                            <p>Nam libero tempore</p>
                        </div>
                    </div>
                </div>
                {/*content*/}
                <div className="product">
                    <div className="container">
                        <div className="spec ">
                            <h3>Products</h3>
                            <div className="ser-t">
                                <b />
                                <span><i /></span>
                                <b className="line" />
                            </div>
                        </div>
                        <div className=" con-w3l agileinf">
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal1" className="offer-img">
                                        <img src="images/of48.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/">Cat Food</Link>(500 g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$7.00</label><em className="item_price">$6.00</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={48} data-name="Cat Food" data-summary="summary 48" data-price={6.00} data-quantity={1} data-image="images/of48.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal2" className="offer-img">
                                        <img src="images/of49.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/">Safety Pins</Link>(100 g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$5.00</label><em className="item_price">$4.50</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={49} data-name="Safety Pins" data-summary="summary 49" data-price="4.50" data-quantity={1} data-image="images/of49.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal3" className="offer-img">
                                        <img src="images/of50.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/">Agarbatti</Link>(200 g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$4.00</label><em className="item_price">$3.50</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={50} data-name="Agarbatti" data-summary="summary 50" data-price="3.50" data-quantity={1} data-image="images/of50.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal4" className="offer-img">
                                        <img src="images/of51.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/">Candle Set </Link>(1 pc)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$1.00</label><em className="item_price">$0.80</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={51} data-name="Candle Set" data-summary="summary 51" data-price="0.80" data-quantity={1} data-image="images/of51.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal5" className="offer-img">
                                        <img src="images/of52.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/">Dust Bin</Link>(1 pc)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$7.00</label><em className="item_price">$6.00</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={52} data-name="Dust Bin" data-summary="summary 52" data-price={6.00} data-quantity={1} data-image="images/of52.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal6" className="offer-img">
                                        <img src="images/of53.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/"> Hanger</Link>(1 pc)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$5.00</label><em className="item_price">$4.50</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={53} data-name="Hanger" data-summary="summary 53" data-price="4.50" data-quantity={1} data-image="images/of53.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal7" className="offer-img">
                                        <img src="images/of54.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/"> Pet Bowl</Link>(1 pc)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$4.00</label><em className="item_price">$3.50</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={54} data-name="Pet Bowl" data-summary="summary 54" data-price="3.50" data-quantity={1} data-image="images/of54.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal8" className="offer-img">
                                        <img src="images/of55.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/">Tailum</Link>(500 g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$1.00</label><em className="item_price">$0.80</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={55} data-name="Tailum" data-summary="summary 55" data-price="0.80" data-quantity={1} data-image="images/of55.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal9" className="offer-img">
                                        <img src="images/of56.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/"> Container</Link>(1 pc)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$7.00</label><em className="item_price">$6.00</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={56} data-name="Container" data-summary="summary 56" data-price={6.00} data-quantity={1} data-image="images/of56.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal10" className="offer-img">
                                        <img src="images/of57.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/">Scrub Sponge</Link>(100 g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$5.00</label><em className="item_price">$4.50</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={57} data-name="Scrub Sponge" data-summary="summary 57" data-price="4.50" data-quantity={1} data-image="images/of57.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal11" className="offer-img">
                                        <img src="images/of58.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/">Reindeer </Link>(1 pc)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$4.00</label><em className="item_price">$3.50</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={58} data-name="Xmas Reindeer" data-summary="summary 58" data-price="3.50" data-quantity={1} data-image="images/of58.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal12" className="offer-img">
                                        <img src="images/of59.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/"> Cleaner</Link>(1 pc)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$1.00</label><em className="item_price">$0.80</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={59} data-name="Cleaner" data-summary="summary 59" data-price="0.80" data-quantity={1} data-image="images/of59.png">Add to Cart</button>
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
