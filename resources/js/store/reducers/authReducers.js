import React from "react";

const initState = {
    categories: [
        { id: "1", name: "FIrst Title", active: "content of first title" },
    ]
};

const authReducers = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_SUCCESS":
            [...categories, action.data]
            return state;

        case "FETCH_ERROR":
            console.log("error", action.err);
            return state;

        case "CREATE_SUCCESS":
            console.log("create successfully");
            return state;

        case "ERROR_CREATE":
            console.log("error occured");
            return state;

        default:
            return state;
    }
};

export default categoryReducers;
