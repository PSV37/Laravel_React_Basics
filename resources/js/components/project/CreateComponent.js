import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import Appcss from "../../css/Appcss.css";
import ProjectComponent from "./ProjectComponent";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { connect } from "react-redux";
import { createCategory } from "../../store/actions/categoryActions";

import ErrorAlert from '../alertmessages/ErrorAlert'
import Swal from 'sweetalert2'


class CreateComponent extends Component {
    constructor(props) {
        super(props);
        this.onChangeHandle = this.onChangeHandle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            cat_name: "",
            showMessage:false
        };
    }

    onChangeHandle(e) {
        this.setState({
            cat_name: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const category = {
            cat_name: this.state.cat_name
        };
        this.setState({
            showMessage:true
        })
        Swal('Category Created Successfully!');
        this.props.createCategory(category);

    }

    render() {
        const message = this.state.showMessage ?  <Redirect to="/larael_pro/laravel_vue/public/project/list" /> : null
        return (
            <div style={{ margin: "2%" }}>
                <ProjectComponent />
                {message}
                <div
                    className="card"
                    style={{ width: "49%", marginLeft: "25%" }}
                >
                    <div className="card-body px-lg-5 pt-0">
                        <form
                            onSubmit={this.onSubmit}
                            className="text-center"
                            style={{ color: " #757575", marginTop: "7%" }}
                        >
                            <div className="md-form">
                                <input
                                    placeholder="Create Category"
                                    type="text"
                                    id="cat_name"
                                    value={this.state.cat_name}
                                    className="form-control"
                                    onChange={this.onChangeHandle}
                                    required
                                />
                            </div>

                            <button
                                className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
                                type="submit"
                            >
                                Create
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createCategory: (category) => dispatch(createCategory(category))
    };
};
export default connect(
    null,
    mapDispatchToProps
)(CreateComponent);
