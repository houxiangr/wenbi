import React from 'react'
import '../style/searchResContent/searchResContent.less'
import SearchEssay from '../data/searchessay.json'
import EssayWithDes from '../components/essayWithDes'

class SearchResContent extends React.Component {
    render() {
        let searchResList = [];
        SearchEssay.forEach(function(value){
            searchResList.push(<EssayWithDes key={index} essaydata={value}/>)
        });
        return (
            <div id="search-res-box">
                <h1>搜索结果：</h1>
                {searchResList}
            </div>
        );
    }
}

export default SearchResContent;