// import React from 'react'
import css from './FrientList.module.css';
import { FriendListItem } from '../FriendListItem component/FriendListItem.jsx';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendlist}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};
export { FriendList };
