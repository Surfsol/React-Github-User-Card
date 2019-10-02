import React from 'react';
import axios from 'axios';
import FollowingList from './FollowersList'

//dont need constructor because dont need to bind anything
// class Following extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//         newProfile: 'Surfsol',
//         following: []
//         }
//     }

//   componentDidMount(){
      
//     axios
//     .get("https://api.github.com/users/Surfsol/following_url")
//     .then(response => {
//         console.log(`following`,response)
//         this.setState({
//           following: response
//         }) 
//     })
//     .catch(err => console.log(err))
//   }
//   render(){
//     return(
//       <div>
//         <FollowingList following={this.state.following}/>
//       </div>
//     )
//   }
// }
class Following extends React.Component{
    state = {
      following:[],
      newProfile: 'Surfsol',
    }
  
  
    // componentDidMount(){
    //   axios
    //   .get("https://api.github.com/users/Surfsol")
    //   .then(response => {
    //       this.setState({
    //         users: response.data
    //       }) 
    //   })
    //   .catch(err => console.log(err))
    // }

    componentDidMount(){
    const people = ['luishrd', 'BigKnell', 'cheshire137', 'pifafu', 'tetondan'];
    people.map(e =>{
    let address = "https://api.github.com/users/" 
    let newAdd = address.concat(`${e}`)
    console.log(newAdd)
    axios.get(newAdd)
    .then(response => {
        // deal with the response data in here
        console.log(response);
        this.setState({
            following: response
          })
        //let e = response.data;
        // let cardDiv1 = document.querySelector(".cards").appendChild(
        //     profileCreator(
        //       e.avatar_url,
        //       e.name,
        //       e.login,
        //       e.location,
        //       e.type,
        //       e.url,
        //       e.followers,
        //       e.following,
        //       e.bio
        //     )
        //   );
        
        }

  );
})
    }

export default Following;
