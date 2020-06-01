import React from 'react';
import { withRouter } from 'react-router';
import { Card, Button } from 'react-bootstrap';
import './Card.scss';

function FedCard({ imgName, title, title_long, tag, history, id }) {
    const img = require(`Assets/${imgName}`);
    const onClickHandler = () => {
        history.push(`/preview?id=${id}`);
    }
    return <Card>
        <Card.Img variant="top" src={img} alt={title} />
        <Card.Body>
            <div className="tag">{tag}</div>
            <Card.Title>{title_long}</Card.Title>
            <Button variant="link" onClick={onClickHandler}>&mdash; VIEW CASE STUDY</Button>
        </Card.Body>
    </Card>
}

export default withRouter(FedCard);