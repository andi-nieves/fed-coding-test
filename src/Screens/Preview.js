import React from 'react';
import { Container, Row, Col, Alert, Image, Button } from 'react-bootstrap';
import data from 'data.json';
import './Preview.scss';

function Preview({ history }) {
  const [sortLatest, setSortLatest] = React.useState(true);

  const formatDate = value => {
    const date = new Date(value);
    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
  }

  const renderQuestions = questions => {
    const sorted = questions.sort((a, b) => {
      return sortLatest ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date)
    });
    return sorted.map((q, i) => <div key={q.date}>
      <h2>{`Content Title`}</h2>
      <span className="date"><span className="dash" /> {formatDate(q.date)}</span>
      <p className="text">{q.text}</p>
    </div>)
  }

  const onClickHanlder = () => setSortLatest(!sortLatest);

  const renderItem = () => {
    if (!history.location.search) return <Alert variant="danger">No selected item.</Alert>;

    const urlParam = new URLSearchParams(history.location.search);
    const item = data.find(f => f.id === +urlParam.get('id'));

    if (!item) return <Alert variant="danger">Item not found!</Alert>;

    const img = require(`Assets/${item.image}`);
    return <Row>
      <Col sm="12" md="6">
        <div className="tag">{item.tag}</div>
        <Image className="img" src={img} alt={item.title} />
      </Col>
      <Col sm="12" md="6">
        <h1>{item.title} {sortLatest}</h1>
        <Button variant="link" onClick={onClickHanlder}>SORT BY LATEST <i className="fas fa-sync" /> </Button>
        {renderQuestions(item.questions)}
      </Col>
    </Row>
  }

  return (
    <Container className="item-preview">
      {renderItem()}
    </Container>
  );
}

export default Preview;
