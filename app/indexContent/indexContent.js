import React from 'react'
import '../style/components/content.less'
import EssayList from '../components/essayList'
import '../style/indexContent/indexContent.less'
import HobbyEssay from '../data/hobbyessay.json'
import EssayImage from '../components/essayImage'
import webserverRoute from '../webserverRoute'
import axios from 'axios'

let hotEssay=[];
let lastEssay=[];
class IndexContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hotEssayList:"",
            lastEssayList:""
        };
        this.getLastEssay();
        this.getHotEssay();
    }
    //获取最新文章
    getLastEssay(){
        let that = this;
        axios.post(webserverRoute.lastEssay).then(function(res){
            lastEssay = res.data.essays;
            let lastEssayList = <EssayList title="最新文章" essayDatas={lastEssay}/>;
            // lastEssayList.push(<EssayList title="最新文章" essayDatas={lastEssay}/>);
            that.setState({
                lastEssayList:lastEssayList
            })
        });
    }
    //获取热门文章
    getHotEssay(){
           let that = this;
        axios.post(webserverRoute.hotEssay).then(function(res){
            hotEssay = res.data.essays;
            let hotEssayList = <EssayList title="热门文章" essayDatas={hotEssay}/>;
            // hotEssayList.pussh(<EssayList title="热门文章" essayDatas={hotEssay}/>);
            that.setState({
                hotEssayList:hotEssayList
            })
        });
    }
    render() {
        let HobbyEssayImgs = [];
        HobbyEssay.forEach(function (value, index) {
            HobbyEssayImgs.push(<EssayImage key={index} imgUrl={value.essayImage} essayTitle={value.essayTitle}/>);
        });
        return (
            <div id="con">
                {this.state.hotEssayList}
                <section id="con-center" className="fl">
                    {HobbyEssayImgs}
                </section>
                {this.state.lastEssayList}
            </div>
        );
    }
}

export default IndexContent;