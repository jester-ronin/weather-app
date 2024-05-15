import Card from 'react-bootstrap/Card';
import './weatherCard.css'

function WeatherCard({name, weather, temperature, image}) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {temperature}
                    {weather}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default WeatherCard;
