import SectionTitle from "../Components/SectionTitle";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { inspiration } from "../Constants/constants";

const Inspiration = () => {
  return (
    <div
      id="inspiration"
      className="w-full overflow-hidden-web flex justify-center"
    >
      <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
        <div className="w-full">
          <SectionTitle
            title="ВДОХНОВЕНИЕ"
            subtitle="Модели зарабатывающие миллионы"
          />
        </div>
        <div className="w-full h-full flex justify-center">
          <div className="w-[80%] flex flex-col sm:flex-row sm:flex-wrap justify-center gap-2">
            <LazyMotion features={domAnimation} strict>
              {inspiration.image.map((item, index) => (
                <m.div
                  key={index}
                  initial={{ x: 100 }}
                  whileInView={{ x: 0 }}
                  className="w-full sm:w-[48%] rounded-xl p-1 bg-primary-400"
                >
                  <img className="w-full rounded-xl" src={item} />
                </m.div>
              ))}
            </LazyMotion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
