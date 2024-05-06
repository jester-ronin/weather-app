const initialState = {
    city: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CITY':
            return {
                ...state,
                city: action.city,
            };
        case 'SET_JSON_DATA':
            return{
                ...state,
                jsonData: action.jsonData,
            };
        default:
            return state;

    }
};

export default reducer;