import Image from "next/image";
const InputBar = () => {
  return (
    <div className="bg-[rgba(43,57,69,1)] w-[30%] relative flex justify-around py-3">
      <Image src="/icons8-search.svg" width={20} height={20} alt="search" />
      <input
        type="text"
        placeholder="Enter country name"
        className="w-[70%] outline-none  bg-transparent text-md text-white "
      />
    </div>
  );
};

export default InputBar;
