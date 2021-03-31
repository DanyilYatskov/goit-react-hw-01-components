import React from 'react';
import styles from './friendList.module.scss';
const friendListItemRender = friend => {
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
const FriendList = ({ friends }) => {
  return (
    <div className={styles.friends}>
      <h2 className={styles.title}>List of Friends</h2>
      <ul className={styles.friendList}>{friends.map(friendListItemRender)}</ul>
    </div>
  );
};
export default FriendList;
