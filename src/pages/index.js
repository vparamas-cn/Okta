import React from "react";
import { isDev } from "../utils"
import { Production, Dev } from "../routes"
import "./pages.css"

function Main() {
    if (isDev())
        return <Dev />
    else
        return <Production />
}

export default Main;