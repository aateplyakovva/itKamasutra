import { React } from "react";
import c from "./ProfileInfo.module.css";

import Loader from "./../../common/Loader/loader.component";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Loader />;
  }

  return (
    <div className={c.content}>
      <div className={c.wallpaper}></div>
      <div className={c.infoContent}>
        <img
          className={c.avatar}
          src={
            props.profile.photos.small ||
            `https://robohash.org/${props.profile.userId}?set=set5&size=180x180`
          }
          alt="ava"
        />
        <h2>{props.profile.fullName}</h2>
        <h3>{props.profile.aboutMe}</h3>
      </div>
    </div>
  );
};

export default ProfileInfo;
