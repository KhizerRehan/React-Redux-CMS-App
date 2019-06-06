import * as types from "../actions/types";

function courseReducer(state = [], action) {
    switch(action.type) {
        case types.CREATE_COURSE: 
         return [...state, {...action.course} ]; // (array of objects): add new course obj
        
        default:
         return state;
    }
}

export default courseReducer;