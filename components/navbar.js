import Image from "next/image";
import Link from "next/link";
import React from "react";

// Renders Navbar as General Component
const Navbar = ({ item1 }) => {
  return (
    <div className="bg-slate-950 shadow-md">
      <div className="flex flex-row justify-between items-center px-4 md:px-8 py-2">
        <div className="relative w-40 md:w-40 h-[80px] aspect-video ">
          <Link href="https://eduaspire.xyz/">
            <Image

              className="pl-20  "
              src="/logo.webp"
              alt="Avanti Fellows logo"
              layout="fill"
              objectFit="contain"
            /></Link>

        </div>
      </div>
      <div className="bg-[#B52326] w-full h-16 flex items-center justify-center">
        <div className="flex text-white text-lg gap-10">
          <Link href="/">
            <p className="hover:font-semibold active:font-light cursor-pointer">{item1}</p>
          </Link>
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
