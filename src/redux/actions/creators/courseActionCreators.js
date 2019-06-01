import { CREATE_COURSE } from "../types/courseActionsTypes";

export function createCourse(course) {
   return {
    type: CREATE_COURSE,
    course
   }
}