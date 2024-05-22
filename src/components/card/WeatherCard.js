import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './weatherCard.css'

function WeatherCard({ name, weather, temperature, image, wind, onRemove }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>
                    <h2>{name}</h2>
                </Card.Title>
                <Card.Text>
                    <p>{temperature} {weather}</p>
                </Card.Text>
                <Card.Text>
                    <p>{wind}</p>
                </Card.Text>
                <Button variant="danger" onClick={onRemove}>Delete</Button>{' '}
            </Card.Body>
        </Card>
    );
}

export default WeatherCard;
