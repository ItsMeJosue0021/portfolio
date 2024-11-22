
const Logo = ({ image, name, isHovered }) => {
  return (
    <div
      className={`cursor-pointer p-4 rounded-lg hover:bg-white hover:scale-110 hover:shadow-xl hover:border-gray-50 group ${
        isHovered ? "bg-white scale-110 shadow-xl border-white" : ""
      } flex flex-col items-center justify-center overflow-hidden relative w-24 h-24 transition-all border border-gray-200 ease-in-out duration-500`}
    >
      <img
        src={image}
        alt="img"
        className={`${
          isHovered ? "-translate-y-2 opacity-100 scale-75 grayscale-0" : "opacity-40"
        } group-hover:opacity-100 transition-all duration-500 ease-in-out transform grayscale group-hover:-translate-y-2 group-hover:scale-75 group-hover:grayscale-0`}
      />
      <p
        className={`absolute text-xs text-[#1E1E1E] bottom-0 group-hover:opacity-100 group-hover:-translate-y-2 ${
          isHovered ? "opacity-100 -translate-y-2" : "opacity-0 translate-y-4"
        } transition-all duration-500 ease-in-out font-semibold w-full text-center`}
      >
        {name}
      </p>
    </div>
  );
};

export default Logo;

