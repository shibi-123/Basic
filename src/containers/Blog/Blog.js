import React, { Component } from 'react';
//import axios from "axios";
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author:'Max'
                    }
                })
                this.setState({posts:updatedPosts})
            })
            .catch(error => {
                console.log(error)
            })
    }

    postSelectorHandler = (id) => {
        this.setState({selectedPostId : id})
    }

    deletePostHnadler = () => {
        axios.delete('/posts' + this.props.id)
            .then(response => {
                    console.log(response)
                })
    }

    render() {
        let posts = <p style={{textAlign:'center'}} >Something went wrong!!!</p>
        if (!this.state.error) {
             posts = this.state.posts.map(post => {
                return <Post
                    key = {post.id}
                    title={post.title}
                    clicked={() => this.postSelectorHandler(post.id)}
                    />
            })
        }
        return (
                
            <div>
                <section className="Posts">
                   {posts}
                </section>
                <section>
                    <FullPost
                        id={this.state.selectedPostId}
                        delete = { this.state.deletePostHnadler }    
                    />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;