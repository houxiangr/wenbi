import React from "react";
import '../style/components/essayWithDes.less'

class EssayWithDes extends React.Component {
    render() {
        return (
            <a href={"essayView/essid/"+this.props.essaydata.essayId} className="search-res-one">
                <img src={this.props.essaydata.essayCover} alt={this.props.essaydata.essayTitle} className="search-res-left"/>
                <div className="search-res-right">
                    <div className="search-res-title">{this.props.essaydata.essayTitle}</div>
                    <div className="search-res-des"  dangerouslySetInnerHTML={{__html: this.props.essaydata.essayContent}}/>
                </div>
            </a>
        );
    }
}

export default EssayWithDes;