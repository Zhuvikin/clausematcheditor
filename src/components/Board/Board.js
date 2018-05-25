import React, {Component} from 'react';
import Item from './Item/Item';
import './style.css';

export default class Board extends Component {
    render() {
        const lastItem = this.props.items.length <= 1;
        return (
            <div className="board">
                <ul>
                    {this.props.items.map((i, index) => {
                        return <Item text={i.text}
                                     lastItem={lastItem}
                                     key={index}
                                     index={index}
                                     actions={this.props.actions}/>
                    })}
                </ul>
            </div>
        )
    }
}