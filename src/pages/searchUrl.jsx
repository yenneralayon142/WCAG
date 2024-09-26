import React from "react";
import { Route, Routes } from "react-router-dom";

// Components
import Analyze from "../components/searchUrl/analyze";
import Historic from "../components/searchUrl/historic";
import Url from "../components/url/url";

export default function SearchUrl() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <main className="search">
                        <Analyze />
                        <Historic />
                    </main>
                }
            />
            <Route path="/:id" element={
                <main className="url__page">
                    <Url />
                </main> 
            } />
        </Routes>
    );
}
