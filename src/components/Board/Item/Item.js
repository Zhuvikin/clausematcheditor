import React, {Component} from 'react';
import ContentEditable from 'react-contenteditable'
import './style.css';

export default class Item extends Component {

    onDragStart = (e, index) => {
        e.dataTransfer.setData('index', index);
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.dropEffect = 'move'
    };

    onDrop = (e, to) => {
        e.preventDefault();
        const from = parseInt(e.dataTransfer.getData('index'));
        return this.props.actions.moveItem(from, to);
    };

    onDragOver = (e) => {
        e.preventDefault();
    };

    updateItem(index, value) {
        return this.props.actions.updateItem(index + 1, value);
    }

    createItem(index) {
        return this.props.actions.createItem(index + 1);
    }

    deleteItem(index) {
        return this.props.actions.deleteItem(index + 1);
    }

    render() {
        const {text, lastItem, index} = this.props;

        return (
            <li className="item" draggable={true}
                onDragStart={(e) => this.onDragStart(e, index)}
                onDrop={(e) => this.onDrop(e, index)}
                onDragOver={(e) => this.onDragOver(e)}>
                <table>
                    <tbody>
                    <tr>
                        <td className="item-text">
                            <ContentEditable html={text} disabled={false}
                                             onChange={(e) => this.updateItem(index, e.target.value)}/>
                        </td>

                        <td className="button-add"
                            onClick={() => this.createItem(index)}>+
                        </td>

                        <td className={`button-remove ${lastItem ? 'last-item' : ''}`}
                            onClick={!lastItem ? () => this.deleteItem(index) : undefined}>-
                        </td>
                    </tr>
                    </tbody>
                </table>
            </li>
        )
    }
}