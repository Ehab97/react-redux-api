import React, { Component } from 'react'
import { connect } from 'react-redux';
import {addPost} from '../redux/actions/postAction'

class PostForm extends Component {
     constructor(props){
          super(props);
          this.state={
               title:'',
               body:'',
               id:0
          }
     }
     onChange = (e) => {
          this.setState({
               [e.target.name]: e.target.value
          })
     }
     onSubmit = (e) => {
          e.preventDefault();
          const post = {
               title: this.state.title,
               body: this.state.body,
               id: 200
          }
          this.props.addPost(post);

     }
     render() {
          return (
               <div className="row">
                    <form className="col-6 m-auto " onSubmit={this.onSubmit}>
                    <h1>Add Post</h1>
                         <div>
                              <label htmlFor="">Titel</label><br/>
                              <input className="form-control" type="text"
                                     name="title" value={this.state.title}
                                     onChange={this.onChange}
                                     />
                         </div>
                         <div>
                              <label htmlFor="">body</label><br/>
                              <textarea className="form-control" name="body"
                               value={this.state.body}
                               onChange={this.onChange}
                               />
                         </div>
                         <div className="text-center mt-4">
                         <button type="submit" className="btn btn-primary m-auto">submit</button>
                         </div>
                    </form>
               </div>
          )
     }
}


export default  connect(null,{addPost})(PostForm) 