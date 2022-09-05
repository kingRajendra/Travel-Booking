import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Cards() {
  return (
    <div><h1>Book International and Domestic Flights</h1>
    <CardGroup>
      <Card>
        
        <Card.Img variant="top" src="https://cdn4.iconfinder.com/data/icons/airport-filled-line/614/7652_-_Round_Travel_Flights-512.png" />
        <Card.Body>
          <Card.Title>Round Trip</Card.Title>
          <Card.Text>
          Compare airline flight tickets flying to your favorite destinations around the world. Book the cheapest flight on Expedia now and enjoy great airfare deals!.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://media.istockphoto.com/photos/one-way-ticket-picture-id479986746?k=20&m=479986746&s=612x612&w=0&h=hSlqMi_gWQNrnNkaUTD7DKD6lkIWOdJU7owLrDoN2v8=" />
        <Card.Body>
          <Card.Title>Oneway</Card.Title>
          <Card.Text>
          Instead of buying a pricy and non-refundable ticket, you can use One Way Fly to receive a verifiable flight itinerary.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://multicityflights.com/wp-content/themes/multicity/assets/img/how-they-work.jpg" />
        <Card.Body>
          <Card.Title>Multicity</Card.Title>
          <Card.Text>
          Book up to 4 different routes in a single go by choosing different flights for each route on our Multi-City option. Exclusive Benefits. Save Cost & Time.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
  );
}

export default Cards;