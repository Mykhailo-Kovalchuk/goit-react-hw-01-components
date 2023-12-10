// import React from 'react'

const FriendList = ({friends}) => {

  const friendsNewArray = friends.map(el => (
<li className="item" key={el.id}>
  <span className="status">{el.isOnline ? "🟢" : "🔴"}</span>
  <img className="avatar" src={el.avatar} alt="User avatar" width="48" />
  <p className="name">{el.name}</p>
</li>
  ))

  return (
<ul className="friend-list">
{friendsNewArray}
</ul>
  )
}

export  {FriendList}  

