import { m, LazyMotion, domAnimation } from "framer-motion";
import { prospects } from "../Constants/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLanguage } from "../App/LanguageContext";

const ProspectsCards = () => {
  const { language } = useLanguage();

  return (
    <div className="flex">
      <LazyMotion features={domAnimation} strict>
        {prospects.map((skill, index) => (
          <m.div
            initial={{ scale: 0.8 }}
            animate={{
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            style={{ zIndex: `${index + 1}`, transition: "all 0.6s" }}
            key={index}
            className="card w-[300px] h-[475px] flex flex-col items-center  bg-primary-400 rounded-xl border-4 border-primary-600 cursor-pointer"
          >
            <div className="w-full h-[60px] flex items-center gap-2 p-1 flex-col">
              {/* className="h-[50px] flex justify-center items-center w-[50px]  bg-primary-600 rounded-[50%] p-1 object-contain" */}
              <FontAwesomeIcon
                className="h-[35px] flex justify-center items-center w-[35px] text-grayscale-50 bg-primary-600 rounded-[50%] p-3 object-contain"
                title={skill.title}
                icon={skill.icon}
              />
              <span
                className="text-xl"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "bold",
                }}
              >
                {language === "en" ? skill.title : skill.titleRu}
              </span>
              <span
                className="text-center bg-primary-600 text-grayscale-50 rounded-xl text-xl p-4"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "400",
                }}
              >
                {language === "en" ? skill.description : skill.descriptionRu}
              </span>
            </div>
          </m.div>
        ))}
      </LazyMotion>
    </div>
  );
};

export default ProspectsCards;
