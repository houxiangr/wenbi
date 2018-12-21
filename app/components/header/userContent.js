import React from 'react'
import '../../style/components/header/userContent.less'

class UserNotLogin extends React.Component {
    render() {
        return (
            <div>
                <a href="#" className="header-button">登陆</a>
                <a href="#" className="header-button">注册</a>
            </div>
        );
    }
}

class UserLogin extends React.Component {
    render() {
        return (
            <div>
                <span>当前用户：</span>
                <a href="#" className="header-button">{this.props.username}</a>
                <a href="#" className="header-button">发布文章</a>
            </div>
        );
    }
}


class UserContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "houxiang"
        }
    }
    render() {
        const username = this.state.username;
        return (
            <div id="user-con" className="fr">
                {
                    username == null
                    ? (
                        <UserNotLogin/>
                    )
                    :(
                        <UserLogin username={this.state.username}/>
                    )
                }
            </div>
        );
    }
}

export default UserContent;