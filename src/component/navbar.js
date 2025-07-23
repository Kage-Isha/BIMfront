"use client";
import { useAuth } from "@/contexts/authContext"; // new import
import { useState } from "react";
import Image from "next/image";
import { logo } from "@/assets/image/exportimg";
import { MdOutlineClose } from "react-icons/md";
import { BiMenuAltLeft } from "react-icons/bi"; // ✅ Import this line
import { FaUserAlt } from "react-icons/fa"; // Import user icon
import Link from "next/link";
import A from "./hover";
import B from "./button";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { user, logout } = useAuth(); // get user and logout

  return (
    <nav className="bg-background w-full flex flex-row items-center justify-between px-4 py-2">
      <div className="flex justify-between items-center p-4 lg:items-center">
        <div className="relative md:hidden flex items-center">
          {toggle ? (
            <MdOutlineClose
              className="w-7 h-7 text-letter cursor-pointer"
              onClick={() => setToggle(false)}
            />
          ) : (
            <BiMenuAltLeft
              className="w-7 h-7 text-letter cursor-pointer"
              onClick={() => setToggle(true)}
            />
          )}
          {toggle && (
            <ul className="absolute w-32 z-10 h-fit bg-[#FFFFFF] shadow-xl top-14 left-0 text-[#7C8DB0] flex flex-col gap-2 items-start p-4 scaleUp">
              <A name="News" href="/option">
                <li>News</li>
              </A>
              <A name="Social" href="/option">
                <li>Social</li>
              </A>
              <A name="About us" href="/about">
                <li>About us</li>
              </A>
              <A name="Contact us" href="/contact">
                <li>Contact us</li>
              </A>
              <A name="Donate" href="/contact">
                <li>Donate</li>
              </A>
              {!user ? (
                <>
                  <A name="Sign in" href="/signin">
                    <li>Sign in</li>
                  </A>
                  {/* <B name="Sign up">
                    <li>Sign up</li>
                  </B> */}
                </>
              ) : (
                <>
                  <div className="flex flex-col items-center">
                    <FaUserAlt className="text-[#605DEC] w-6 h-6" />
                  </div>
                  <B
              onClick={logout}
              name="Log out"
            />
                </>
              )}
            </ul>
          )}
        </div>
        <Link href="/">
          <Image
            width="1000"
            height="1000"
            className="w-[80px] h-[40px] p-2 lg:items-center"
            src={logo}
            alt="Logo"
          />
        </Link>
      </div>

      <div className="md:flex items-center space-x-8">
        <ul className="hidden md:flex items-center space-x-8 text-[#7C8DB0]">
          <A name="News" href="/">
            <li>News</li>
          </A>
          <A name="Social" href="/">
            <li>Social</li>
          </A>
          <A name="About us" href="/">
            <li>About us</li>
          </A>
          <A name="Contact us" href="/">
            <li>Contact us</li>
          </A>
          <A name="Donate" href="/">
            <li>Donate</li>
          </A>
          {!user ? (
            <A name="Sign in" href="/">
              <li>Sign in</li>
            </A>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <FaUserAlt className="text-[#605DEC] w-6 h-6" />
            </div>
          )}
        </ul>
        <div className="flex items-center space-x-4">
          {!user ? (
            <Link href="/">
              <B name="Sign up" />
            </Link>
          ) : (
            <B
              onClick={logout}
              name="Logout"
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;