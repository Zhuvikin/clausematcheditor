import * as types from '../constants/ActionTypes'

export const createItem = index => ({type: types.CREATE_ITEM, index});
export const deleteItem = index => ({type: types.DELETE_ITEM, index});
export const updateItem = (index, text) => ({type: types.UPDATE_ITEM, index, text});
export const moveItem = (fromIndex, toIndex) => ({type: types.MOVE_ITEM, fromIndex, toIndex});