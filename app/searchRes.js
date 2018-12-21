import React from 'react'
import Footer from './components/footer'
import Header from './components/header'
import SearchResContent from './searchResContent/searchResContent'
import {render} from "react-dom";

class SearchRes extends React.Component {
    render() {
        return (
            <div id="container">
                <Header/>
                <SearchResContent/>
                <Footer/>
            </div>
        );
    }
}

render(
    <SearchRes/>,
    document.getElementById('root')
);
