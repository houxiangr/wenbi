import React from 'react'
import '../style/components/content.less'
import EssayList from '../components/essayList'
import '../style/indexContent/indexContent.less'

class IndexContent extends React.Component {
    render() {
        return (
            <div id="con">
                <EssayList title="热门文章" />
                <section id="con-center" className="fl">
                    <span>推荐文章</span>
                </section>
                <EssayList title="最新文章" />
            </div>
        );
    }
}

export default IndexContent;