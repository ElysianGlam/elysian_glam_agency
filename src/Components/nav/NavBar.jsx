import { useEffect, useState, useRef } from "react";
import ToggleButton from "../elements/ToggleButton";
import NavHeader from "./NavHeader";
import NavLinks from "./NavLinks";
import SocialLinks from "../SocialLinks";
import { useLanguage } from "../../App/LanguageContext";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const navRef = useRef(null);
  const { language, setLanguage } = useLanguage();

  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const body = document.body;

    isActive
      ? (body.style.overflowY = "hidden")
      : (body.style.overflowY = "auto");

    return () => {
      body.style.overflowY = "auto";
    };
  }, [isActive]);

  return (
    <nav
      ref={navRef}
      style={{
        fontFamily: "Poppins, sans-serif",
        backgroundImage:
          'url("https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png")',
      }}
      className={`${
        isActive
          ? "w-full h-full bg-primary-400 fixed z-50 flex-col"
          : "w-full bg-[rgba(0, 0, 0, 0)] fixed z-50"
      }`}
    >
      <ToggleButton isActive={isActive} handleClick={handleClick} />
      <div
        onClick={() => setLanguage((prev) => (prev === "en" ? "ru" : "en"))}
        className="bg-grayscale-900 rounded-xl w-[80px] h-[50px] absolute top-4 right-20 flex items-center justify-center cursor-pointer"
      >
        <p className="text-4xl text-grayscale-50">
          {language === "en" ? "ENG" : "RUS"}
        </p>
      </div>
      <div
        className={`${
          isActive ? "flex flex-col w-full h-full" : "hidden"
        } overflow-y-auto`}
      >
        <NavHeader handleClick={handleClick} />
        <NavLinks handleClick={handleClick} />
        <SocialLinks />
      </div>
    </nav>
  );
};

export default NavBar;
