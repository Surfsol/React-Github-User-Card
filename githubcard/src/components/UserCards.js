import React from 'react'
import Cards from './Cards'

//deconstruting, grab props from
const UserCards = props => {
    console.log(`UserCards props`,props.users)
    const{id, avatar_url, name, login, location, type, url, followers, following, bio}=props.users
    return (
      <div>          
                <Cards 
                key={id}
                avatar={avatar_url}
                name ={name}
                login={login}
                location={location}
                type={type}
                url={url}
                followers={followers}
                following={following}
                bio={bio}
                />
        </div>
    )
}

export default UserCards;