import React from "react";

function About(props) {
    const defaultImage = "https://via.placeholder.com/215";
    const imageUrl = props.image || defaultImage;

    return (
        <aside>
            <img src={imageUrl} alt="blog logo"></img>
            <p>{props.about}</p>
        </aside>
    );
}

export default About;