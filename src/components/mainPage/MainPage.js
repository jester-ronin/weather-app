import React from 'react';
import SearchInput from '../searchInput/SearchInput';
import './mainPage.css';
import WeatherCard from '../card/WeatherCard';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const MainPage = () => {
    const imagesUrl = useSelector(state => state.reducer.imagesUrl)
    const cities = useSelector(state => state.reducer.cities);

    function temperatureConverter(cities) {
        let result = cities.data.main.temp - 273.15;
        return Math.round(result)
    }

    function selectionPictures(cities) {
        if (cities.data) {
            for (let key in imagesUrl) {
                if (key === cities.data.weather[0].main) {
                    return imagesUrl[key];
                }
            }
        }
        return null;
    }

    return (
        <Container>
            <header className="App-header">
            </header>
            <Row>
                <Col xs={7}>
                    <img
                        src="https://openweathermap.org/themes/openweathermap/assets/img/mobile_app/android-app-top-banner.png"
                        className="App-logo"
                        alt="logo"
                    />
                    <SearchInput />
                </Col>
                <Col xs={5}>                   
                    {cities && cities.map(city => (
                        <WeatherCard
                            key={city.id}
                            name={city.name}
                            weather={city.data ? city.data.weather[0].main : null}
                            temperature={city.data ? temperatureConverter(city) + "° " : null}
                            image={selectionPictures(city)}
                        />
                    ))}
                </Col>
            </Row>
            <Row>
                This is a web application for viewing the weather in any city
            </Row>
        </Container>
    )
}


export default MainPage;
