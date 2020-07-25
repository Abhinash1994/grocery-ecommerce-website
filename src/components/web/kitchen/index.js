import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Kitchen extends Component {
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
                            <Link to="/"><img className="first-slide" src="images/ba.jpg" alt="First slide" /></Link>
                        </div>
                        <div className="item">
                            <Link to="/"> <img className="second-slide " src="images/ba1.jpg" alt="Second slide" /></Link>
                        </div>
                        <div className="item">
                            <Link to="/"><img className="third-slide " src="images/ba2.jpg" alt="Third slide" /></Link>
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
                                <img src="images/ki.jpg" className="img-responsive" alt="" />
                            </Link>
                            <h6>Dal</h6>
                            <p>Nam libero tempore</p>
                        </div>
                        <div className="col-md-4 kic-top1">
                            <Link to="/">
                                <img src="images/ki1.jpg" className="img-responsive" alt="" />
                            </Link>
                            <h6>Snacks</h6>
                            <p>Nam libero tempore</p>
                        </div>
                        <div className="col-md-4 kic-top1">
                            <Link to="/">
                                <img src="images/ki2.jpg" className="img-responsive" alt="" />
                            </Link>
                            <h6>Spice</h6>
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
                                        <img src="images/of24.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/">Wheat</Link>(500 g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$7.00</label><em className="item_price">$6.00</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={24} data-name="Wheat" data-summary="summary 24" data-price={6.00} data-quantity={1} data-image="images/of24.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal2" className="offer-img">
                                        <img src="images/of25.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/"> Peach Halves</Link>(250 g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$5.00</label><em className="item_price">$4.50</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={25} data-name="Peach Halves" data-summary="summary 25" data-price="4.50" data-quantity={1} data-image="images/of25.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal3" className="offer-img">
                                        <img src="images/of26.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/">Banana</Link>(1 kg)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$4.00</label><em className="item_price">$3.50</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={26} data-name="Banana" data-summary="summary 26" data-price="3.50" data-quantity={1} data-image="images/of26.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal4" className="offer-img">
                                        <img src="images/of27.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/">Rice</Link>(500 g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$1.00</label><em className="item_price">$0.80</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={27} data-name="Rice" data-summary="summary 27" data-price="0.80" data-quantity={1} data-image="images/of27.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal5" className="offer-img">
                                        <img src="images/of28.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/">Oil</Link>(500 g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$7.00</label><em className="item_price">$6.00</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={28} data-name="Oil" data-summary="summary 28" data-price={6.00} data-quantity={1} data-image="images/of28.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal6" className="offer-img">
                                        <img src="images/of29.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/">Biscuits</Link>(250 g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$5.00</label><em className="item_price">$4.50</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={29} data-name="Biscuits" data-summary="summary 29" data-price="4.50" data-quantity={1} data-image="images/of29.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal7" className="offer-img">
                                        <img src="images/of30.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/">Nuts</Link>(1 kg)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$4.00</label><em className="item_price">$3.50</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={30} data-name="Nuts" data-summary="summary 30" data-price="3.50" data-quantity={1} data-image="images/of30.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal8" className="offer-img">
                                        <img src="images/of31.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/">Rice</Link>(500 g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$1.00</label><em className="item_price">$0.80</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={31} data-name="Rice" data-summary="summary 31" data-price="0.80" data-quantity={1} data-image="images/of31.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal9" className="offer-img">
                                        <img src="images/of32.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/">Noodles</Link>(500 g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$7.00</label><em className="item_price">$6.00</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={32} data-name="Noodles" data-summary="summary 32" data-price={6.00} data-quantity={1} data-image="images/of32.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal10" className="offer-img">
                                        <img src="images/of33.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/">Tea</Link>(250 g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$5.00</label><em className="item_price">$4.50</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={33} data-name="Tea" data-summary="summary 33" data-price="4.50" data-quantity={1} data-image="images/of33.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal11" className="offer-img">
                                        <img src="images/of34.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/">Seafood</Link>(1 kg)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$4.00</label><em className="item_price">$3.50</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={34} data-name="Seafood" data-summary="summary 34" data-price="3.50" data-quantity={1} data-image="images/of34.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal12" className="offer-img">
                                        <img src="images/of35.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/">Oats Idli</Link>(500 g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$1.00</label><em className="item_price">$0.80</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={35} data-name="Oats Idli" data-summary="summary 35" data-price="0.80" data-quantity={1} data-image="images/of35.png">Add to Cart</button>
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
