import React from 'react';
import styles from './friendList.module.scss';
const FriendListItem = ({ friend }) => {
  return (
    <li key={friend.id} className={styles.item}>
      <span
        className={styles.status}
        style={
          friend.isOnline
            ? { backgroundColor: 'green' }
            : { backgroundColor: 'red' }
        }
      ></span>
      <img className={styles.avatar} src={friend.avatar} alt="" width="48" />
      <p className={styles.name}>{friend.name}</p>
    </li>
  );
};
export default FriendListItem;
