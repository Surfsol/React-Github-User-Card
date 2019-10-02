import React from 'react';
import axios from 'axios';

import FollowersList from './FollowersList'

//dont need constructor because dont need to bind anything
class Followers extends React.Component{
  state = {
    followers:[],
  }


  componentDidMount(){
    axios
    .get("https://api.github.com/users/Surfsol/followers")
    .then(response => {
        console.log(`followers`, response.data)
        this.setState({
          followers: response.data
        }) 
    })
    .catch(err => console.log(err))
  }

  


  render() {
    return(
      <div>
          {this.state.followers.map( follower =>(
            <FollowersList follower={follower}/>
          ))}
      </div>
    )
  }
}

export default Followers;