import React from "react"
import { HashRouter, Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./pages/Home/Home"

function App() {
    return (
        <HashRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </HashRouter>
    )
}

export default App