import React from 'react'
import '../../style/components/header/userContent.less'

class UserContent extends React.Component {
    render() {
        return (
            <div id="user-con" className="fr">
                <a href="#" className="header-button">登陆</a>
                <a href="#" className="header-button">注册</a>
            </div>
        );
    }
}

export default UserContent;