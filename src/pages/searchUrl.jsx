import React from "react";
import Analyze from "../components/searchUrl/analyze";
import Historic from "../components/searchUrl/historic";
import { Route, Router, Routes } from "react-router-dom";

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
                <main>
                </main>
            } />
        </Routes>
    );
}
