import ParticlesComponent from "./ParticlesComponent";
import { landingOptions } from "./particlesOptions";

const LandingParticles = () => {
  return (
    <div className="w-full h-screen min-h-[800px]">
      <ParticlesComponent
        id="landing-particles"
        className="w-full h-screen z-0 min-h-[800px]"
        particlesOptions={landingOptions}
      />
    </div>
  );
};

export default LandingParticles;
