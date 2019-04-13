import React from 'react'
import '../style/userInfoContent/userInfoContent.less'
import HobbyEssay from '../data/hobbyessay.json'
import SearchEssay from '../data/searchessay.json'
import EssayImage from "../components/essayImage";
import EssayWithDes from "../components/essayWithDes";
import axios from "axios";
import webserverRoute from "../webserverRoute";

class UserInfoContent extends React.Component {

    constructor(props){
        super(props);
        let that = this;
        that.state = {
            //已收藏文章数组
            HobbyEssayImgs: []
        }
    }

    componentWillMount() {
        let that = this;
        axios.post(webserverRoute.getUserCollect).then(function(res){
            let data = res.data;
            let HobbyEssayImgs = [];
            data.essays.forEach(function (value,index) {
                HobbyEssayImgs.push(<EssayImage key={index} essayId={value.essayId} imgUrl={value.essayCover} essayTitle={value.essayTitle}/>);
            });
            that.setState({
                HobbyEssayImgs:HobbyEssayImgs
            });
        });

        axios.post(webserverRoute.getUserCreate).then(function(res){
            let data = res.data;
            let searchResList = [];
            data.essays.forEach(function (value,index) {
                value.essayContent = value.essayContent.replace("<img[^>]+/>","");
                value.essayContent = value.essayContent.substr(0,100);
                searchResList.push(<EssayWithDes key={index} essaydata={value}/>)
            });
            that.setState({
                searchResList:searchResList
            });
        });
    }

    render(){
        return (
            <div id="user-info-box">
                <div id="collect-essay">
                    <h1>收藏的文章：</h1>
                    {this.state.HobbyEssayImgs}
                </div>
                <div id="own-essay">
                    <h1>自己的创作：</h1>
                    {this.state.searchResList}
                </div>
            </div>
        );
    }
}

export default UserInfoContent;