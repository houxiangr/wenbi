import React from 'react'
import '../style/editEssayContent/editEssayContent.less'
import EditorConvertToHTML from '../components/editorConvertToHTML'
import $ from 'jquery'
import axios from 'axios'
import webserverRoute from '../webserverRoute'

class EditEssayContent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            essayContent: "",
            hintmsg: ""
        };
        this.submitEssayHandle=this.submitEssayHandle.bind(this);
        this.getContentHandle=this.getContentHandle.bind(this);
    }

    submitEssayHandle(e){
        e.preventDefault();
        e.stopPropagation();
        let that = this;
        let formData = new FormData($("#edit-essay-form")[0]);
        let essayTitle = formData.get("essay-title").trim();
        let essayContent = this.state.essayContent.trim();
        if(essayTitle === ""||essayContent === ""){
            that.setState({
                hintmsg: "输入不能为空"
            });
        }
        if(essayTitle.length > 20){
            that.setState({
                hintmsg: "文章标题太长"
            });
        }
        formData.append("essayContent",essayContent);
        formData.set("essayTitle",essayTitle);
        axios.post(webserverRoute.addEssay,formData).then(function(res){
            let data = res.data;
            if(data.state){
                that.setState({
                    hintmsg: data.msg
                });
            }else{
                that.setState({
                    hintmsg: data.msg
                });
            }
        }).catch(function(err){
            that.setState({
                hintmsg: "上传失败"
            });
        });
    }

    getContentHandle(content){
        this.setState({
            essayContent: content
        });
    }

    render(){
        return (
            <div id="edit-essay-box">
                <h1>创建文章：</h1>
                <form id="edit-essay-form">
                    <div>
                        <span>文章标题：</span>
                        <input type="text" name="essay-title"/>
                    </div>
                    <div>
                        <span>文章内容：</span>
                        <EditorConvertToHTML getContentHandle={this.getContentHandle}/>
                    </div>
                    <button onClick={this.submitEssayHandle}>提交文章</button>
                    <span>{this.state.hintmsg}</span>
                </form>
            </div>
        );
    }
}

export default EditEssayContent;
