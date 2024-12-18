import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../Constants/constants";

const ContactForm = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png)",
      }}
      className="w-full sm:w-[90%]  h-full bg-grayscale rounded-xl pt-10 pb-10 pl-8 pr-8 shadow-2xl"
    >
      <div>
        <h2
          style={{ fontFamily: "Oswald, sans-serif" }}
          className="message text-6xl  sm:text-7xl bg-primary-600 h-[180px] flex flex-col justify-center p-2 rounded-xl text-grayscale-200 text-center rounded-br-[0%] relative shadow-2xl"
        >
          <Typewriter words={["Ждём тебя!", "Напиши нам!"]} loop={true} />
        </h2>
        &nbsp;
      </div>
      <div className="w-full flex justify-center  drop-shadow-div">
        <div className="w-full flex flex-col justify-center items-center gap-3 p-6">
          <a href="https://t.me/elysian_glam_agency" target="_blank">
            <FontAwesomeIcon
              className="text-9xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
              icon={icons.faTelegram}
            />
          </a>
          <a href="https://t.me/elysian_glam_agency" target="_blank" className="text-grayscale-200 text-2xl">@elysian_glam_agency</a>
          {/* <a href="https://www.instagram.com/" target="_blank">
            <FontAwesomeIcon
              className="text-9xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
              icon={icons.faInstagram}
            />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
