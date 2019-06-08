import * as types from "../actions/types";

function courseReducer(state = [], action) {
    switch(action.type) {
        case types.CREATE_COURSE: 
         return [...state, {...action.course} ]; // (array of objects): add new course obj

        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        default:
         return state;
    }
}

export default courseReducer;