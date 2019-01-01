import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Appcss from "../../css/Appcss.css";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { signUpUser } from "../../store/actions/authActions";
import { SuccessAlert } from "../alertmessages/SuccessAlert";

class SignUpComponent extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeHandle = this.onChangeHandle.bind(this);

        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            successMessage: false
        };
    }

    onChangeHandle(e) {
        console.log("onChangeHandle");
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const singUpUser = {
            name: this.state.first_name + " " + this.state.last_name,
            email: this.state.email,
            password: this.state.password
        };
        this.setState({
            successMessage: true
        });

        this.props.signUpUser(singUpUser);
    }

    render() {
        return (
            <div className="">
                <main className="main_class">
                    <CssBaseline />
                    <Paper className="mainBody">
                        <Avatar style={{ backgroundColor: "rgb(225, 0, 80)" }}>
                            <LockIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign Up
                        </Typography>
                        <form onSubmit={this.onSubmit}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="first_name">
                                    FIrst Name
                                </InputLabel>
                                <Input
                                    id="first_name"
                                    name="first_name"
                                    autoComplete="first_name"
                                    autoFocus
                                    value={this.state.first_name}
                                    onChange={this.onChangeHandle}
                                />
                            </FormControl>

                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="last_name">
                                    Last Name
                                </InputLabel>
                                <Input
                                    id="last_name"
                                    name="last_name"
                                    autoComplete="last_name"
                                    autoFocus
                                    value={this.state.last_name}
                                    onChange={this.onChangeHandle}
                                />
                            </FormControl>

                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">
                                    Email Address
                                </InputLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={this.state.email}
                                    onChange={this.onChangeHandle}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">
                                    Password
                                </InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={this.state.password}
                                    onChange={this.onChangeHandle}
                                />
                            </FormControl>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="remember"
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Sign Up
                            </Button>
                        </form>
                    </Paper>
                </main>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUpUser: signedUser => {
            dispatch(signUpUser(signedUser));
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(SignUpComponent);
