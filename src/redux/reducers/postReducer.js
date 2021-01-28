import {
     FETCH_POSTS,
     NEW_POST
} from "../actions/types";


const intialState = {
     items: [],
     item: {}
}

function postReducer(state = intialState, action) {
     switch (action.type) {
          case FETCH_POSTS:
               return {
                    ...state,
                    items: action.posts
               };
          case NEW_POST:
               return {
                    ...state,
                    item:action.post
               };
          default:
                    return state;
     }
}
export default postReducer;