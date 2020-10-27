import React from "react";
import { useHistory } from "react-router-dom";
import { useOktaAuth } from '@okta/okta-react';
const Dashboard = () => {
    let history = useHistory();
    const onBackHandler = () => {
        history.push("/AboutUs");
    };
    const { authState } = useOktaAuth() || {};

    return (
        <div className="container">
            <div className="holder">
                <div className="labletxt">Welcome Dashborad</div>
                <div className="cellholder"><div className="goback" onClick={() => onBackHandler()}>About US</div></div>
            </div>
        </div>
    );
};

export default Dashboard;