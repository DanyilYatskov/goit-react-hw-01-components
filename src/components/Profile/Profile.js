import React from 'react';
import Stats from './Stats';
import styles from './profile.module.scss';
const Profile = ({ userInfo }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={userInfo.avatar}
          alt="Аватар пользователя"
          className={styles.avatar}
        />
        <p className={styles.name}>{userInfo.name}</p>
        <p className={styles.tag}>@{userInfo.tag}</p>
        <p className={styles.location}>{userInfo.location}</p>
      </div>
      <Stats
        followers={userInfo.stats.followers}
        views={userInfo.stats.views}
        likes={userInfo.stats.likes}
      />
    </div>
  );
};
export default Profile;
