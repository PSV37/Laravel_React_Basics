import React, { Component } from "react";
import { NavLink } from "react-router-dom";
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


class SignInComponent extends Component {
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
                            Sign in
                        </Typography>
                        <form>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">
                                    Email Address
                                </InputLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
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
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </div>
        );
    }
}

export default SignInComponent;
