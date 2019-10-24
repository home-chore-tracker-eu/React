import React from "react";
import { Avatar } from "antd";
import { useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import '../../src/App.less';

const Profile = ({ setParent, setKid, parent, kid }) => {
  const children = useSelector(state => state.children.children);
  console.log(children);

  if (parent) return <Redirect to="/dashboard" />;
  return (
    <div>
      <div className="parents-box">
        <h3 className="parents-box">Are You Mummy?</h3>
        <Link to='/dashboard'>
          <Avatar
            size={64}
            icon="user"
            src="https://www.freakmusic.co.uk/blog/wp-content/uploads/2017/03/Jayne-Carmichael-Norrie-209x300.jpg"
          />
        </Link>
      </div>

      <div className="kids-box">
        <h3>Which Kid Are You!</h3>
        {children.map(child => (
          <Link to={`/kids/${child.id}`}>
            <Avatar
              size={64}
              icon="user"
              src="https://thecutebabycontest.com/wp-content/uploads/2019/03/winner-3-1552330890.jpg"
              onClick={() => setKid(child)}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Profile;
