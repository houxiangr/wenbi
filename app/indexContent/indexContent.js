import React from 'react'
import '../style/components/content.less'
import EssayList from '../components/essayList'
import '../style/indexContent/indexContent.less'
import HobbyEssay from '../data/hobbyessay.json'
import EssayImage from '../components/essayImage'

class IndexContent extends React.Component {
    render() {
        let HobbyEssayImgs = [];
        HobbyEssay.forEach(function (value, index) {
            HobbyEssayImgs.push(<EssayImage key={index} imgUrl={value.essayImage} essayTitle={value.essayTitle}/>);
        });
        return (
            <div id="con">
                <EssayList title="热门文章"/>
                <section id="con-center" className="fl">
                    {HobbyEssayImgs}
                </section>
                <EssayList title="最新文章"/>
            </div>
        );
    }
}

export default IndexContent;