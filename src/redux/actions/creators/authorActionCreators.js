import * as types from "../types";
import * as authorApi from "../../../api/authorApi";

export function loadAuthorsSuccess(authors) {
   return {
      type: types.LOAD_AUTHORS_SUCCESS,
      authors
   }
}

export function loadAuthors(){
   return (dispatch, getState) =>{
      console.log('loadAuthors func called', getState())
      return authorApi
            .getAuthors()
            .then(authors=>{
               dispatch(loadAuthorsSuccess(authors))
            })
            .catch(err =>{
               throw err;
            })
   }
}