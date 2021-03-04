import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import TranslatedSignLanguage from './TranslatedSignLanguage'

function TranslateCard({word}) {
  return (
      <Card>
        <Card.Body>
          <Card.Title>{word}</Card.Title>
          <Card.Text><TranslatedSignLanguage sentence={word} /></Card.Text>
        </Card.Body>
      </Card>
  )
}

export default TranslateCard
