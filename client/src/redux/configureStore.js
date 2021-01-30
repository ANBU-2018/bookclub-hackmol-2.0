import { createStore, applyMiddleware } from 'redux'
import  {reducer}  from './reducer';
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'

let middlewares = [createLogger(), thunkMiddleware]

const configureStore = () => {
    const localStorageState = loadState()

    const store = createStore(
        reducer,
        localStorageState,
        applyMiddleware(...middlewares)
    )

    // everytime the state changes, it will be saved to 
    store.subscribe(throttle(() => {
        saveState(store.getState())
    }, 1000))

    return store
}
export default configureStore