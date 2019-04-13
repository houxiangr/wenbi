import React from "react";
import '../style/components/essayImage.less'

class EssayImage extends React.Component {
    render() {
        return (
            <a href={"/essayView/essid/"+this.props.essayId} className="hobby-essay">
                <img className="essay-img" src={this.props.imgUrl} alt={this.props.essayTitle} />
                <span className="essay-title" >{this.props.essayTitle}</span>
            </a>
        );
    }
}

export default EssayImage;