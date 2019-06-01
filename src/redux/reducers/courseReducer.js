import { CREATE_COURSE } from "../actions/types/courseActionTypes";

function courseReducer(state = [], action) {
    switch(action.type) {
        case CREATE_COURSE: 
         return [...state, {...action.course} ]; // (array of objects): add new course obj
        
        default:
         return state;
    }
}

export default courseReducer;