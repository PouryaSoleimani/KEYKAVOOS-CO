"use client";
import Image from "next/image";
import React, { useState } from "react";
import InstagramLogo from "@/public/footer/insLogoSvg.svg";
import InstagramColoredLogo from "@/public/footer/insColoredLogoSvg.svg";
import WhatsappLogo from "@/public/footer/whatLogoSvg.svg";
import WhatsappColoredLogo from "@/public/footer/whatColoredLogoSvg.svg";
import BaleLogo from "@/public/footer/baleLogoSvg.svg";
import BaleColoredLogo from "@/public/footer/baleColoredLogoSvg.svg";
import TelegramLogo from "@/public/footer/telegramLogoSvg.svg";
import TelegramColoredLogo from "@/public/footer/telegramColoredLogoSvg.svg";
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
      <p className="text-[18.5px] whitespace-nowrap text-[#4866CF] font-semibold text-center">
        ما را در شبکه های اجتماعی دنبال کنید
      </p>
      <div className="flex flex-col text-center justify-center items-center gap-5">
        <div className="flex justify-center items-center gap-8">

          <SocialMediaIconsContainer
            mouseEnterHandler={() =>
              setHoverLogo((last) => ({ ...last, hoverOne: true }))
            }
            mouseLeaveHandler={() =>
              setHoverLogo((last) => ({ ...last, hoverOne: false }))
            }
            isHovered={hoverLogo.hoverOne}
          >
            <Image
              src={hoverLogo.hoverOne ? InstagramLogo : InstagramColoredLogo}
              alt="instagram"
              className={styles["social-media-icon"]}
            />
          </SocialMediaIconsContainer>

          <SocialMediaIconsContainer
            mouseEnterHandler={() =>
              setHoverLogo((last) => ({ ...last, hoverTwo: true }))
            }
            mouseLeaveHandler={() =>
              setHoverLogo((last) => ({ ...last, hoverTwo: false }))
            }
            isHovered={hoverLogo.hoverTwo}
          >
            <Image
              src={hoverLogo.hoverTwo ? WhatsappLogo : WhatsappColoredLogo}
              alt="whatsapp"
              width={55}
              className={styles["social-media-icon"]}
            />
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
              src={hoverLogo.hoverThree ? BaleLogo : BaleColoredLogo}
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
              src={hoverLogo.hoverFour ? TelegramLogo : TelegramColoredLogo}
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
