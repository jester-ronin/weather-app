import React from 'react';
import SearchInput from '../searchInput/SearchInput';
import './mainPage.css';
import WeatherCard from '../card/WeatherCard';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
        <Container>
            <header className="App-header">
            </header>
            <Row>
                <Col xs={8}>
                    <img
                        src="https://openweathermap.org/themes/openweathermap/assets/img/mobile_app/android-app-top-banner.png"
                        className="App-logo"
                        alt="logo"
                    />
                    <SearchInput />
                </Col>
                <Col xs={4}>
                    {jsonData && (
                        <WeatherCard
                            name={jsonData.name}
                            weather={jsonData.weather[0].main}
                            temperature={temperatureConverter(jsonData) + "° "}
                            image={selectionPictures(jsonData)}
                        />
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export default MainPage;
