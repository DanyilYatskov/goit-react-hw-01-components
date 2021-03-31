import React from 'react';
import PropTypes from 'prop-types';
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
Profile.defaultProps = {
  userInfo: {
    avatar:
      'https://www.edmundsgovtech.com/wp-content/uploads/2020/01/default-picture_0_0.png',
  },
};
Profile.propTypes = {
  userInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }).isRequired,
  }),
};
