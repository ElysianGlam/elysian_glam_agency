import { m, LazyMotion, domAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../Constants/constants";
import { useLanguage } from "../App/LanguageContext";

const ContactServices = () => {
  const { language } = useLanguage();

  return (
    <div
      className="w-full sm:w-[40%] h-full flex flex-col gap-4 justify-center"
      style={{ fontFamily: "Poppins,sans-serif" }}
    >
      <LazyMotion features={domAnimation} strict>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, type: "spring", delay: 0.1 }}
        >
          <div className="w-full h-[50px] text-grayscale-100 flex items-center gap-4">
            <FontAwesomeIcon
              className="w-[50px] h-full text-primary-400"
              icon={icons.faWindowRestore}
            />
            <span>
              {language === "en" ? "Account promotion" : "Продвижение аккаунта"}
            </span>
          </div>
        </m.div>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
        >
          <div className="w-full h-[50px] text-grayscale-100 flex items-center gap-4">
            <FontAwesomeIcon
              className="w-[50px] h-full text-primary-400"
              icon={icons.faBusinessTime}
            />
            <span>{language === "en" ? "Content Plan" : "Контент-Планы"}</span>
          </div>
        </m.div>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
        >
          <div className="w-full h-[50px] text-grayscale-100 flex items-center gap-4">
            <FontAwesomeIcon
              className="w-[50px] h-full text-primary-400"
              icon={icons.faDollar}
            />
            <span>
              {language === "en" ? "Regular income" : "Регулярный доход"}
            </span>
          </div>
        </m.div>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
        >
          <div className="w-full h-[50px] text-grayscale-100 flex items-center gap-4">
            <FontAwesomeIcon
              className="w-[50px] h-full text-primary-400"
              icon={icons.faDiceD6}
            />
            <span>
              {language === "en" ? "Account management" : "Менеджмент аккаунта"}
            </span>
          </div>
        </m.div>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
        >
          <div className="w-full h-[50px] text-grayscale-100 flex items-center gap-4">
            <FontAwesomeIcon
              className="w-[50px] h-full text-primary-400"
              icon={icons.faBagShopping}
            />
            <span>
              {language === "en" ? "Model training" : "Обучение моделей"}
            </span>
          </div>
        </m.div>
      </LazyMotion>
    </div>
  );
};

export default ContactServices;
