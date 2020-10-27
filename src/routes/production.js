import React from "react";
import { Route } from "react-router-dom";
import { AuthService, SecureRoute, Security, LoginCallback } from '@okta/okta-react';
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";

function Production() {
    const authService = new AuthService({
        issuer: process.env.ISSUER,
        clientId: process.env.CLIENT_ID,
        redirectUri: window.location.origin + '/auth',
        pkce: true,
        scopes: ['openid', 'profile', 'email'],
        disableHttpsCheck: false
    });

    return (
        <Security authService={authService}>
            <Route exact path="/auth" component={LoginCallback} />
            <SecureRoute exact path="/" component={Dashboard} />
            <SecureRoute exact path="/AboutUs" component={About} />
        </Security>
    )
}

export default Production;