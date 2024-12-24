import { useLanguage } from "../../App/LanguageContext";

const NavLinks = ({ handleClick }) => {
  const { language } = useLanguage();

  return (
    <div className="w-full h-full">
      <ul className="h-full w-full flex flex-col items-center justify-center font-medium text-lg">
        <li className="border-t-[1px] border-grayscale-950 w-full flex justify-center p-3">
          <a
            className="active:text-grayscale-100"
            onClick={handleClick}
            href="#about"
          >
            {language === "en" ? "About us" : "О нас"}
          </a>
        </li>
        <li className="border-t-[1px] border-grayscale-950 w-full flex justify-center p-3">
          <a
            className="active:text-grayscale-100"
            onClick={handleClick}
            href="#cases"
          >
            {language === "en" ? "Our cases" : "Наши кейсы"}
          </a>
        </li>
        <li className="border-t-[1px] border-grayscale-950 w-full flex justify-center p-3">
          <a
            className="active:text-grayscale-100"
            onClick={handleClick}
            href="#inspiration"
          >
            {language === "en" ? "Inspiration" : "Вдохновение"}
          </a>
        </li>
        <li className="border-t-[1px] border-grayscale-950 w-full flex justify-center p-3">
          <a
            className="active:text-grayscale-100"
            onClick={handleClick}
            href="#prospects"
          >
            {language === "en" ? "Prospects" : "Перспективы"}
          </a>
        </li>
        <li className="border-t-[1px] border-b-[1px] border-grayscale-950 w-full flex justify-center p-3">
          <a
            className="active:text-grayscale-100"
            onClick={handleClick}
            href="#contact"
          >
            {language === "en" ? "Contacts" : "Контакты"}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
