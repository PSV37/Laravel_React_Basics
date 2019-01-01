import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import Appcss from '../../css/Appcss.css'
class SignIn extends Component{
    constructor(props) {
        super(props)

        this.state = {
            path:'/larael_pro/laravel_vue/public/',
        }
    }
    render(){
        return(
            <ul className="right">
                <li>
                    <NavLink to={this.state.path+'signup'}>Singup </NavLink>
                </li>
                <li><NavLink to={this.state.path+'signin'}>Singin</NavLink></li>
            </ul>
        )
    }
}

export default SignIn