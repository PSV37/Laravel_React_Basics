import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Appcss from '../../css/Appcss.css'
import { Link,NavLink } from 'react-router-dom'
import SignIn from './SignIn'
import SignOut from './SignOut'


export default class Topnavbar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            path:'/larael_pro/laravel_vue/public/',
            isAuthanticated:true
        }
    }
    render() {
       /*  const links = this.state.isAuthanticated ? <SignIn />   :<SignOut isAuthanticated={this.isAuthanticated} /> ; */

        return (
            <nav>
                <div className="nav-wrapper" style={{backgroundColor:'whitesmoke'}}>
                    <Link to={this.state.path} className="brand-logo">MarioPlan </Link>
                    <SignIn />
                    <SignOut isAuthanticated={this.isAuthanticated} /> ;

                </div>
            </nav>
        );
    }
}
