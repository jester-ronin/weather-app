import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  './weatherCarousel.css';


const WeatherCarousel = ({ cities, selectionPictures, temperatureConverter, handleRemoveCity }) => {
    return (
        <Carousel>
            {cities && cities.map(city => (
                <Carousel.Item key={city.id}>
                    <div className='carousel-div'>
                        <img
                            className="d-block w-100"
                            src={selectionPictures(city)}
                            alt={`Slide for ${city.data ? city.data.name : "City Name"}`}
                        />
                        <Card.Text>
                            <h3>{city.data ? city.data.name : "City Name"}</h3>
                            <p>{city.data ? temperatureConverter(city) + "° " : "Temperature"}</p>
                            <p>{city.data ? city.data.weather[0].main : "Weather"}</p>
                            <p>{city.data ? "Wind " + city.data.wind.speed + ' m/s' : "Wind"}</p>
                            <Button variant="danger" id='delete-button' onClick={() => handleRemoveCity(city.id)}>Delete</Button>{' '}
                        </Card.Text>

                    </div>
                </Carousel.Item>
                
            ))}
        </Carousel>
    );
};

export default WeatherCarousel;
