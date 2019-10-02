import React from 'react';
import axios from 'axios';
import './App.css';
import UserCards from './components/UserCards'
import Followers from './components/Followers'

//dont need constructor because dont need to bind anything
class GCard extends React.Component{
  state = {
    users:[],
    newProfile: 'Surfsol',
  }


  componentDidMount(){
    axios
    .get("https://api.github.com/users/Surfsol")
    .then(response => {
      console.log(`componentdidm`,response.data)
        this.setState({
          users: response.data
        }) 
    })
    .catch(err => console.log(err))
  }

  handleChanges = (e)=>{
    this.setState({
      newProfile: e.target.value
    })
  }
/*
  changeProfile = e =>{
    e.prevent.Default();
    axios.get("https://api.github.com/users/${this.state.newProfile}")
    .then(response => {
      console.log(`changeprofile`,response.data)
      this.setState({
        users: response.data
      })
  })
  .catch(err => console.log(err))
  
  }
*/
  render() {
    return(
      <div>
        <input
        type="text"
        value={this.state.newProfile}
        onChange={this.handleChanges}
        name="newProfile"
        />
        <button onClick={this.changeProfile}>Change Profile</button>
        <UserCards users={this.state.users}/>
        <Followers/>
        
      </div>
    )
  }
}

export default GCard;
