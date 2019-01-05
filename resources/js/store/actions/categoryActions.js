import axios from "axios";

export const FETCH_CATEGORY_SUCCESS   = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';
export const FETCH_CAT_PAGINATION = 'FETCH_CAT_PAGINATION_DATA';
export const CREATE_CAT_SUCCESS = 'CREATE_CAT_SUCCESS';

export const getCategories = () => {
    return(dispatch)=> {
        axios
        .get("http://localhost/larael_pro/laravel_vue/public/categories")
        .then(res => {
            console.log('%c Get All Category! ', ' color: green');
            dispatch(fetchCategorySuccess(res))
        }).catch((err) => {
            console.log('%c Error Occured! ', ' color: red');
            dispatch(fetchCategoriesFailure(err))
        });
    }
}

export const getallAction = () => {
    return(dispatch)=> {
        axios
        .get("http://localhost/larael_pro/laravel_vue/public/categories")
        .then(res => {
            console.log('%c Get All Category! ', ' color: green');
            dispatch(fetchCategorySuccess(res))
        }).catch((err) => {
            console.log('%c Error Occured! ', ' color: red');
            dispatch(fetchCategoriesFailure(err))
        });
    }
}


export const createCategory = (category) => {
    return(dispatch)=> {
        axios
        .post("http://localhost/larael_pro/laravel_vue/public/create/category", category)
        .then(res => {
            dispatch(createCategorySuccess(res))
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


export const fetchCategorySuccess = (categories) => (    {
    type: FETCH_CATEGORY_SUCCESS,
    payload: { categories }
  });

  export const fetchCategoryPagination = peginationCat => ({
      type : FETCH_CAT_PAGINATION,
      payload : { peginationCat }
  })

  export const fetchCategoriesFailure = error => ({
    type: FETCH_CATEGORIES_FAILURE,
    payload: { error }
  });

  export const createCategorySuccess = (catCreated) => ({
    type : CREATE_CAT_SUCCESS,
    payload : {catCreated}
  })