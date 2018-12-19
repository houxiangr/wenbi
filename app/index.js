import React from 'react'
import Header from './components/header'
import IndexContent from './indexContent/indexContent'
import Footer from './components/footer'
import {render} from "react-dom";

class Index extends React.Component {
    render() {
        return (
            <div id="container">
                <Header/>
                <IndexContent/>
                <Footer/>
            </div>
        );
    }
}

render(
    <Index/>,
    document.getElementById('root')
);