const initialState = {
    city: 'lvov',
    imagesUrl : {
        Clouds: 'https://i.pinimg.com/736x/56/af/e5/56afe5a3c9cb93d0c7f2477222b7ab12.jpg',
        Rain: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Weather-sun-clouds-rain.svg/1024px-Weather-sun-clouds-rain.svg.png',
        Snow: 'https://static.vecteezy.com/system/resources/previews/007/488/951/original/light-snow-color-icon-winter-snowy-weather-cloud-and-snowflake-weather-forecast-isolated-illustration-vector.jpg',
        Thunderstorm: 'https://cdn.dribbble.com/users/2120934/screenshots/6193517/17_tstorm.gif',
        Drizzle: 'https://cdn-icons-png.flaticon.com/512/4837/4837678.png',
        Clear: 'https://static-00.iconduck.com/assets.00/weather-clear-symbolic-icon-2048x2048-v4afvu7m.png',
    }
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