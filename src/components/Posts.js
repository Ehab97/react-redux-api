import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions/postAction';

class Posts extends Component {
     componentWillMount(){
          this.props.fetchPosts()
     }
     componentWillReceiveProps(nextProps){
          if(nextProps.newPost){
               this.props.posts.unshift(nextProps.newPost)
          }
     }
     render() {
          const PostsItems=this.props.posts.map(post=>(
               <div key={post.id} className="col-4 mt-4">
                    <div className="card">
                    <div className="card-body">
                         <h1 className="card-title">{post.title}</h1>
                         <p className="card-text">{post.body}</p>
                    </div>
                    </div>
               </div>
          ));
          return (
                    <div className="row">
                         <div className="col-12">
                         <h1 className="text-center">Posts</h1>
                         </div>
                         {PostsItems}
                    </div>
          )
     }
}

const mapStateToProps=state=>({
posts:state.posts.items,
newPost:state.posts.item
});

export default  connect(mapStateToProps,{fetchPosts})(Posts);