import {
     FETCH_POSTS,
     NEW_POST
} from "./types";

export function fetchPosts() {
     return function (dispatch) {
          fetch('https://jsonplaceholder.typicode.com/posts')
               .then(res => res.json())
               .then(posts => dispatch({
                    type: FETCH_POSTS,
                    posts
               }))
     }
}


export const addPost = postData => dispatch => {
     fetch('https://jsonplaceholder.typicode.com/posts', {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(postData)
          }).then(res => res.json())
          .then(post =>{ 
               console.log(post);
               dispatch({
               type: NEW_POST,
               post
          })});
}