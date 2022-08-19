//file to create the redux store which will be used in the application for app wide state management
import rootReducer from "./Reducer";

import { createStore } from "redux";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;