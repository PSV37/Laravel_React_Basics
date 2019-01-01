import axios from "axios";

export const getCategories = () => {
    return(dispatch)=> {
        axios
        .get("http://localhost/larael_pro/laravel_vue/public/categories")
        .then(res => {
            console.log({res})
            dispatch({type: 'FETCH_SUCCESS', res})
        }).catch((err) => {
            dispatch({type: 'ERROR_FETCH', err })
        });
    }
}

export const createCategory = (category) => {
    return(dispatch)=> {
        axios
        .post("http://localhost/larael_pro/laravel_vue/public/create/category", category)
        .then(res => {
            dispatch({type: 'CREATE_SUCCESS', res})
        }).catch((err) => {
            dispatch({type: 'ERROR_CREATE', err })
        });
    }
}

export const deleteCategory = (id) => {
    return(dispatch)=> {
        axios
        .delete("http://localhost/larael_pro/laravel_vue/public/delete/category/"+ id)
        .then(res => {
            dispatch({type: 'DELETE_SUCCESS'})
        }).catch((err) => {
            dispatch({type: 'ERROR_CREATE', err })
        });
    }
}

export const updateCategory = (id, category) => {
    console.log({category})
    return(dispatch)=> {
        axios
        .put("http://localhost/larael_pro/laravel_vue/public/update/category/"+id, category)
        .then(res => {
            dispatch({type: 'UPDATE_SUCCESS'})
        }).catch((err) => {
            dispatch({type: 'ERROR_CREATE', err })
        });
    }
}

export const getCategoryById = (id) => {
    return(dispatch)=> {
        axios
        .get("http://localhost/larael_pro/laravel_vue/public/fetch/category/"+ id)
        .then(res => {
            dispatch({type: 'UPDATE_SUCCESS'})
        }).catch((err) => {
            dispatch({type: 'ERROR_CREATE', err })
        });
    }
}

