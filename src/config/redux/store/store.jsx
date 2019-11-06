import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reduser from '../reducer/reducer'


export const store = createStore(reduser, applyMiddleware(thunk))

