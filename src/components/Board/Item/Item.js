import React, {Component} from 'react';
import ContentEditable from 'react-contenteditable'
import './style.css';

export default class Item extends Component {
    render() {
        const {text, lastItem, index} = this.props;

        return (
            <li className="item">
                <table>
                    <tbody>
                    <tr>
                        <td className="item-text">
                            <ContentEditable
                                html={text}
                                disabled={false}
                                onChange={e => this.props.actions.updateItem(index + 1, e.target.value)}/>
                        </td>

                        <td className="button-add"
                            onClick={() => this.props.actions.createItem(index + 1)}>+
                        </td>
                        <td className={`button-remove ${lastItem ? 'last-item' : ''}`}
                            onClick={lastItem ? void(0) : () => this.props.actions.deleteItem(index + 1)}>-
                        </td>
                    </tr>
                    </tbody>
                </table>
            </li>
        )
    }
}