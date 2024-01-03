import React from "react";

const About = () => {
    return (
        <>
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
                crossOrigin="anonymous"
            />
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
                crossOrigin="anonymous"
            ></script>


            <div className="col-lg-2">
                <div className="head-image">

                </div>
            </div>
            <div className="container text-center">
                <div className="row justify-content-md-center">
                    <div className="col-md-auto">
                        <h1>
                            We provide the best content services; write any field for content,
                            medical, IT, engineering, school, etc.
                        </h1>
                        <h2>We believe your requirements are our work to write and support</h2>
                    </div>
                    <div className="col-lg-2">The Dance of Words: A Writer's Prelude</div>
                </div>
                <div className="col-lg-2">
                    <div className="head-image_2"></div>
                </div>
                <div className="row">
                    <div className="col">
                        <h4>We believe sometimes your emotions are expressed in our words.</h4>
                    </div>

                    <div className="col-md-auto">
                        <p>
                            I am a writer with 3 years of experience, and I am writing all kinds
                            of articles and magazines and providing data in any field. Also, work
                            as a freelancer for the press.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
