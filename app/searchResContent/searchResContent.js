import React from 'react'
import '../style/searchResContent/searchResContent.less'
import SearchEssay from '../data/searchessay.json'
import EssayWithDes from '../components/essayWithDes'
import axios from "axios";
import webserverRoute from "../webserverRoute";
import qs from 'qs'

class SearchResContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchResList: []
        };
    }
    componentWillMount(){
        let that = this;
        console.log(that.props.searchWord);
        axios.post(webserverRoute.searchEssay,qs.stringify({
            matchStr:that.props.searchWord
        })).then(function(res){
            let data = res.data;
            if(data.state){
                let searchResList = [];
                data.essays.forEach(function(value,index){
                    searchResList.push(<EssayWithDes key={index} essaydata={value}/>)
                });
                that.setState({
                    searchResList: searchResList
                });
            }
            console.log(that.state.searchResList);
        });
    }

    render() {
        return (
            <div id="search-res-box">
                <span>当前搜索词语：{this.props.searchWord}</span>
                <h1>搜索结果：</h1>
                {this.state.searchResList}
            </div>
        );
    }
}

export default SearchResContent;