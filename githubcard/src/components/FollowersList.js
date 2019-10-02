import React from 'react'
import FollowersCard from './FollowersCard'

//deconstruting, grab props from
const FollowersList = props => {
    console.log(`followerslist`,props)
    const{id, avatar_url, login}=props.follower
    return (
      <div>          
                <FollowersCard
                key={id}
                avatar={avatar_url}
                login={login}
                /> 
        </div>
    )
}

export default FollowersList;