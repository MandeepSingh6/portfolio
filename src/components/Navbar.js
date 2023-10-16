import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const handleClick = () => setBurgerMenu(!burgerMenu);
  return (
    <div className="fixed flex justify-between items-center py-2 text-white w-full bg-[#1a2852] px-20 z-50">
      <div className="cursor-pointer text-xl text-blue-300 uppercase">
        {/* <Link to="hero" smooth={true} duration={500}>
          PORTFOLIO
        </Link> */}
      </div>

      <ul className="hidden md:flex gap-4">
        <li className="cursor-pointer">
          <Link to="hero" smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li className="cursor-pointer">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div
        onClick={handleClick}
        id="burgerBtn"
        className="block md:hidden z-10"
      >
        {!burgerMenu ? (
          <FaBars className="cursor-pointer" />
        ) : (
          <FaTimes className="cursor-pointer" />
        )}
      </div>

      <ul
        className={
          burgerMenu
            ? "md:hidden absolute bg-[#1a2852] w-full h-screen left-0 top-0 flex flex-col justify-center items-center gap-8 text-4xl"
            : "hidden"
        }
      >
        <li className="cursor-pointer">
          <Link onClick={handleClick} to="hero" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="block fixed top-[15%] left-0">
        <ul>
          <li className="bg-gray-700 w-[108px] h-[40px] flex justify-between items-center -ml-[72px] hover:ml-0 duration-300 pr-1 pl-1">
            <a
              target="_blank"
              href="https://sapphire-reba-8.tiiny.site"
              className="flex justify-between w-full items-center"
            >
              Resume
              <ImProfile size={28} className="translate-x-[1px]" />
            </a>
          </li>
          <li className="bg-blue-500 w-[108px] h-[40px] flex justify-between items-center -ml-[72px] hover:ml-0 duration-300 pr-1 pl-1 z-[100]">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mandeep-singh-764531234"
              className="flex justify-between w-full items-center"
            >
              LinkedIn
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="bg-gray-700 w-[108px] h-[40px] flex justify-between items-center -ml-[72px] hover:ml-0 duration-300 pr-1 pl-1">
            <a
              target="_blank"
              href="https://github.com/MandeepSingh6"
              className="flex justify-between w-full items-center"
            >
              GitHub
              <FaGithub size={30} />
            </a>
          </li>
          <li className="bg-blue-500 w-[108px] h-[40px] flex justify-between items-center -ml-[72px] hover:ml-0 duration-300 pr-1 pl-1">
            <div className="flex justify-between w-full items-center">
              <Link
                onClick={handleClick}
                to="contact"
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
              <HiOutlineMail size={30} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
