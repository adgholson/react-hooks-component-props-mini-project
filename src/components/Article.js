import React from "react";

function Article(props) {
    const defaultDate = "January 1, 1970"
    const articleDate = props.date || defaultDate; 

    return (
        <article>
            <h3>{props.title}</h3>
            <small>{articleDate}</small>
            <p>{props.preview}</p>
        </article>
    )
}

export default Article;