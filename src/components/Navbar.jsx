import { useState } from "react";
import logo from "../../public/images/logo.png";
import logoLong from "../../public/images/logo_long.png";

// Date - Luxon
import { DateTime } from "luxon";

function Navbar() {
  const currentDate = DateTime.now();
  const formattedDate = currentDate.toFormat("d MMMM yyyy");

  const [open, setOpen] = useState(true);
  const Menus = [
    {
      title: "Dashboard",
      src: "bi bi-columns-gap",
    },
    {
      title: "Staff",
      src: "bi bi-people",
      gap: true,
    },
    {
      title: "Projects",
      src: "bi bi-folder",
    },
    {
      title: "Status",
      src: "bi bi-pie-chart",
    },
    {
      title: "Settings",
      src: "bi bi-gear",
      gap: true,
    },
    {
      title: "Logout",
      src: "bi bi-box-arrow-right",
    },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-[250px]" : "w-[80px]"
        } bg-custom-green-5 h-screen p-5 pt-7 duration-300 fixed`}
      >
        <div
          className={`absolute cursor-pointer -right-3 top-[50px] ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        >
          <i className="bi bi-arrow-left-circle w-7 text-[28px] text-custom-green-dark"></i>
        </div>

        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            className={`w-[40px] h-auto duration-75 ${
              open && "scale-0 hidden"
            }`}
          />
          <img
            src={logoLong}
            className={`duration-75 ${!open && "scale-0 hidden"}`}
          />
        </div>

        <ul className="pt-6">
          <div className="text-custom-green-dark font-semibold text-[14px] text-left">
            <p>Menu</p>
          </div>

          <div>
            <div></div>
            <div></div>
          </div>

          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-[10px] p-2 cursor-pointer bg-custom-green-30 hover:bg-custom-green-dark 
              hover:text-white text-custom-green-dark font-semibold text-sm items-center 
              gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-custom-green-dark text-white"
              }`}
            >
              <i className={`${Menu.src} text-[20px] mx-[2px]`}></i>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`flex-1 p-7 ${
          open ? "ml-[250px]" : "ml-[80px]"
        } transition-all duration-300`}
      >
        <div className="bg-custom-green-5 h-[60px] w-full rounded-[15px] flex mb-[20px]">
          <div className="h-full w-full flex items-center mx-[10px]">
            <div className="flex px-[8px] py-[4px] mx-[5px] rounded-[8px] bg-custom-green-30 text-custom-green-dark font-medium hover:bg-custom-green-dark hover:text-white transition-all duration-100 ease-in-out cursor-pointer">
              <i className="bi bi-calendar2-week font-medium"></i>
              <p className="ml-[10px]">{formattedDate}</p>
            </div>
          </div>

          <div className="flex justify-end items-center w-full">
            <div className="flex px-[8px] py-[4px] mx-[5px] rounded-[8px] bg-custom-green-30 text-custom-green-dark font-medium hover:bg-custom-green-dark hover:text-white transition-all duration-100 ease-in-out cursor-pointer">
              <i className="bi bi-bell font-medium"></i>
            </div>
            <div className="flex px-[8px] py-[4px] mx-[5px] rounded-[8px] bg-custom-green-30 text-custom-green-dark font-medium hover:bg-custom-green-dark hover:text-white transition-all duration-100 ease-in-out cursor-pointer">
              <i className="bi bi-person font-medium"></i>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

          <div className="bg-custom-green-15 rounded-[20px] p-[15px] text-custom-green-dark">

            <h2 className="font-bold text-[20px] pb-[30px]">Congratulations to everyone, we have finished creating the website!</h2>
            <p className="text-justify opacity-80 font-medium">
              Lorem ipsum, dolor sit amet amet consectetur consectetur adipisicing elit. Rerum
              voluptatibus, cumque odio distinctio voluptate sit quas voluptatem
              omnis provident explicabo!
            </p>

            <div className="grid grid-cols-3 pt-[20px] font-bold">
              
              <div className="text-start">
                <span className="mr-[5px]"><i class="bi bi-person-circle"></i></span>
                <span>Tommy Kim</span>
              </div>

              <div className="text-center">
                <span className="mr-[5px]"><i class="bi bi-clock"></i></span>
                <span>10:45</span>
              </div>

              <div className="text-end">
                <span className="mr-[5px]"><i class="bi bi-calendar-week"></i></span>
                <span>7 Sep. 2024</span>
              </div>

            </div>

          </div>

          <div className="bg-custom-green-15 rounded-[20px] p-[15px] text-custom-green-dark">

            <h2 className="font-bold text-[20px] pb-[30px]">Congratulations to everyone, we have finished creating the website!</h2>
            <p className="text-justify opacity-80 font-medium">
              Lorem ipsum, dolor sit amet amet consectetur consectetur adipisicing elit. Rerum
              voluptatibus, cumque odio distinctio voluptate sit quas voluptatem
              omnis provident explicabo!
            </p>

            <div className="grid grid-cols-3 pt-[20px] font-bold">
              
              <div className="text-start">
                <span className="mr-[5px]"><i class="bi bi-person-circle"></i></span>
                <span>Tommy Kim</span>
              </div>

              <div className="text-center border">
                <span className="mr-[5px]"><i class="bi bi-clock"></i></span>
                <span>10:45</span>
              </div>

              <div className="text-end">
                <span className="mr-[5px]"><i class="bi bi-calendar-week"></i></span>
                <span>24 Aug. 2024</span>
              </div>

            </div>

          </div>

          <div className="group h-[230px] bg-custom-green-5 hover:bg-custom-green-15 transition-all rounded-[20px] cursor-pointer border-[3px] border-dashed border-custom-green-60">
            <div className="flex items-center justify-center h-full w-full">
            <i class="bi bi-plus-circle text-[30px] group-hover:text-[35px] transition-all text-custom-green-60"></i>
            </div>
          </div>

          {/* <div className="h-[230px] bg-custom-green-15 rounded-[20px]"></div>
          <div className="h-[230px] bg-custom-green-15 rounded-[20px]"></div>
          <div className="h-[230px] bg-custom-green-15 rounded-[20px]"></div>
          <div className="h-[230px] bg-custom-green-15 rounded-[20px]"></div>
          <div className="h-[230px] bg-custom-green-15 rounded-[20px]"></div>
          <div className="h-[230px] bg-custom-green-15 rounded-[20px]"></div> */}

        </div>
      </div>
    </div>
  );
}

export default Navbar;
