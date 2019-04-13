import React from 'react'
import '../style/components/essayList.less'

class EssayListOne extends React.Component {
    render() {
        return (
            <li><a href={"/essayView/essid/"+this.props.essayId}>{this.props.essayTitle}</a></li>
        );
    }
}

class EssayList extends React.Component {
    render() {
        let essayLis = [];
        //单个文章标签组合
        console.log(this.props.essayDatas);
        this.props.essayDatas.forEach(function(value,index){
            essayLis.push(<EssayListOne key={index} essayTitle={value.essayTitle} essayId={value.essayId}/>);
        });
        return (
            <section id="essay-list" className="fl">
                <span id="essay-class-title">{this.props.title}</span>
                <ul>
                    {essayLis}
                </ul>
            </section>
        );
    }
}

export default EssayList;