import React from "react";
import Header from './Header';
import SearchBar from './SearchBar';

function Home () {
    return <div className="w-full h-auto flex flex-col items-center justify-center bg-primary">
        <Header />
        <SearchBar />
    </div>
}

export default Home;
