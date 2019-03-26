export const addToCard = obj => ({
    type: 'ADD_BOOK',
    payload: obj,
});
export const removeFromCard = id => ({
    type: 'REMOVE_BOOK',
    payload: id,
});