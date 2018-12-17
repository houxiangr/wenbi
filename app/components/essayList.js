import React from 'react'
import '../style/components/essayList.less'

class EssayList extends React.Component {
    render() {
        return (
            <section id="essay-list" className="fl">
                <span id="essay-class-title">{this.props.title}</span>
                <ul>
                    <li><a href="#">文章1</a></li>
                    <li><a href="#">文章2</a></li>
                    <li><a href="#">文章3</a></li>
                    <li><a href="#">文章4</a></li>
                    <li><a href="#">文章5</a></li>
                    <li><a href="#">文章6</a></li>
                    <li><a href="#">文章7</a></li>
                    <li><a href="#">文章8</a></li>
                    <li><a href="#">文章9</a></li>
                    <li><a href="#">文章10</a></li>
                    <li><a href="#">文章11</a></li>
                    <li><a href="#">文章12</a></li>
                    <li><a href="#">文章13</a></li>
                    <li><a href="#">文章14</a></li>
                    <li><a href="#">文章15</a></li>
                </ul>
            </section>
        );
    }
}

export default EssayList;