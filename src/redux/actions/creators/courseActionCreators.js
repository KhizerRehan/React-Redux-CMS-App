import * as types from "../types";
import * as courseApi from "../../../api/courseApi";

export function createCourse(course) {
   return {
    type: types.CREATE_COURSE,
    course
   }
}

export function loadCoursesSuccess(courses) {
   return {
      type: types.LOAD_COURSES_SUCCESS,
      courses
   }
}

export function loadCourses() {
   return (dispatch, getState) =>{
      console.log('loadCourses func called', getState())
      return courseApi
            .getCourses()
            .then(courses=>{
               dispatch(loadCoursesSuccess(courses))
            })
            .catch(err =>{
               throw err;
            })
   }
}