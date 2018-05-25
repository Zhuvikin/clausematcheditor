import React, {Component} from 'react';
import './style.css'

function htmlspecialchars(str) {
    var map = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#39;" // ' -> &apos; for XML only
    };
    return str.replace(/[&<>"']/g, function (m) {
        return map[m];
    });
}

export default class Preview extends Component {
    render() {
        const previewContent = JSON.stringify({
            data: this.props.items.map(i => htmlspecialchars(i.text))
        }, null, '  ');

        return (
            <div className="preview">
                <div className="code-wrapper">
                    <div className="code">
                        <pre dangerouslySetInnerHTML={{__html: previewContent}}/>
                    </div>
                </div>
            </div>
        )
    }
}