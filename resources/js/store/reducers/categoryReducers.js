import React from "react";

const initState = {
    categories: [ ],

    catPagination:[]
};

const categoryReducers = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_CATEGORIES_SUCCESS":
            console.log('catPagination')

            return  {...state, categories:action.payload.categories.data.data}

        case "FETCH_CATEGORIES_FAILURE":
            console.log('fetch error');
            return state;

        case "FETCH_CAT_PAGINATION_DATA" :
            console.log('FETCH_CAT_PAGINATION_DATA_SUCCESS')
            console.log(state.catPagination)
            return state;

        case "CREATE_CAT_SUCCESS":
            console.log(action.payload.categories.data.data)
            console.log("category Create successfully");
            return  {...state, categories:action.payload.categories.data.data}

        case "ERROR_CREATE":
            console.log("error occured");
            return state;

        default:
            return state;
    }
};

export default categoryReducers;
