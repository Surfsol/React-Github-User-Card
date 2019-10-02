import React from 'react';
import {
  Card, CardImg, 
 CardSubtitle
} from 'reactstrap';

const FollowersCard = (props) => {
    console.log(`followersCard`,props)
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.avatar} alt="Card image cap" />
        <CardSubtitle>{props.login}</CardSubtitle>
      </Card>
    </div>
  );
};

export default FollowersCard;