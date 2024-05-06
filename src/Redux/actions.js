export const setCity = function (city) {
    return {
        type: 'SET_CITY',
        city
    };
};

export const setJsonData = function(jsonData) {
    return {
        type: 'SET_JSON_DATA',
        jsonData
    };
};
