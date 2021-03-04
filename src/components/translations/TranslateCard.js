import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'


function TranslateCard({word}) {
  return (
      <Card>
        <Card.Body>
          <Card.Title>{word}</Card.Title>
          <Card.Text>cool images of hands in sign language</Card.Text>
        </Card.Body>
      </Card>
  )
}

export default TranslateCard
