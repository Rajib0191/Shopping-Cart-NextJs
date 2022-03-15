const favouriteReuder = (favouriteState = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM': {
            const productExist = favouriteState.find(item => item.id === action.payload.id);
            if (productExist) {
                return [...favouriteState]
            } else {
                return [...favouriteState, { ...action.payload }]
            }
        }
        case 'REMOVE_ITEM_FROM_FAVOURITE': {
            return favouriteState.filter(item => item.id !== action.payload.id);
        }
    }

}
export default favouriteReuder;