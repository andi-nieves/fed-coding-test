import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'Components/Card';
import data from 'data.json';

function App() {
  const renderData = () => data.map(d => <Col key={d.id} sm="12" md="6">
    <Card imgName={d.thumb} title={d.title} title_long={d.title_long} tag={d.tag} id={d.id} />
  </Col>);

  return (
    <Container>
      <Row>
        {renderData()}
      </Row>
    </Container>
  );
}

export default App;
