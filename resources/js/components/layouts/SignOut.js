import React, {Component} from 'react'
import {  NavLink } from 'react-router-dom'
import Appcss from '../../css/Appcss.css'

class SignOut extends Component {
    constructor(props) {
        super(props)

        this.state = {
            path:'/larael_pro/laravel_vue/public/',
            isAuthanticated : false
        }
    }

    render() {
        return (
            <ul className="right">
                <li>
                    <NavLink to={this.state.path+'project/create'}>Project </NavLink>
                </li>
                <li>
                    <a style={{color:'black'}}>Log Out </a>

                </li>
               {/*  <li><NavLink to="/create-project">Create New </NavLink></li> */}
                <li><NavLink to={this.state.path} className="btn btn-floating pink lighten-1">
                   SP
                </NavLink></li>
            </ul>
        )
    }

}

export default SignOut