import React from 'react'
import Footer from './components/footer'
import Header from './components/header'
import UserInfoContent from './userInfoContent/userInfoContent'
import {render} from 'react-dom'

class UserInfo extends React.Component {
    render() {
        return (
            <div id="container">
                <Header mustLogin={true}/>
                <UserInfoContent/>
                <Footer/>
            </div>
        );
    }
}

render(
    <UserInfo/>,
    document.getElementById('root')
);