import React from "react";
import "./header.css";

const Header = () => {
    return (

        <div className={"header"}>
            <div className="avatar"/>
            <div className="video-container">
                <iframe
                    className={"video"}
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/mv0ecx5XL84"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="image-container">

                <div className="image"/>
            </div>
        </div>
    );
};

export default Header;
