import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../Constants/constants";

const SocialLinks = () => {
  return (
    <div className="w-full h-[100px] bg-grayscale-950 flex justify-center items-center gap-3 p-6">
      <a href="https://t.me/elysian_glam_agency" target="_blank">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
          icon={icons.faTelegram}
        />
      </a>
      <a
        href="https://t.me/elysian_glam_agency"
        target="_blank"
        className="text-grayscale-200 text-2xl"
      >
        @elysian_glam_agency
      </a>
      {/* <a href="https://www.instagram.com/" target="_blank">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
          icon={icons.faInstagram}
        />
      </a> */}
    </div>
  );
};

export default SocialLinks;
