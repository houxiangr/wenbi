import React, { Component } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../style/components/editor.less'

class EditorConvertToHTML extends Component {
    constructor(props){
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        };
    }

    onEditorStateChange(editorState) {
        console.log(editorState.getCurrentContent());
        this.props.getContentHandle(draftToHtml(convertToRaw(editorState.getCurrentContent())));
        this.setState({
            editorState: editorState
        });
    };

    render() {
        const { editorState } = this.state;
        return (
            <div>
                <Editor
                    editorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={this.onEditorStateChange.bind(this)}
                />
            </div>
        );
    }

    // formSubmit() {
    //     // 转换成HTML格式
    //     var editorContent = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
    //     this.props.saveSys({roomnotes: editorContent})
    // }

    // componentWillReceiveProps(nextProps) {
    //     if (this.props.getSysResult!==nextProps.getSysResult && nextProps.getSysResult.data) {
    //         // 匹配富文本编辑器格式，回显保存的内容
    //         const contentBlock = htmlToDraft(nextProps.getSysResult.data.roomnotes);
    //         if (contentBlock) {
    //             const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
    //             const editorState = EditorState.createWithContent(contentState);
    //             this.setState({ editorState })
    //         }
    //     }
    // }
}

export default EditorConvertToHTML;