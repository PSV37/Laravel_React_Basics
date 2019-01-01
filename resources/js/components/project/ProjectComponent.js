import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

const ProjectComponent = () => {
    return (
        <div style={{margin:'2%'}} >

                <Link to="/larael_pro/laravel_vue/public/project/create" style={{textDecoration:'none', color:'white'}}>
                    <Fab color="primary" aria-label="Add" >
                        <AddIcon />
                    </Fab>
                </Link>



            <button type="button" className="btn btn-success" style={{marginLeft:'19px'}}>
                <Link to="/larael_pro/laravel_vue/public/project/list" style={{textDecoration:'none', color:'white'}}>
                    List{" "}
                </Link>
            </button>

        </div>
    );
};

export default ProjectComponent;
