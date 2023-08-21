import { createStore, applyMiddleware} from "redux"; 
import rootReducer from "./rootReducer"; 

import thunk from "redux-thunk";

const applythunk=[thunk];

const store = createStore(rootReducer,applyMiddleware(...applythunk));

export default store;

