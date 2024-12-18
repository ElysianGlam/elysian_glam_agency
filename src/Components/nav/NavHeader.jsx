import { logo } from "../../assets/index";

const NavHeader = ({ handleClick }) => {
  return (
    <div className="w-full h-[200px] flex flex-col items-center justify-end gap-4 p-4 bg-grayscale-950">
      <a
        href="#landing"
        onClick={handleClick}
        className="flex flex-col items-center"
      >
        <img
          className="cursor-pointer bounce object-cover w-[100px] h-[100px]"
          src={logo}
        />
        <span
          style={{ fontFamily: "Playfair Display, sans-serif" }}
          className="text-5xl text-grayscale-50"
        >
          ELYSIAN GLAM
        </span>
      </a>
      <span className="text-sm text-grayscale-300">Модельное Агенство</span>
    </div>
  );
};

export default NavHeader;
