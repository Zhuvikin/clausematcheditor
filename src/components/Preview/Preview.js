import React, {Component} from 'react';
import {AllHtmlEntities} from 'html-entities';
import './style.css'

export default class Preview extends Component {
    render() {
        const previewContent = JSON.stringify({
            data: this.props.items.map(i => AllHtmlEntities.encode(i.text))
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