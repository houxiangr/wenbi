import React from 'react'
import '../../style/components/header/userContent.less'
import webserverRoute from '../../webserverRoute'
import axios from 'axios'

class UserNotLogin extends React.Component {
    render() {
        return (
            <div>
                <a href="/login" className="header-button">登陆</a>
                <a href="/register" className="header-button">注册</a>
            </div>
        );
    }
}

class UserLogin extends React.Component {
    render() {
        return (
            <div>
                <span>当前用户：</span>
                <a href="/userInfo" className="header-button">{this.props.username}</a>
                <a href="/editEssay" className="header-button">发布文章</a>
            </div>
        );
    }
}


class UserContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // 在用户是否登陆结果出来后再显示用户头部模块
            loginState: false,
            username: null
        }
    }

    componentWillMount() {
        let that = this;
        axios.post(webserverRoute.isLogin).then(function(res){
            let data = res.data;
            if(data.loginState){
                that.setState({
                    username: data.nickname
                });
            }
            that.setState({
                loginState: true
            });
        });
    }

    render() {
        const loginState = this.state.loginState;
        const username = this.state.username;
        let loginElement = "";
        if(loginState) {
            if(username == null){
                loginElement = <UserNotLogin/>;
                console.log(loginState);
            }else{
                loginElement = <UserLogin username={this.state.username}/>;
            }
        }
        return (
            <div id="user-con" className="fr">
                {
                    loginElement
                }
            </div>
        );
    }
}

export default UserContent;