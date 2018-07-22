import * as Redux from "redux"
import ReduxThunk from "redux-thunk";
import counter from "./counter"

let store = Redux.createStore(counter);
export {store};