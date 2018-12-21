import React from 'react'
import '../style/userInfoContent/userInfoContent.less'
import HobbyEssay from '../data/hobbyessay.json'
import SearchEssay from '../data/searchessay.json'
import EssayImage from "../components/essayImage";
import EssayWithDes from "../components/essayWithDes";

class UserInfoContent extends React.Component {
    render(){
        let HobbyEssayImgs = [];
        HobbyEssay.forEach(function (value, index) {
            HobbyEssayImgs.push(<EssayImage key={index} imgUrl={value.essayImage} essayTitle={value.essayTitle}/>);
        });
        let searchResList = [];
        SearchEssay.forEach(function(value, index){
            searchResList.push(<EssayWithDes key={index} essaydata={value}/>)
        });
        return (
            <div id="user-info-box">
                <div id="collect-essay">
                    <h1>收藏的文章：</h1>
                    {HobbyEssayImgs}
                </div>
                <div id="own-essay">
                    <h1>自己的创作：</h1>
                    {searchResList}
                </div>
            </div>
        );
    }
}

export default UserInfoContent;