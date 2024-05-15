import { useSelector } from 'react-redux';

function Converter() {
    let jsonData = useSelector(state => state.reducer.jsonData);

    const imagesUrl = {
        Clouds: 'https://i.pinimg.com/736x/56/af/e5/56afe5a3c9cb93d0c7f2477222b7ab12.jpg',
        Rain: 'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather07-512.png',
        Snow: 'https://static.vecteezy.com/system/resources/previews/007/488/951/original/light-snow-color-icon-winter-snowy-weather-cloud-and-snowflake-weather-forecast-isolated-illustration-vector.jpg',
        Thunderstorm: 'https://cdn.dribbble.com/users/2120934/screenshots/6193517/17_tstorm.gif',
        Drizzle: 'https://cdn-icons-png.flaticon.com/512/4837/4837678.png',
    }
 
    if (!jsonData) {
        console.log("JSON not found (Converter)");
    }

    function temperatureConverter(jsonData) {  
        let result = jsonData.main.temp - 273.15;
        result.math.round()
        return result
    } 


    function selectionPictures(jsonData) {
        for (let key in imagesUrl[0]) {
            console.log(jsonData.weather[0].main)
            if (key === jsonData.weather[0].main) {
                return imagesUrl[0][key];
            }
        }
        return null;
    }

} 

export default Converter;
