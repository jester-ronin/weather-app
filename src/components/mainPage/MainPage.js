import React from 'react';
import SearchInput from '../searchInput/SearchInput';
import './mainPage.css';
import WeatherCard from '../card/WeatherCard';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { removeCity } from '../../Redux/actions';
import useWindowWidth from '../../hooks/useWindowWidth';
import WeatherCarousel from '../WeatherCarousel/WeatherCarousel';


export const MainPage = () => {
    const dispatch = useDispatch();
    const imagesUrl = useSelector(state => state.reducer.imagesUrl);
    const cities = useSelector(state => state.reducer.cities);
    const width = useWindowWidth();

    function temperatureConverter(city) {
        let result = city.data.main.temp - 273.15;
        return Math.round(result);
    }

    function selectionPictures(city) {
        if (city.data) {
            for (let key in imagesUrl) {
                if (key === city.data.weather[0].main) {
                    return imagesUrl[key];
                }
            }
        }
        return null;
    }

    function handleRemoveCity(id) {
        dispatch(removeCity(id));
    }

    return (
        <Container fluid>
            {width > 768 ? (
                <Row>
                    <Col xs={6} className='logo-col'>
                        <img
                            src="https://openweathermap.org/themes/openweathermap/assets/img/mobile_app/android-app-top-banner.png"
                            className="App-logo"
                            alt="logo"
                        />
                        <SearchInput />
                        <Row>
                            <h1>News</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                                incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                                suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
                                voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                            </p>
                        </Row>
                    </Col>
                    <Col xs={6} className='cards-col'>
                        {cities && cities.map(city => (
                            <WeatherCard
                                key={city.id}
                                name={city.data ? city.data.name : null}
                                weather={city.data ? city.data.weather[0].main : null}
                                temperature={city.data ? temperatureConverter(city) + "° " : null}
                                image={selectionPictures(city)}
                                wind={city.data ? "Wind " + city.data.wind.speed + ' m/s' : null}
                                onRemove={() => handleRemoveCity(city.id)}
                            />
                        ))}
                    </Col>
                </Row>
            ) : (
                <>
                    <Row>
                        <Col xs={12} className='logo-col'>
                            <img
                                src="https://openweathermap.org/themes/openweathermap/assets/img/mobile_app/android-app-top-banner.png"
                                className="App-logo"
                                alt="logo"
                            />
                            <SearchInput />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                        <WeatherCarousel
                                cities={cities}
                                selectionPictures={selectionPictures}
                                temperatureConverter={temperatureConverter}
                                handleRemoveCity={handleRemoveCity}
                            />
                            
                            <h1>News</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                                incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                                suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
                                voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                            </p>
                        </Col>
                    </Row>
                </>
            )}
        </Container>
    );
};

export default MainPage;
