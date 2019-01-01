

export const signUpUser = (registerUser) => {
    return (dispatch) => (
        axios
        .post("http://localhost/larael_pro/laravel_vue/public/user/register", registerUser)
        .then(res => {
            this.props.history.push('/larael_pro/laravel_vue/public/project/list')
            dispatch({type: 'CREATE_SUCCESS'})
        }).catch((err) => {
            dispatch({type: 'ERROR_CREATE', err })
        })
    )
}