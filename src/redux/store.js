import { legacy_createStore, compose, applyMiddleware} from "redux";
import reducer from "./reducer"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const customMiddleware = (store) => (next) => (action) =>  {

    if(typeof action === "function"){
       return action(store.dispatch)
    }

    return next(action)
}
 
const store = legacy_createStore(reducer, composeEnhancers(applyMiddleware(customMiddleware)))

export {store}