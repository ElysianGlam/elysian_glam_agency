import { m, LazyMotion, domAnimation } from "framer-motion";

const LandingText = () => {
  const name1 = "ELYSIAN";
  const name2 = "GLAM";

  return (
    <div
      className="noselect w-fit h-fit text-grayscale-50 absolute z-10 flex flex-col justify-center items-center rounded-[50%]"
      id="repulse-div"
    >
      <LazyMotion features={domAnimation} strict>
        <m.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center flex justify-center items-center flex-col opacity-100 text-7xl sm:text-9xl cursor-default"
          style={{ fontFamily: "Playfair Display, sans-serif" }}
        >
          <m.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            {name1.split("").map((char, index) => {
              if (char === " ") {
                return " ";
              }
              return (
                <span
                  key={index}
                  className="bounce"
                  style={{ fontSize: "100%" }}
                >
                  {char}
                </span>
              );
            })}
          </m.div>
          <m.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            {name2.split("").map((char, index) => {
              if (char === " ") {
                return " ";
              }
              return (
                <span
                  key={index}
                  className="text-primary-600 bounce"
                  style={{ fontSize: "1.2em" }}
                >
                  {char}
                </span>
              );
            })}
          </m.div>
        </m.h1>
        <m.span
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="cursor-pointer text-3xl sm:text-5xl underline underline-offset-8 decoration-primary-400"
          id="repulse-span"
          style={{ fontFamily: "Playfair Display, sans-serif" }}
        >
          <a href="#about">
            <span className="text-primary-400">Модельное</span> Агенство
          </a>
        </m.span>
      </LazyMotion>
    </div>
  );
};

export default LandingText;
