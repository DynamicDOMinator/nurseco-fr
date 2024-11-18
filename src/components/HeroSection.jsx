export default function HeroSection() {
  return (
    <div className="md:flex items-center pt-16 pb-7 lg:px-16 px-6 bg-slate-300">
      <div className=" md:basis-1/2 pt-10 md:pt-0 ">
        <h1 className="font-bold md:text-5xl text-3xl pb-7">
          {" "}
          Complete Health <br /> Care Solution For <br />
          Everyone{" "}
        </h1>
        <p className="text-slate-800">
          Empowering you with comprehensive healthcare
          <br /> solutions tailored for every need,at every stage.
          <br /> Discover a healthier tomorrow, today.
        </p>
        <button className="bg-blue-600 text-xl w-full md:w-auto mt-7 text-white px-8 py-2 rounded-lg">
          Book Now
        </button>
      </div>
      <div
        className="md:basis-1/2 mt-5 md:mt-0 w-full h-[450px] rounded-full"
        style={{
          backgroundImage: `url(${require("../images/freepik-export-20241114222730xMK4.jpeg")})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      ></div>
      <div className="absolute top-5 md:left-10 left-3">
        <p className="text-3xl font-bold text-blue-500">
          Nurse<span className="text-orange-400">co.</span>
        </p>
      </div>
    </div>
  );
}
