import React from 'react'

class EssayList extends React.Component {
    render() {
        return (
            <section id="essay-list" className="fl">
                <span>{this.props.title}</span>
                <ul>
                    <li>文章</li>
                    <li>文章</li>
                    <li>文章</li>
                    <li>文章</li>
                    <li>文章</li>
                    <li>文章</li>
                    <li>文章</li>
                </ul>
            </section>
        );
    }
}

export default EssayList;