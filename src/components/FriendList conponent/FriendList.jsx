// import React from 'react'
import css from './FrientList.module.css'

const FriendList = ({friends}) => {

  const friendsNewArray = friends.map(el => (
<li className={css.item} key={el.id}>
  <span className={css.status}>{el.isOnline ? "🟢" : "🔴"}</span>
  <img className={css.avatar} src={el.avatar} alt="User avatar" width="48" />
  <p className={css.name}>{el.name}</p>
</li>
  ))

  return (
<ul className={css.friendlist}>
{friendsNewArray}
</ul>
  )
}


export  {FriendList}  

