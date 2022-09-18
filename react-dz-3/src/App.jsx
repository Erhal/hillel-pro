import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./screens/Home";
import Page404 from "./screens/Page-404";
import UserPage from "./screens/UserPage";


function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/user/:id" element={<UserPage/>}/>
            <Route path="*" element={<Page404/>}/>
        </Routes>
    );
}

export default App;
