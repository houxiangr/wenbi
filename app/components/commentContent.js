import React from "react";
import '../style/components/commentContent.less'

//评论运动的定时器
let oneCommentHeight = undefined;

class CommentContent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            distance: 0,
            moveTimer: undefined

    };
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    componentDidMount() {
        let that = this;
        let oneComment = that.refs.oneComment;
        oneCommentHeight = oneComment.offsetHeight;
        that.commentAnimate();
    }

    componentWillUnmount(){
        cancelAnimationFrame(this.state.moveTimer);
    }

    //鼠标悬停暂停评论
    handleMouseEnter(){
        cancelAnimationFrame(this.state.moveTimer);
    }

    //鼠标离开继续动画
    handleMouseOut(){
        var that = this;
        that.commentAnimate();
    }

    commentAnimate(){
        let that = this;
        that.move();
        if(that.state.distance < (that.props.commentHeight+oneCommentHeight)){
            that.setState({
                moveTimer : requestAnimationFrame(function(){
                    that.commentAnimate();
                })
            });
        }else{
            cancelAnimationFrame(that.state.moveTimer);
            that.props.cleanOutComment(that.props.commentId);
        }
    }


    move(){
        let that = this;
        let distance = that.state.distance+1;
        that.setState({
            distance: distance
        })
    }

    render() {
        return (
            <div className="comment-content" ref="oneComment" style={{left: this.props.commentLeft+'px',transform: 'translateY('+this.state.distance+'px)'}}
                 onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseOut}>
                <div className="commet-author">{this.props.commentPeople}：</div>
                <div
                    className="comment-text">{this.props.commentContent}
                </div>
                <div className="comment-date">{this.props.commentDate}</div>
            </div>
        );
    }
}

export default CommentContent;