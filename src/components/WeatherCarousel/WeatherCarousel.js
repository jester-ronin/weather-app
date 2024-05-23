import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

const WeatherCarousel = ({ cities, selectionPictures, temperatureConverter, handleRemoveCity }) => {
    return (
        <Carousel>
            {cities && cities.map(city => (
                <Carousel.Item key={city.id}>
                    <img
                        className="d-block w-100"
                        src={selectionPictures(city)}
                        alt={`Slide for ${city.data ? city.data.name : "City Name"}`}
                    />
                    <Carousel.Caption>
                        <h3>{city.data ? city.data.name : "City Name"}</h3>
                        <p>{city.data ? temperatureConverter(city) + "° " : "Temperature"}</p>
                        <p>{city.data ? city.data.weather[0].main : "Weather"}</p>
                        <p>{city.data ? "Wind " + city.data.wind.speed + ' m/s' : "Wind"}</p>
                    </Carousel.Caption>
                    <Button variant="danger" onClick={() => handleRemoveCity(city.id)}>Delete</Button>{' '}
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default WeatherCarousel;
