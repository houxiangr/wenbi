import React from 'react'
import '../style/components/content.less'
import EssayList from '../components/essayList'
import '../style/indexContent/indexContent.less'
import HobbyEssay from '../data/hobbyessay.json'

class EssayImage extends React.Component {
    render() {
        return (
            <a href="#" className="hobby-essay">
                <img className="essay-img" src={this.props.imgUrl} alt={this.props.essayTitle} />
                <span className="essay-title" >{this.props.essayTitle}</span>
            </a>
        );
    }
}

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