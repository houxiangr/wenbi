import React from 'react'
import Footer from './components/footer'
import Header from './components/header'


class Root extends React.Component {
    render() {
        return (
            <div id="container">
                <Header/>
                <Footer/>
            </div>
        );
    }
}

export default Root;