import React, {Component} from 'react';
import Board from './Board/Board';
import Preview from './Preview/Preview';
import './style.css'

export default class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Board items={this.props.items} actions={this.props.actions}/>
                <Preview items={this.props.items}/>
            </div>
        )
    }
}