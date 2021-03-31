import React from "react";
import Stats from "./Stats";
import "./profile.scss";
const Profile = ({ userInfo }) => {
  console.log("avatar", userInfo.avatar);
  return (
    <div className="Profile">
      <div className="description">
        <img
          src={userInfo.avatar}
          alt="Аватар пользователя"
          className="avatar"
        />
        <p className="name">{userInfo.name}</p>
        <p className="tag">@{userInfo.tag}</p>
        <p className="location">{userInfo.location}</p>
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
