import React from 'react'
import Footer from './components/footer'
import Header from './components/header'
import EssayViewContent from './essayViewContent/essayViewContent'
import {render} from 'react-dom'


class EssayView extends React.Component {
    render() {
        return (
            <div id="container">
                <Header/>
                <EssayViewContent/>
                <Footer/>
            </div>
        );
    }
}

render (
    <EssayView/>,
    document.getElementById('root')
);
