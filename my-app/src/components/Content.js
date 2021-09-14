import React, { Component } from 'react';
import css from './css/Content.module.css';
import {savedPosts} from './../posts.json';
import PostItem from './PostItem';
import Loader from './Loader';

export class Content extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoaded: false,
             posts: [],
        }
    }

    loadTimer() {
        setTimeout(() => {
            this.setState({
                isLoaded: true,
            })
        }, 2000);

    }

    handleChange = (e) => {
        let inputText = e.target.value.toLowerCase();
        const filteredPosts = savedPosts.filter(post => {
                return post.name.toLowerCase().includes(inputText)
            }
        );
        this.setState({
            posts: filteredPosts,
        });
    }

    componentDidMount() {
        this.loadTimer();
        this.setState({
            posts: savedPosts,
        })
    }
    
    render() {
        return (
            <div className={css.Content}>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <form>
                        <label htmlFor="searchInput">Search:</label>
                        <input 
                            id="searchInput"
                            type="search"
                            name="q"
                            placeholder="By Author"
                            onChange={(e) => this.handleChange(e)}
                        />
                        <h4>Posts found {this.state.posts.length}</h4>
                    </form>
                </div>
                <div className={css.SearchResults}>
                    {
                        this.state.isLoaded ? <PostItem savedPosts={this.state.posts} css={css} /> : <Loader /> 
                    }
                </div>
            </div>
        )
    }
}

export default Content
