import {initState} from "./initState.js"
import * as types from "./initFn.js"
import reducer from "./reducer.js"
export default reducer( initState,{...types} );