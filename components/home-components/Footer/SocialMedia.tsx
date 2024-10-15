"use client";
import Image from "next/image";
import React, { useState } from "react";
import InstagramLogo from "/footer/insLogoSvg.svg";
import InstagramColoredLogo from "/footer/insColoredLogoSvg.svg";
import WhatsappLogo from "/footer/whatLogoSvg.svg";
import WhatsappColoredLogo from "/footer/whatColoredLogoSvg.svg";
import BaleLogo from "/footer/baleLogoSvg.svg";
import BaleColoredLogo from "/footer/baleColoredLogoSvg.svg";
import TelegramLogo from "/footer/telegramLogoSvg.svg";
import TelegramColoredLogo from "/footer/telegramColoredLogoSvg.svg";
import styles from "./socialmedia.module.css";
import SocialMediaIconsContainer from "./SocialMediaIconsContainer";

function SocialMedia() {
  const [hoverLogo, setHoverLogo] = useState({
    hoverOne: false,
    hoverTwo: false,
    hoverThree: false,
    hoverFour: false,
  });
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[18.5px] whitespace-nowrap text-zinc-100 font-semibold text-center tracking-tighter">
        ما را در شبکه های اجتماعی دنبال کنید
      </p>
      <div className="flex flex-col text-center justify-center items-center gap-3">
        <div className="flex justify-center items-center gap-6">

          <SocialMediaIconsContainer
            mouseEnterHandler={() => setHoverLogo((last) => ({ ...last, hoverOne: true }))}
            mouseLeaveHandler={() => setHoverLogo((last) => ({ ...last, hoverOne: false }))}
            isHovered={hoverLogo.hoverOne}
          >
            <Image src="/footer/insColoredLogoSvg.svg" alt="instagram" className={styles["social-media-icon"]} />
          </SocialMediaIconsContainer>

          <SocialMediaIconsContainer
            mouseEnterHandler={() => setHoverLogo((last) => ({ ...last, hoverTwo: true }))}
            mouseLeaveHandler={() => setHoverLogo((last) => ({ ...last, hoverTwo: false }))}
            isHovered={hoverLogo.hoverTwo}
          >
            <Image src="/footer/whatColoredLogoSvg.svg" alt="whatsapp" width={55} className={styles["social-media-icon"]} />
          </SocialMediaIconsContainer>

          <SocialMediaIconsContainer
            mouseEnterHandler={() =>
              setHoverLogo((last) => ({ ...last, hoverThree: true }))
            }
            mouseLeaveHandler={() =>
              setHoverLogo((last) => ({ ...last, hoverThree: false }))
            }
            isHovered={hoverLogo.hoverThree}
          >
            <Image
              src="/footer/baleColoredLogoSvg.svg"
              alt="bale"
              className={styles["social-media-icon"]}
            />
          </SocialMediaIconsContainer>

          <SocialMediaIconsContainer
            mouseEnterHandler={() =>
              setHoverLogo((last) => ({ ...last, hoverFour: true }))
            }
            mouseLeaveHandler={() =>
              setHoverLogo((last) => ({ ...last, hoverFour: false }))
            }
            isHovered={hoverLogo.hoverFour}
          >
            <Image
              src="/footer/telegramColoredLogoSvg.svg"
              alt="telegram"
              className={styles["social-media-icon"]}
            />
          </SocialMediaIconsContainer>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
