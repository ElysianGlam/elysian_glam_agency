import { m, LazyMotion, domAnimation } from "framer-motion";
import LandingText from "../Components/LandingText";
import LandingParticles from "../Components/Particles/LandingParticles";
import LandingScroller from "../Components/elements/LandingScroller";

const Landing = () => {
  return (
    <div
      id="landing"
      className="w-full flex justify-center overflow-hidden-web relative"
    >
      <LazyMotion features={domAnimation} strict>
        <m.div
          id="landing"
          className="relative w-full flex justify-center items-center h-screen min-h-[800px] font-bold"
        >
          <LandingText />
          <LandingParticles />
        </m.div>
        <LandingScroller />
      </LazyMotion>
    </div>
  );
};

export default Landing;
