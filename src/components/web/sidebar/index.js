import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false, status: 0, loading: false }
    }

    handleOpen(e) {
        document.getElementById("mySidenav").style.width = "250px";
    }

    handleClose(e) {
        document.getElementById("mySidenav").style.width = "0";
    }
    render() {
        return (
            <div>
                <div className="list_dropdown">
                    <button type="button" className="navbar-toggle collapsed navbar-toggle1" onClick={(e) => this.handleOpen()}>
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                </div>
                <div id="mySidenav" className="sidenav" >
                    <ul onClick={(e) => this.handleClose()}>
                        <li><Link to="#" className="closebtn">&times;</Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/categories">Shop By Category</Link></li>
                        <li><Link to="#">offers</Link></li>
                        <li><Link to="#">Orders</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar;