import React from 'react';

function PostItem(props) {
    const savedPosts = props.savedPosts;
    const css = props.css
    return (
        savedPosts.map(post => {
            let {title, name, image, description} = post;

            return (
                <div key={image} className={css.SeachItem}>
                    <p>{title}</p>
                    <p>{name}</p>
                    <img src={image} alt={title}></img>
                    <p>{description}</p>
                </div>
            )
        })
    )
}

export default PostItem
