import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import TranslatedSignLanguage from './TranslatedSignLanguage'

function TranslateCard({ sentence }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{sentence}</Card.Title>
        <TranslatedSignLanguage sentence={sentence} />
      </Card.Body>
    </Card>
  )
}

export default TranslateCard
