import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiSolidLike } from "react-icons/bi";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { PiBagDuotone } from "react-icons/pi";
import DownloadBtn from "./DownloadBtn";
function ServiceAndNurseSection() {
  const [services, setServices] = useState([]);
  const [nurses, setNurses] = useState([]);
  const [filteredNurses, setFilteredNurses] = useState([]);
  const [filter, setFilter] = useState("all");

  // Fetching data
  useEffect(() => {
    const apiKey = process.env.REACT_APP_STRAPI_API_TOKEN;

    // Fetch services
    axios
      .get("https://nurceco.onrender.com/api/services?populate=*", {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      })
      .then((response) => {
        setServices(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });

    // Fetch nurses
    axios
      .get("https://nurceco.onrender.com/api/nurses?populate=*", {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      })
      .then((response) => {
        setNurses(response.data.data);
        setFilteredNurses(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching nurses:", error);
      });
  }, []);

  // Handle filters
  useEffect(() => {
    if (filter === "all") {
      setFilteredNurses(nurses); // Show all nurses
    } else {
      const filtered = nurses.filter(
        (nurse) => nurse.nurses_teams.some((team) => team.title === filter) // Check if nurse belongs to the selected team
      );
      setFilteredNurses(filtered);
    }
  }, [filter, nurses]);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div>
      <div>
        <p className=" text-center pt-10 pb-5 text-5xl font-bold text-blue-500  w-fit mx-auto ">
          Our <span className="text-orange-400">Service</span>
        </p>
      </div>

      {/* Display services */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 bg-slate-200 pt-16 pb-7 lg:px-16 px-6 gap-7">
        {services.map((card) => (
          <div
            className="bg-white px-7 shadow-lg shadow-blue-300"
            key={card.id}
            data-aos="flip-right"
          >
            <img
              src={`https://nurceco.onrender.com${card.img[0].url}`}
              alt={card.title}
              className="w-[100px] mx-auto py-7"
            />
            <h2 className="py-2 text-2xl font-semibold">{card.title}</h2>
            <p className="pb-4 text-slate-600">{card.description}</p>
          </div>
        ))}
      </div>

      <div>
        <p className=" text-center pt-10 pb-5 text-5xl font-bold text-blue-500  w-fit mx-auto ">
          Our <span className="text-orange-400">Team</span>
        </p>
      </div>

      {/* Filter buttons for different services */}
      <div className="md:px-10 px-5 bg-slate-200 pt-20 md:flex items-start gap-5 pb-7">
        <div className="flex md:flex-col flex-wrap gap-4 mb-8 top-3 basis-1/6">
          {/* All button */}
          <button
            onClick={() => setFilter("all")}
            className={`${
              filter === "all"
                ? "bg-black text-white"
                : "bg-blue-500 text-white"
            } px-4 py-2 rounded`}
          >
            All
          </button>

          {/* Service buttons */}
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setFilter(service.title)} // Use service title for filtering
              className={`${
                filter === service.title
                  ? "bg-black text-white"
                  : "bg-blue-500 text-white"
              } px-4 py-2 rounded`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Display nurses based on filter */}
        <div className="basis-5/6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 overflow-hidden">
            {filteredNurses.map((nurse) => (
              <div
                key={nurse.id}
                className="bg-white shadow-lg p-6 pb-12 relative"
                data-aos="flip-right"
              >
                <img
                  src={`https://nurceco.onrender.com${nurse.ProfilePhoto[0].url}`}
                  alt={nurse.title}
                  className="w-[100px] mx-auto rounded-full"
                />
                <div className="pt-3">
                  <div className="border-b-2 border-slate-300 pb-2   relative">
                    <div>
                      <h4 className="text-xl font-semibold">{nurse.Name}</h4>
                      <p className="text-slate-500">
                        {nurse.nurses_teams
                          .map((team) => team.title)
                          .join(", ")}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between flex-wrap  pt-4 ">
                    <p className="bg-stone-300 text-black px-4 rounded-full py-2 mt-2">
                      {nurse.SkillOne}
                    </p>
                    <p className="bg-stone-300 text-black px-4 rounded-full py-2 mt-2">
                      {nurse.SkillTwo}
                    </p>
                    <p className="bg-stone-300 text-black px-4 rounded-full py-2  mt-2">
                      {nurse.SkillThree}
                    </p>
                  </div>

                  <div className="flex justify-between flex-wrap w-full py-6">
                    <p className="flex items-center gap-2 ">
                      <FaHandHoldingHeart />
                      {nurse.Age} Years
                    </p>
                    <p className="flex items-center gap-2">
                      {" "}
                      <PiBagDuotone />
                      {nurse.Experience}
                    </p>
                    <p className="flex items-center gap-2">
                      {" "}
                      <BiSolidLike />
                      {nurse.Rate}
                    </p>
                  </div>
                </div>
                <div className="  absolute right-2 bottom-2">
                  <DownloadBtn
                    url={`http://localhost:1337${nurse.CV[0]?.url}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceAndNurseSection;
