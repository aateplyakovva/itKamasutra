import { React } from "react";
import c from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={c.content}>
      <div className={c.wallpaper}>
        <img
          // src="https://a-static.besthdwallpaper.com/tumannyy-les-oboi-2880x900-4336_60.jpg"
          alt="wide image"
        />
      </div>
      <div className={c.infoContent}>
        <img className={c.avatar} src="../logo192.png" alt="ava" />
        <div>imformation</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
