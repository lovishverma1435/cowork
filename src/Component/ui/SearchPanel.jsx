import { useState } from "react";
import { FaMapMarkerAlt, FaUser } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdCalendarToday } from "react-icons/md";

const SearchPanel = () => {
  const [city, setCity] = useState("");
  const [date, setDate] = useState(null);
  const [people, setPeople] = useState(1);

  const handleSearch = () => {
    console.log("Search:", { city, date, people });
    // Add navigation or API logic here
  };

  return (
    <>
    <div className="">
      <div className="flex flex-col gap-3 pt-[20px] md:py-[30px] px-6 bg-gradient-to-b from-blue-500 to-white  rounded-2xl">
        <div className="flex gap-5 lg:gap-8">
        {/* City input */}
        <div className="flex items-center px-3 py-2 rounded max-w-[135px] sm:max-w-[180px] md:max-w-[228px] w-full bg-lite-gray">
          <FaMapMarkerAlt className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Enter city or area"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 outline-none font-inter font-normal text-[10px] sm:text-sm md:text-lg"
          />
        </div>

        {/* Date picker */}
        <div className="flex items-center px-3 py-2 rounded max-w-[135px] sm:max-w-[180px] md:max-w-[228px] w-full bg-lite-gray">
            <MdCalendarToday className="text-gray-500 mr-2 text-sm" />
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            placeholderText="Select date"
            className="flex-1 w-full outline-none font-inter font-normal text-[10px] sm:text-sm md:text-lg"
          />
        </div>
        </div>
        <div className="flex gap-5 lg:gap-8">
        {/* People input */}
        <div className="flex items-center px-3 py-2 rounded max-w-[155px] sm:max-w-[260px] md:max-w-[343px] w-full bg-lite-gray">
          <FaUser className="text-gray-500 mr-2" />
          <input
            type="number"
            min="1"
            max="2"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            className="flex-1 outline-none font-inter font-normal text-[10px] sm:text-sm md:text-lg"
          />
        </div>
        {/* Search button */}
        <button onClick={handleSearch} className="bg-linear-blue text-white py-2 rounded hover:bg-light-blue max-w-[120px] md:max-w-[128px] w-full cursor-pointer">Search</button>
        </div>
      </div>
      {/* Footer Buttons */}
      <div className="hidden md:flex mt-5 lg:mt-10 gap-[32px] items-center">
        <button className=" bg-linear-blue text-white py-3 lg:py-4 rounded max-w-[272px] w-full font-inter text-sm lg:text-xl leading-[130%] cursor-pointer">Explore Workspaces</button>
        <button className=" bg-linear-blue text-white py-3 lg:py-4 rounded max-w-[138px] w-full font-inter text-sm lg:text-xl leading-[130%] cursor-pointer">Log In</button>
      </div>
    </div>
    </>
  );
};

export default SearchPanel;
