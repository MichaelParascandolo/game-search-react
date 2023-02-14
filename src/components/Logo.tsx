import { MdGamepad } from "react-icons/md";

const Logo = () => {
  return (
    <>
      <h1 className="text-black select-none text-5xl md:text-7xl lg:text-8xl bg-clip-text text-center tracking-widest">
        GameSearch
        <MdGamepad className="text-black/70 inline-flex" />
      </h1>
    </>
  );
};

export default Logo;
