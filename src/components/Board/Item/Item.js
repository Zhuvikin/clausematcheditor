import React, {Component} from 'react';
import ContentEditable from 'react-contenteditable'
import './style.css';

export default class Item extends Component {
    render() {
        const {text, lastItem, index, actions} = this.props;

        const onDragStart = (e, index) => {
            e.dataTransfer.setData('index', index);
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.dropEffect = 'move'
        };

        const onDrop = (e, to) => {
            e.preventDefault();
            const from = parseInt(e.dataTransfer.getData('index'));
            return actions.moveItem(from, to);
        };

        const onDragOver = (e) => {
            e.preventDefault();
        };

        return (
            <li className="item" draggable={true}
                onDragStart={(e) => onDragStart(e, index)}
                onDrop={(e) => onDrop(e, index)}
                onDragOver={onDragOver}>
                <table>
                    <tbody>
                    <tr>
                        <td className="item-text">
                            <ContentEditable
                                html={text}
                                disabled={false}
                                onChange={e => actions.updateItem(index + 1, e.target.value)}/>
                        </td>
                        <td className="button-add"
                            onClick={() => actions.createItem(index + 1)}>+
                        </td>
                        <td className={`button-remove ${lastItem ? 'last-item' : ''}`}
                            onClick={!lastItem ? () => actions.deleteItem(index + 1) : undefined}>-
                        </td>
                    </tr>
                    </tbody>
                </table>
            </li>
        )
    }
}