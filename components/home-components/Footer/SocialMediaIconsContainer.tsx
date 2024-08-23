import React from "react";
import styles from "./socialmedia.module.css";

type SocialMediaIconsContainerProps = {
  children: React.ReactNode;
  mouseEnterHandler: React.MouseEventHandler<HTMLDivElement> | undefined;
  mouseLeaveHandler: React.MouseEventHandler<HTMLDivElement> | undefined;
  isHovered: boolean;
};
function SocialMediaIconsContainer({
  children,
  mouseEnterHandler,
  mouseLeaveHandler,
  isHovered
}: SocialMediaIconsContainerProps) {
  return (
    <div
    className={`${styles["social-media-icon-container"]} ${
        isHovered ? styles["hover-state"] : ""
      }`}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      {children}
    </div>
  );
}

export default SocialMediaIconsContainer;
