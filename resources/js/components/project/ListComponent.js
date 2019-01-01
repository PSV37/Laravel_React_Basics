import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Appcss from "../../css/Appcss.css";
import {
    deleteCategory,
    updateCategory,
    getCategoryById,
    getCategories
} from "../../store/actions/categoryActions";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import ProjectComponent from "./ProjectComponent";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { connect } from "react-redux";
import axios from "axios";
import Pagination from "react-js-pagination";
import loading from "../../images/loading.png";
import SuccessAlert from "../alertmessages/SuccessAlert";

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class ListComponent extends Component {
    constructor(props) {
        super(props);
        this.confirm = this.confirm.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.deleteCat = this.deleteCat.bind(this);
        this.showUpdateModel = this.showUpdateModel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeHandle = this.onChangeHandle.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);

        this.state = {
            categoryes: [],
            open: false,
            showUpdate: false,
            updated_cat_name: "",
            cat_id: "",
            activePage: 1,
            itemsCountPerPage: 1,
            totalItemsCount: 1,
            pageRangeDisplayed: 3,
            showMessage: false
        };
    }

    //Fetch List of Category Records
    componentDidMount() {
        this.setState({
            showMessage: false
        });
        this.props.getCategories

    }

    //Show Confirm Model For Delete Category Record
    confirm(id) {
        this.setState({ open: true });
    }

    //Delete Category Record
    deleteCat(id) {
        this.props.deleteCategory(id);
        this.setState({ open: false });
    }

    //Show Update Model With Data
    showUpdateModel(id) {
        axios
            .get(
                "http://localhost/larael_pro/laravel_vue/public/fetch/category/" +
                    id
            )
            .then(res => {
                this.setState({
                    updated_cat_name: res.data.name,
                    cat_id: res.data.id
                });
            });
        this.setState({
            showUpdate: true
        });
    }

    //Handle Pagination For List Of Recrod
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber });
        axios
            .get(
                "http://localhost/larael_pro/laravel_vue/public/categories?page=" +
                    pageNumber
            )
            .then(res => {
                console.log({ res });
                this.setState({
                    categoryes: res.data.data,
                    activePage: res.data.current_page,
                    itemsCountPerPage: res.data.per_page,
                    totalItemsCount: res.data.total
                });
            });
    }

    //Submit Update Category Form
    onSubmit(e) {
        e.preventDefault();
        const category = { cat_name: this.state.updated_cat_name };
        this.props.updateCategory(this.state.cat_id, category);
        this.setState({ showUpdate: false });
    }

    //Update Input
    onChangeHandle(e) {
        this.setState({
            updated_cat_name: e.target.value
        });
    }

    //Use Close Models
    handleClose() {
        this.setState({ open: false, showUpdate: false });
    }

    render() {
        console.log(this.props)
        const message = this.state.showMessage ? (
            <SuccessAlert message="Created Category" />
        ) : null;
        const { getCategories } = this.props;
        return (
            <div style={{ margin: "2%" }}>
                <ProjectComponent />
                {message}
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Category Name</th>
                            <th>Status</th>
                            <th>More</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getCategories.map(cat => {
                            return (
                                <tr key={cat.id}>
                                    <td>{cat.id}</td>
                                    <td>{cat.name}</td>
                                    <td>
                                        {cat.active == 1
                                            ? "Active"
                                            : "Inactive"}
                                    </td>
                                    <td>
                                        <Fab
                                            size="small"
                                            color="secondary"
                                            aria-label="Edit"
                                            style={{ marginRight: "20px" }}
                                            onClick={this.showUpdateModel.bind(
                                                this,
                                                cat.id
                                            )}
                                        >
                                            <Icon>edit_icon</Icon>
                                        </Fab>
                                        <IconButton
                                            aria-label="Delete"
                                            onClick={this.confirm.bind(
                                                this,
                                                cat.id
                                            )}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </td>
                                    <Dialog
                                        open={this.state.open}
                                        TransitionComponent={Transition}
                                        keepMounted
                                        onClose={this.handleClose}
                                        aria-labelledby="alert-dialog-slide-title"
                                        aria-describedby="alert-dialog-slide-description"
                                    >
                                        <DialogTitle id="alert-dialog-slide-title">
                                            Are you Sure?
                                        </DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-slide-description">
                                                If you want to delete record
                                                from list just click on "YES",
                                                Other wise click on "NO"
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button
                                                onClick={this.deleteCat.bind(
                                                    this,
                                                    cat.id
                                                )}
                                                color="primary"
                                            >
                                                YES
                                            </Button>
                                            <Button
                                                onClick={this.handleClose}
                                                color="primary"
                                            >
                                                NO
                                            </Button>
                                        </DialogActions>
                                    </Dialog>

                                    <Dialog
                                        open={this.state.showUpdate}
                                        onClose={this.handleClose}
                                        aria-labelledby="form-dialog-title"
                                    >
                                        <DialogTitle id="form-dialog-title">
                                            Update Record
                                        </DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                Update Existing Record
                                            </DialogContentText>
                                            <form
                                                onSubmit={this.onSubmit}
                                                className="text-center"
                                                style={{
                                                    color: " #757575",
                                                    marginTop: "7%"
                                                }}
                                            >
                                                <div className="md-form">
                                                    <input
                                                        placeholder="Create Category"
                                                        type="text"
                                                        id="cat_name"
                                                        value={
                                                            this.state
                                                                .updated_cat_name
                                                        }
                                                        className="form-control"
                                                        onChange={
                                                            this.onChangeHandle
                                                        }
                                                        required
                                                    />
                                                </div>

                                                <button
                                                    className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
                                                    type="submit"
                                                >
                                                    UPDATE
                                                </button>
                                                <div
                                                    className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
                                                    onClick={this.handleClose}
                                                    style={{
                                                        backgroundColor: "brown"
                                                    }}
                                                >
                                                    Close
                                                </div>
                                            </form>
                                        </DialogContent>
                                    </Dialog>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                <div className="d-flex justify-content-center">
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={this.state.itemsCountPerPage}
                        totalItemsCount={this.state.totalItemsCount}
                        pageRangeDisplayed={3}
                        onChange={this.handlePageChange}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log({state})
    return {
        getCategories: state.category.categories
    };
};

const mapDispatchToProps = dispatch => {
    console.log("created");
    return {
        deleteCategory: category => dispatch(deleteCategory(category)),
        updateCategory: (updateCatId, updateCatName) =>
            dispatch(updateCategory(updateCatId, updateCatName))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListComponent);
