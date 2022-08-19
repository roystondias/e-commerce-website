//file used to combine all the reducer to form one root
import buttonClickReducer from "./Reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    buttonClickReducer,
});

export default rootReducer;
