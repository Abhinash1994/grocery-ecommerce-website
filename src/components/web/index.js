import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Header from './header';
import Footer from './footer';
import NotFound from '../nomatch'
import Kitchen from './kitchen';
import Care from './personalcare';
import Household from './household';
import Contact from './contact';
import Faq from './customer/faq';
import Term from './customer/term';
import Desclaimer from './customer/desclaimer';
import Privacypolicy from './customer/privacy-policy';
import Login from '../auth/login';
import Register from '../auth/register';
import Category from './category-mobile'
import Cart from './cart';
import Checkout from './checkout';
import Singleproduct from './singleproduct';
export default class Main extends Component {
  render() {
      return (
        <main>
          <div className="wrapper">
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/kitchen' component={Kitchen} />
              <Route path="/product-details" component={Singleproduct} />
              <Route path='/care' component={Care} />
              <Route path='/house-hold' component={Household} />
              <Route path='/contact' component={Contact} />
              <Route path='/faq' component={Faq} />
              <Route path='/term-and-condition' component={Term} />
              <Route path='/desclaimer' component={Desclaimer} />
              <Route path='/privacy-and-policy' component={Privacypolicy} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/categories' component={Category} />
              <Route path='/carts' component={Cart} />
              <Route path='/checkout' component={Checkout} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </main>
      );
    }
}