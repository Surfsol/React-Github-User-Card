import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

const Cards = (props) => {
    console.log(props)
    console.log(props.avatar) //image not appearing
  return (
    <div>
      <Card>
        <CardBody>
        <CardImg top width="100%" src={props.avater} alt="Card image cap" />
        <CardSubtitle>{props.name}</CardSubtitle>
        <CardSubtitle>{props.login}</CardSubtitle>
        </CardBody>
        <CardBody>
          <CardLink href="#">{props.url}</CardLink>
          <CardSubtitle>{props.location}</CardSubtitle>
          <CardSubtitle>{props.type}</CardSubtitle>
          <CardText>{props.bio}</CardText>
          <CardSubtitle>{props.followers}</CardSubtitle>
          <CardSubtitle>{props.following}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;
