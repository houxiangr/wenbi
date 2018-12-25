import React from 'react'
import Footer from './components/footer'
import './style/register.less'
import {render} from "react-dom"
import $ from 'jquery'
import Util from './util/util'
import webserverRoute from './webserverRoute'
import axios from 'axios'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hintMessage: ""
        };
        this.handleRegister=this.handleRegister.bind(this);
    }

    handleRegister(e){
        e.preventDefault();
        e.stopPropagation();
        let that = this;
        let formData = new FormData($("#register-form")[0]);
        let nickname = formData.get("nickname").trim();
        let phonenumber = formData.get("phonenumber").trim();
        let password = formData.get("password").trim();
        let dpassword = formData.get("dpassword").trim();
        if(nickname === ""||phonenumber === ""||password === ""||dpassword === ""){
            that.setState({
                hintMessage: "输入不能为空"
            });
            return;
        }
        if(nickname.length>20){
            that.setState({
                hintMessage: "昵称长度不能超过二十"
            });
            return;
        }
        if(!Util.phoneNumIsFormat(phonenumber)){
            that.setState({
                hintMessage: "手机号格式不对"
            });
            return;
        }
        if(password !== dpassword){
            that.setState({
                hintMessage: "两次密码输入不一样"
            });
            return;
        }
        formData.set("nickname", nickname);
        formData.set("phonenumber", phonenumber);
        formData.set("password", password);
        formData.delete("dpassword");
        axios.post(webserverRoute.register,formData).then(function(res){
            let data = res.data;
            if(data.state){
                this.setState({
                    hintMessage: data.msg
                });
            }else{
                this.setState({
                    hintMessage: data.msg
                });
            }
        }).catch(function(err){
            that.setState({
                hintMessage: "注册失败"
            });
        });
    }
    render() {
        return (
            <div id="container">
                <div id="register-background">
                    <div id="register-module">
                        <h1>注册</h1>
                        <form id="register-form">
                            <span>昵称:</span>
                            <input type="text" name="nickname"/>
                            <span>手机号:</span>
                            <input type="text" name="phonenumber"/>
                            <span>密码:</span>
                            <input type="password" name="password"/>
                            <span>二次密码:</span>
                            <input type="password" name="dpassword"/>
                            <button onClick={this.handleRegister}>注册</button>
                        </form>
                    </div>
                    <span className="hint-message">{this.state.hintMessage}</span>
                </div>
                <Footer/>
            </div>
        );
    }
}

render(
    <Register/>,
    document.getElementById('root')
);


