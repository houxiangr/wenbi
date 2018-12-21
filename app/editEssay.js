import React from 'react'
import Footer from './components/footer'
import Header from './components/header'
import EditEssayContent from './editEssayContent/editEssayContent'
import {render} from 'react-dom'

class EditEssay extends React.Component {
    render() {
        return (
            <div id="container">
                <Header/>
                <EditEssayContent/>
                <Footer/>
            </div>
        );
    }
}

render(
    <EditEssay/>,
    document.getElementById('root')
);
