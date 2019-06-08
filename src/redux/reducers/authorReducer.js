import * as types from "../actions/types";
import initialState from './initialState';

function authorReducer(state = initialState.authors, action) {
    switch(action.type) {
        case types.LOAD_AUTHORS_SUCCESS:
            return action.authors;
        default:
         return state;
    }
}

export default authorReducer;