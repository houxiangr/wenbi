import React from 'react'
import Header from './components/header'
import Content from './components/content'
import Footer from './components/footer'

class Root extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}

export default Root;