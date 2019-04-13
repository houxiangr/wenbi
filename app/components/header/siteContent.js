import React from 'react'
import '../../style/components/header/siteContent.less'

class SiteContent extends React.Component {
    render() {
        return (
            <div id="site-con" className="fl">
                <span id="search-box">
                    <form action="/searchRes" method="get">
                        <input type="text" className="input-box" placeholder="输入关键字进行搜索" name="searchWord"/>
                        <button className="search-button"><i className="search-img"/></button>
                    </form>
                </span>
                <span>
                    <a href="/index">返回主页</a>
                </span>
            </div>
        );
    }
}

export default SiteContent;