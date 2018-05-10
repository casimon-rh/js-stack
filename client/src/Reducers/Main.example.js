const initialState = {
  data:{}
};

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_SOMETHING':
            return {
                ...state,
                data:action.data
            };
        default:
            return state;
    }
};
