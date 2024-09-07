
const Banner = () => {
  return (
    <div className="w-8/12 wrapper flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="w-44 h-44 rounded-full bg-black">
        <img
          className="h-98 rounded-full border-[1px] border-indigo-700 p-2 object-cover"
          src="https://i.pinimg.com/736x/b5/d7/81/b5d7812e4e68e6a6fa7a5156399c918e.jpg"
          alt="ProfileImg"
        />
      </div>
      {/* Description */}
      <div className="w-3/4 flex flex-col items-center md:items-start    gap-2">
        <h1 className="text-5xl font-bold text-white">Kriti Pare</h1>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
          Frontend Engineer
        </h3>
        <p className="flex text-base tracking-wide text-center md:text-left">
          I'm a skilled Frontend Engineer specializing in building high-quality user interfaces with a focus on performance and accessibility. Proficient in JavaScript, TypeScript, Angular, and React, I leverage these powerful tools to create seamless and engaging web experiences :)
        </p>
      </div>
    </div>
  );
};

export default Banner;