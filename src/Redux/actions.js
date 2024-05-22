export const setCity = function (city) {
    return {
        type: 'SET_CITY',
        city
    };
};

export const setCityData = function(id,data) {
    return {
        type: 'SET_CITY_DATA',
        payload: {id, data}
    };
};

export const removeCity = (id) => ({
    type: 'REMOVE_CITY',
    id
});
