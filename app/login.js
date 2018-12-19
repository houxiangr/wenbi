import React from 'react'
import Footer from './components/footer'
import './style/login.less'
import {render} from "react-dom";

class Login extends React.Component {
    render() {
        return (
            <div id="container">
                <div id="login-background">
                    <div id="login-module">
                        <h1>登陆</h1>
                        <form action="#">
                            <span>用户名:</span>
                            <input type="text" name="username"/>
                            <span>密码:</span>
                            <input type="text" name="password"/>
                            <button>登陆</button>
                        </form>
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
