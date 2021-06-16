import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reposReducer from './reducers/repository'

const reducer = combineReducers({
  reposReducer
})
const store = createStore(reducer, applyMiddleware(thunk))

export default store
