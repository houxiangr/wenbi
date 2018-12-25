import React from 'react'
import Footer from './components/footer'
import './style/login.less'
import {render} from "react-dom"
import $ from 'jquery'
import Util from './util/util'
import Route from './webserverRoute'
import axios from 'axios'



class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            hintmsg:""
        };
        this.handleLogin=this.handleLogin.bind(this);
    }

    handleLogin(e){
        e.preventDefault();
        e.stopPropagation();
        let that = this;
        let formData = new FormData($("#login-form")[0]);
        let phonenumber = formData.get("phonenumber");
        let password = formData.get("password");
        if(phonenumber === ""||password === ""){
            that.setState({
                hintmsg:"输入不能为空"
            });
            return;
        }
        if(!Util.phoneNumIsFormat(phonenumber)){
            that.setState({
                hintmsg:"手机号格式不对"
            });
            return;
        }
        axios.post(Route.login,formData,{
            //跨域解决携带session问题
            withCredentials: false
        }).then(function(res){
            let data = res.data;
            if(data.state){
                that.setState({
                    hintmsg:data.msg
                });
                window.location.href = "/index";
            }else{
                that.setState({
                    hintmsg:data.msg
                });
            }
        }).catch(function(err){
            that.setState({
                hintmsg:"登陆失败"
            });
        });
    }
    render() {
        return (
            <div id="container">
                <div id="login-background">
                    <div id="login-module">
                        <h1>登陆</h1>
                        <form id="login-form">
                            <span>手机号:</span>
                            <input type="text" name="phonenumber"/>
                            <span>密码:</span>
                            <input type="password" name="password"/>
                            <button onClick={this.handleLogin}>登陆</button>
                        </form>
                        <span className="hint-message">{this.state.hintmsg}</span>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

render(
    <Login/>,
    document.getElementById('root')
);
