import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

const WeatherCarousel = ({ key, name, weather, temperature, image, wind, onRemove }) => {
    return (
        <Carousel>
            <Carousel.Item key={key}>
                <img
                    className="d-block w-100"
                    src={image}
                    alt={`Slide for ${name}`}
                />
                <Carousel.Caption>
                    <h3>{name}</h3>
                    <p>{temperature}</p>
                    <p>{weather}</p>
                    <p>{wind}</p>
                    <Button variant="danger" onClick={onRemove}>Delete</Button>{' '}

                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
};

export default WeatherCarousel;
