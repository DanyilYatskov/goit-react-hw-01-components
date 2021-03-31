import React from 'react';
import FriendListItem from './FriendListItem';
import styles from './friendList.module.scss';

const FriendList = ({ friends }) => {
  return (
    <div className={styles.friends}>
      <h2 className={styles.title}>List of Friends</h2>
      <ul className={styles.friendList}>
        {friends.map(friend => (
          <FriendListItem key={friend.id} friend={friend} />
        ))}
      </ul>
    </div>
  );
};
export default FriendList;
