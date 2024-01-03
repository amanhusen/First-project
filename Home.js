import React, { useState } from "react";

const Home = () => {
    const showAlert = () => {
        alert("I'm an alert");
      }

    return (
        <>
            <div className="hero-image">
                <div className="hero-text">
                    <h1>Welcome to My World</h1>
                    <p>Capturing moments that last a lifetime</p>
                    <button onClick={showAlert}>Show alert</button>;
                </div>
            </div>
            <div id="container">
                <div id="text1">
                    <h1>Login and explore my incredible literary world</h1>
                </div>
                <div id="text2">
                    <p>
                        I believe that everyone has both good and bad talent.
                        We will figure out how to channel your bad talent in a positive direction.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Home;
