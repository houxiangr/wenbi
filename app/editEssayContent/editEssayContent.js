import React from 'react'
import '../style/editEssayContent/editEssayContent.less'
import EditorConvertToHTML from '../components/editorConvertToHTML'

class EditEssayContent extends React.Component {

    render(){
        return (
            <div id="edit-essay-box">
                <h1>创建文章：</h1>
                <form action="#">
                    <div>
                        <span>文章标题：</span>
                        <input type="text" name="essay-title"/>
                    </div>
                    <div>
                        <span>文章内容：</span>
                        <EditorConvertToHTML/>
                    </div>
                    <button>提交文章</button>
                </form>
            </div>
        );
    }
}

export default EditEssayContent;
