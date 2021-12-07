import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { Indicator } from '../../components/UI';

export const CurrentValuesSection = () => {
  return (
    <Row>
      <Col xs={4} lg={12}>
        <Indicator title="Var 1" value="100" />
      </Col>
      <Col xs={4} lg={12}>
        <Indicator title="Var 2" value="23.1" />
      </Col>
      <Col xs={4} lg={12}>
        <Indicator title="Var 3" value="48" />
      </Col>
    </Row>
  );
};
