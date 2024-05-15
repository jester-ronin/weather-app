import React from 'react'
import SearchInput from '../searchInput/SearchInput';
import './mainPage.css'
import WeatherCard from '../card/WeatherCard';
import { useSelector } from 'react-redux';


export const MainPage = () => {
    let jsonData = useSelector(state => state.reducer.jsonData);
    let imagesUrl = useSelector(state => state.reducer.imagesUrl)

    if (!jsonData) {
        console.log("JSON not found (Main Page)")
    }


    function temperatureConverter(jsonData) {
        let result = jsonData.main.temp - 273.15;
        return Math.round(result)
    }

    function selectionPictures(jsonData) {
        for (let key in imagesUrl) {
            if (key === jsonData.weather[0].main) {
                console.log(imagesUrl[key])
                return imagesUrl[key];
            }
        }
        return null;
    }

    return (
        <div>
            <div className="MainPage">
                <header className="App-header">
                </header>
                <img
                    src="https://openweathermap.org/themes/openweathermap/assets/img/mobile_app/android-app-top-banner.png"
                    className="App-logo"
                    alt="logo"
                />
                <SearchInput />
                {jsonData && (
                    <WeatherCard
                        name={jsonData.name}
                        weather={jsonData.weather[0].main}
                        temperature={temperatureConverter(jsonData) + "° "}
                        image={selectionPictures(jsonData)}
                    />
                )}
            </div >
        </div>
    )
}

export default MainPage;