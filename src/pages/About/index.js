import React from "react";
import { useOktaAuth } from '@okta/okta-react';
const About = () => {
    const { authState } = useOktaAuth() || {};
    return (
        <div className="container">
            <div className="holder">
                <div className="labletxt">About US</div>
            </div>
        </div>
    );
};

export default About;