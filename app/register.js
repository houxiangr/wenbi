import React from 'react'
import Footer from './components/footer'
import './style/register.less'
import {render} from "react-dom"

class Register extends React.Component {
    render() {
        return (
            <div id="container">
                <div id="register-background">
                    <div id="register-module">
                        <h1>注册</h1>
                        <form action="#">
                            <span>昵称:</span>
                            <input type="text" name="nickname"/>
                            <span>用户名:</span>
                            <input type="text" name="username"/>
                            <span>密码:</span>
                            <input type="text" name="password"/>
                            <span>二次密码:</span>
                            <input type="text" name="dpassword"/>
                            <button>注册</button>
                        </form>
                    </div>
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


