import { useLoaderData, useNavigate } from "react-router";
import AppCard from "../Components/AppCard";
import phone from "../assets/hero.png";
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa6";

export default function Home() {
  const apps = useLoaderData();
  const navigate = useNavigate();
  const topApps = apps.slice(0, 8);

  return (
    <div>
      <section className="py-20 px-5 text-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ">
            We Build <br />
            <span className="text-[#9F62F2]">Productive</span> Apps
          </h1>

          <p className="text-gray-500 max-w-lg mx-auto mb-8 text-base">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>

          <div>
            <div className="flex items-center justify-center gap-4">
              <button className="btn font-bold"> <FaGooglePlay /> Google Play</button>
              <button className="btn font-bold"><FaAppStore /> App store</button>
            </div>
            <div className=" flex items-center justify-center mt-10">
              <img src={phone} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="  p-[80px] bg-gradient-to-r from-[#632EE3] via-[#8148EB] to-[#9F62F2] text-white -mt-20 ">
        <h2 className="text-center font-bold text-4xl mb-10">Trusted by Millions, Built for You</h2>
        <div className=" stats lg:stats-horizontal shadow flex justify-around items-center">
          <div className="stat">
            <div className="stat-title text-gray-300">Total Downloads</div>
            <div className="stat-value">29.6M</div>
            <div className="stat-desc text-gray-300">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-title text-gray-300">Total Reviews</div>
            <div className="stat-value">906K</div>
            <div className="stat-desc text-gray-300">46% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-title text-gray-300">Active Apps</div>
            <div className="stat-value">132+</div>
            <div className="stat-desc text-gray-300">31 more will Launch</div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-14">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Trending Apps</h2>
          <p className="text-gray-500 text-sm mt-2">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {topApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/apps")}
            className="bg-gradient-to-r from-[#632EE3] via-[#8148EB] to-[#9F62F2] text-white px-10 py-3 rounded-xl font-bold"
          >
            Show All
          </button>
        </div>
      </section>
      
    </div>
  );
}