import React from 'react'
import '../style/components/header.less'
import UserContent from './header/userContent'
import SiteContent from './header/siteContent'

class Header extends React.Component {
    render() {
        return (
            <header>
                <SiteContent/>
                <UserContent/>
            </header>
        );
    }
}

export default Header;