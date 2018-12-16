import React from 'react'
import Header from './components/header'
import IndexContent from './indexContent/indexContent'
import Footer from './components/footer'

class Root extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <IndexContent/>
                <Footer/>
            </div>
        );
    }
}

export default Root;