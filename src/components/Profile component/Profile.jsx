// import React from 'react'

// rafce + Tab ( + Enter) - розгорне нам шаблон (бо є плагін ES7)
import css from './Profile.module.css'


const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
 <div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <h2 className={css.name}>{username}</h2>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.item}>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{stats.views}</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{stats.likes}</span>
    </li>
  </ul>

</div> 
  )
}

export { Profile };


