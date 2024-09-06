
const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="w-44 h-44 rounded-full bg-black">
        <img
          className="w-96 h-96 rounded-full border-[1px] border-indigo-700 p-2 object-cover"
          src="https://i.pinimg.com/736x/b5/d7/81/b5d7812e4e68e6a6fa7a5156399c918e.jpg"
          alt="ProfileImg"
        />
      </div>
      {/* Description */}
      <div className="w-3/4 flex flex-col items-center md:items-start    gap-2">
        <h1 className="text-5xl font-bold text-white">John Doe</h1>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
          Full Stack Developer
        </h3>
        <p className="text-base tracking-wide text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, cum
          consequuntur soluta explicabo saepe voluptate atque accusantium quasi
          perspiciatis, quos quaerat odit voluptatem, debitis culpa!
        </p>
      </div>
    </div>
  );
};

export default Banner;