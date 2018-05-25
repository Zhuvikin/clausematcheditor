import {
    CREATE_ITEM,
    UPDATE_ITEM,
    DELETE_ITEM
} from '../constants/ActionTypes'

const initialState = [
    {
        text: `<i>Hello</i> world...<br><br>This is some content<br><br>Isn't it awesome?<br><br>I like it...`
    }
];

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_ITEM:
            return [
                ...state.slice(0, action.index),
                {
                    text: '',
                    index: action.index
                },
                ...state.slice(action.index)
            ];

        case UPDATE_ITEM:
            return state.map((item, index) => {
                if (index !== action.index - 1) {
                    return item;
                }
                return {
                    ...item,
                    text: action.text
                };
            });

        case DELETE_ITEM:
            return [
                ...state.slice(0, action.index - 1),
                ...state.slice(action.index)
            ];

        default:
            return state
    }
}
