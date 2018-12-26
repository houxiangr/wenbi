import React from 'react'
import '../style/components/content.less'
import '../style/essayViewContent/essayViewContent.less'
import Util from '../util/util'
import axios from 'axios'
import webserverRoute from '../webserverRoute'
import $ from 'jquery'

class EssayViewContent extends React.Component {
    constructor(props) {
        super(props);
        // 获取路由中的essid参数
        let siteUrl = window.location.href;
        let parameterArr = Util.getGetUrlParameters(siteUrl, "essid");
        this.state = {
            essayid: parameterArr["essid"],
            essay: ""
        };
    }

    componentDidMount(){
        let that = this;
        axios.post(webserverRoute.viewEssay,{
            essid:that.state.essayid
        }).then(function(res){
            that.setState({
                essay:res.data
            });
            $("#essay-content").html(that.state.essay.essayContent);
        }).catch(function(err){
            // TODO 错误处理
            console.log(err);
        })
    }

    render() {
        return (
            <div id="con">
                <div id="essay-box" className="fl">
                    <div id="essay-history">
                        <span>文章修改历史：</span>
                        <a href="#" className="history-version current-version">1</a>
                        <a href="#" className="history-version">2</a>
                        <a href="#" className="history-version">3</a>
                        <a href="#" className="history-version">4</a>
                    </div>
                    <h1 id="essay-title" className="ml10">{this.state.essay.essayTitle}</h1>
                    <div id="essay-author" className="ml20">{this.state.essay.authorName}</div>
                    <div id="essay-date" className="ml20">{this.state.essay.essayDate}</div>
                    <div id="essay-content"/>
                </div>
                <div id="comment-box" className="fr">
                    <div className="comment-content">
                        <div className="commet-author">评论人一：</div>
                        <div
                            className="comment-text">评论内容,评论内容,评论内容,评论内容,评论内容,评论内容,评论内容,评论内容,评论内容,评论内容评论内容,评论内容,评论内容,评论内容,评论内容评论内容,评论内容,评论内容,评论内容,评论内容
                        </div>
                        <div className="comment-date">2018-9-22 11:11:11</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EssayViewContent;