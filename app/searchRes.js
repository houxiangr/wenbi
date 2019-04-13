import React from 'react'
import Footer from './components/footer'
import Header from './components/header'
import SearchResContent from './searchResContent/searchResContent'
import {render} from "react-dom";


let searchWord;
class SearchRes extends React.Component {
    componentWillMount(){
        // 获得URL参数
        const query_params = new URLSearchParams(location.search);
        searchWord = query_params .get('searchWord');
        console.log(searchWord);
    }
    render() {
        return (
            <div id="container">
                <Header/>
                <SearchResContent searchWord={searchWord}/>
                <Footer/>
            </div>
        );
    }
}

render(
    <SearchRes/>,
    document.getElementById('root')
);
