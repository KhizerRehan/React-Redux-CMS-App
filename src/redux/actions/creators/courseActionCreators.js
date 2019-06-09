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

export function updateCourseSuccess(course) {
   return {
      type: types.UPDATE_COURSE_SUCCESS,
      course
   }
}

export function createCourseSuccess(course) {
   return {
      type: types.CREATE_COURSE_SUCCESS,
      course
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

export function saveCourse(course) {
   return (dispatch,getState) =>{
      return courseApi
      .saveCourse(course)
      .then((savedCourse) => {
          course.id
         ? dispatch(updateCourseSuccess(savedCourse))
         : dispatch(createCourseSuccess(savedCourse));
      })
      .catch(error =>{
         throw error;
      })
   }
}