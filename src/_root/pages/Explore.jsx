import { HiMagnifyingGlass } from "react-icons/hi2";

const Explore = () => {
  return (
    <div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search anything..."
          className="input bg-dark-2 pl-10"
        />
        <HiMagnifyingGlass className="absolute top-1/2 left-2.5 translate-y-[-50%] opacity-30 text-xl" />
      </div>
    </div>
  );
  };
  
  export default Explore;