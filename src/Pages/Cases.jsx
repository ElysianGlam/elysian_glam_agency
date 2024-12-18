import AstronautImage from "../Components/AstronautImage";
import SectionTitle from "../Components/SectionTitle";
import CaseCards from "../Components/CaseCards";

const Cases = () => {
  return (
    <div id="cases" className="w-full overflow-hidden-web flex justify-center">
      <div className="w-full min-h-[800px] h-screen xl:w-[70%] relative mt-40 flex flex-col items-center justify-center pb-36">
        <div className="w-full h-[20%] mb-20">
          <SectionTitle title="НАШИ КЕЙСЫ" subtitle="Чего мы достигли" />
        </div>
        <div className="w-full h-[80%] z-10 flex justify-center">
          <div className="w-full xl:w-[60%] h-full">
            <CaseCards />
          </div>
          <div className="absolute w-full h-full top-[-25%] right-[-75%] sm:right-[-50%]">
            <AstronautImage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;
