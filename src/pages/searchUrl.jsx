import React from "react";
import Analyze from "../components/searchUrl/analyze";
import Historic from "../components/searchUrl/historic";

export default function SearchUrl() {
    return (
        <main className="search">
            <Analyze />
            <Historic />
        </main>
    );
}
