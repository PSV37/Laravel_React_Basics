import categoryReducers from './categoryReducers'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
    category: categoryReducers,
})

export default rootReducers