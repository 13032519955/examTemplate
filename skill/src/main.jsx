import "babel-runtime/regenerator"
import "./index.html"
import "./css/style.scss"
import "./js/script.js"

//react
import React from "react"
import ReactDom from "react-dom"
import App from "./App.jsx"

ReactDom.render(
    <App/>,
    document.querySelector("#reactRoot")
)