import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import TranslatedSignLanguage from './TranslatedSignLanguage'

function TranslateCard({ word }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{word}</Card.Title>
        <TranslatedSignLanguage sentence={word} />
      </Card.Body>
    </Card>
  )
}

export default TranslateCard
