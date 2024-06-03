import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";

// Renders Navbar as General Component
const Navbar = ({ item1 }) => {
  return (
    <div className="bg-slate-950 shadow-md">
      <div className="flex flex-row justify-between items-center px-4 md:px-8 ">
        <div className="relative -ml-12 lg:-ml-2 w-44 md:w-48 h-20 lg:h-[100px] aspect-video ">
          <Link href="https://eduaspire.xyz/">
            <Image

              className=" object-contain "
              src="/logo.webp"
              alt="Avanti Fellows logo"
              layout="fill"

            /></Link>

        </div>
      </div>
      <div className="bg-[#B52326] w-full h-14 lg:h-16 flex items-center justify-center">
        <div className="flex text-zinc-100 text-2xl font-bold lg:text-3xl font-sans gap-10">
          <Link href="/">
            <p className="hover:font-semibold active:font-light cursor-pointer">{item1}</p>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
