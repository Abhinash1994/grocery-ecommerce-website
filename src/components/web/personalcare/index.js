import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Care extends Component {
    render() {
        return (
            <div>
                {/**/}
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
                            <Link href="/"><img className="first-slide" src="images/ba1.jpg" alt="First slide" /></Link>
                        </div>
                        <div className="item">
                            <Link href="/"><img className="second-slide " src="images/ba.jpg" alt="Second slide" /></Link>
                        </div>
                        <div className="item">
                            <Link href="/"><img className="third-slide " src="images/ba2.jpg" alt="Third slide" /></Link>
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
                            <Link href="/">
                                <img src="images/ki3.jpg" className="img-responsive" alt="" />
                            </Link>
                            <h6>Natural Cream</h6>
                            <p>Nam libero tempore</p>
                        </div>
                        <div className="col-md-4 kic-top1">
                            <Link href="/">
                                <img src="images/ki4.jpg" className="img-responsive" alt="" />
                            </Link>
                            <h6>Shaving Kit</h6>
                            <p>Nam libero tempore</p>
                        </div>
                        <div className="col-md-4 kic-top1">
                            <Link href="/">
                                <img src="images/ki5.jpg" className="img-responsive" alt="" />
                            </Link>
                            <h6>Makeup Kit</h6>
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
                                    <Link href="#" data-toggle="modal" data-target="#myModal1" className="offer-img">
                                        <img src="images/of36.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link href="/">Baby Oil</Link>(250 g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$7.00</label><em className="item_price">$6.00</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={36} data-name="Baby Oil" data-summary="summary 36" data-price={6.00} data-quantity={1} data-image="images/of36.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link href="#" data-toggle="modal" data-target="#myModal2" className="offer-img">
                                        <img src="images/of37.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link href="/">Soap</Link>(250 g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$5.00</label><em className="item_price">$4.50</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={37} data-name="Soap" data-summary="summary 37" data-price="4.50" data-quantity={1} data-image="images/of37.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link href="#" data-toggle="modal" data-target="#myModal3" className="offer-img">
                                        <img src="images/of38.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link href="/">Hair Gel</Link>(100 g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$4.00</label><em className="item_price">$3.50</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={38} data-name="Hair Gel" data-summary="summary 38" data-price="3.50" data-quantity={1} data-image="images/of38.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link href="#" data-toggle="modal" data-target="#myModal4" className="offer-img">
                                        <img src="images/of39.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link href="/">Lotion </Link>(100 g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$1.00</label><em className="item_price">$0.80</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={39} data-name="Lotion" data-summary="summary 39" data-price="0.80" data-quantity={1} data-image="images/of39.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link href="#" data-toggle="modal" data-target="#myModal5" className="offer-img">
                                        <img src="images/of40.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link href="/">Shower Gel</Link>(250 g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$7.00</label><em className="item_price">$6.00</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={40} data-name="Shower Gel" data-summary="summary 40" data-price={6.00} data-quantity={1} data-image="images/of40.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link href="#" data-toggle="modal" data-target="#myModal6" className="offer-img">
                                        <img src="images/of41.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link href="/">Hair Color</Link>(250 g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$5.00</label><em className="item_price">$4.50</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={41} data-name="Hair Color" data-summary="summary 41" data-price="4.50" data-quantity={1} data-image="images/of41.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link href="#" data-toggle="modal" data-target="#myModal7" className="offer-img">
                                        <img src="images/of42.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link href="/"> Wipes</Link>(300 kg)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$4.00</label><em className="item_price">$3.50</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={42} data-name="Wipes" data-summary="summary 42" data-price="3.50" data-quantity={1} data-image="images/of42.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link href="#" data-toggle="modal" data-target="#myModal8" className="offer-img">
                                        <img src="images/of43.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link href="/">Essential Oils</Link>(200 g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$1.00</label><em className="item_price">$0.80</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={43} data-name="Essential Oils" data-summary="summary 43" data-price="0.80" data-quantity={1} data-image="images/of43.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link href="#" data-toggle="modal" data-target="#myModal9" className="offer-img">
                                        <img src="images/of44.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link href="/">Cream</Link>(150 g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$7.00</label><em className="item_price">$6.00</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={44} data-name="Cream" data-summary="summary 44" data-price={6.00} data-quantity={1} data-image="images/of44.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link href="#" data-toggle="modal" data-target="#myModal10" className="offer-img">
                                        <img src="images/of45.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link href="/">Hair Color</Link>(250 g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$5.00</label><em className="item_price">$4.50</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={45} data-name="Hair Color" data-summary="summary 45" data-price="4.50" data-quantity={1} data-image="images/of45.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link href="#" data-toggle="modal" data-target="#myModal11" className="offer-img">
                                        <img src="images/of46.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link href="/">Baby Care</Link>(1 kg)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$4.00</label><em className="item_price">$3.50</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={46} data-name="Baby Care" data-summary="summary 46" data-price="3.50" data-quantity={1} data-image="images/of46.png">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pro-1">
                                <div className="col-m">
                                    <Link href="#" data-toggle="modal" data-target="#myModal12" className="offer-img">
                                        <img src="images/of47.png" className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link href="/">Lotion</Link>(100 g)</h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>$1.00</label><em className="item_price">$0.80</em></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={47} data-name="Lotion" data-summary="summary 47" data-price="0.80" data-quantity={1} data-image="images/of47.png">Add to Cart</button>
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
