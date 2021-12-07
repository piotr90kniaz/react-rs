import Card from 'react-bootstrap/Card';

export const Indicator = ({ title, value }) => (
  <Card className="mb-3">
    <Card.Header as="h5">{title}</Card.Header>
    <Card.Body>
      <Card.Text className="d-flex justify-content-end">{value}</Card.Text>
    </Card.Body>
  </Card>
);
