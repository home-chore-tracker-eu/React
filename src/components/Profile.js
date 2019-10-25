import React from "react";
import { Avatar } from "antd";
import { useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";

const Profile = ({ setKid, parent }) => {
  const children = useSelector(state => state.children.children);
  const user = useSelector(state => state.user.user);
  console.log(children);

  if (children.length) {
    return (
      <div className="profile">
        <div className="welcome">
          <img
            className="welcome-image"
            src="https://cdn.dribbble.com/users/1875866/screenshots/4051327/dribbleballoon.gif"
            alt="balloons"
          />
        </div>

        <div className="parents-box">
          <h1 className="parents-box">Mummy or Daddy?</h1>
          <Link to="/dashboard">
            <Avatar
              size={150}
              icon="user"
              src={user.pictureURL ? user.pictureURL : null}
              className="profile-avatar"
            />
          </Link>
        </div>

        <div className="kids-box">
          <h1>Which Kid Are You?</h1>
          {children.map(child => (
            <Link to={`/kids/${child.id}`}>
              <Avatar
                size={150}
                icon="user"
                onClick={() => setKid(child)}
                className="profile-avatar kids-profile-avatar"
              />
              <h2>{child.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export default Profile;
