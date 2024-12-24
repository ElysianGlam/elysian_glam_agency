import { m, LazyMotion, domAnimation } from "framer-motion";
import SectionTitle from "../Components/SectionTitle";
import { introduction, introductionRu, logo } from "../Constants/constants";
import ImageSlider from "../Components/elements/ImageSlider";
import { useLanguage } from "../App/LanguageContext";

const About = () => {
  const { language } = useLanguage();
  const textAbout = language === "en" ? introduction : introductionRu;

  return (
    <div id="about" className="w-full flex justify-center overflow-hidden-web">
      <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <div className="w-full">
          <SectionTitle
            title={language === "en" ? "ABOUT US" : "О НАС"}
            subtitle={language === "en" ? "Learn more" : "Узнай больше"}
          />
        </div>
        <div className="w-full flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-[50%] md:h-full flex items-center mt-10">
            <LazyMotion features={domAnimation} strict>
              <m.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                style={{ fontFamily: "Poppins, sans-serif" }}
                className="text-grayscale-50 p-6 text-center flex flex-col gap-6"
              >
                <span className="text-primary-400 text-2xl">
                  {textAbout.text[0]}
                </span>
                <span className="text-lg">{textAbout.text[1]}</span>
                <span className="text-lg">{textAbout.text[2]}</span>
                <span className="text-lg">{textAbout.text[3]}</span>
              </m.p>
            </LazyMotion>
          </div>
          <div className="w-full md:w-[50%] flex h-full items-center justify-center">
            <div className="w-[80%] lg:w-[50%] h-[300px] sm:h-[350px] flex justify-center items-center">
              <ImageSlider images={logo.image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
