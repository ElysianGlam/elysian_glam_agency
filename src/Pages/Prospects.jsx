import MarqueeCards from "../Components/MarqueeCards";
import SectionTitle from "../Components/SectionTitle";
import ProspectsCards from "../Components/ProspectsCards";
import { useEffect, useState } from "react";
import { prospects } from "../Constants/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLanguage } from "../App/LanguageContext";

const Prospects = () => {
  const { language } = useLanguage();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Очистка обработчика события при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      id="prospects"
      className="w-full overflow-hidden-web flex justify-center"
    >
      <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
        <div className="w-full">
          <SectionTitle
            title={language === "en" ? "PROSPECTS" : "ПЕРСПЕКТИВЫ"}
            subtitle={language === "en" ? "What awaits you" : "Что тебя ждёт"}
          />
        </div>
        <>
          {windowWidth > 767 ? (
            <dir className="xl:border-l-2 xl:border-r-2 xl:border-primary-400 h-full">
              <div className="relative">
                <div className="absolute top-[45px] w-full h-[1px] bg-primary-400"></div>
                <MarqueeCards direction="left">
                  <ProspectsCards />
                </MarqueeCards>
              </div>
              <div className="relative">
                <div className="absolute top-[45px] w-full h-[1px] bg-primary-400"></div>
                <MarqueeCards direction="right">
                  <ProspectsCards />
                </MarqueeCards>
              </div>
            </dir>
          ) : (
            <div className="flex flex-col justify-center items-center gap-2">
              {prospects.map((skill, index) => (
                <div
                  key={index}
                  className="card w-[300px] h-[475px] flex flex-col bg-primary-400 rounded-xl border-4 border-primary-600 cursor-pointer"
                >
                  <div className="w-full h-[60px] flex items-center  gap-2 p-1 flex-col">
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
                      {language === "en"
                        ? skill.description
                        : skill.descriptionRu}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default Prospects;
