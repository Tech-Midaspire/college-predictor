import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isMenuPageOpen, setIsMenuPageOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);

  };

  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
    setActiveSubmenu(null);
  };

  const handleSubmenuEnter = (submenu) => {
    setIsMenuOpen(true);
    setActiveSubmenu(submenu);
  };
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleSubmenuLeave = () => {
    setActiveSubmenu(null);
  };
  const handleGearIconClick = () => {
    setIsMenuPageOpen(!isMenuPageOpen);
  };
  return (
    <nav className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-3 h-100px">
        <div className="flex justify-between items-center -ml-5">
          <div className="flex-shrink-0 mr-5">
            <Link href="/">
              <Image src="/logo.webp" alt="Logo" width={100} height={100} />
            </Link>
          </div>
          {/* Gear icon for mobile view */}
          <div className="block lg:hidden mr-5">
            <button onClick={handleMenuToggle} className="focus:outline-none">
              <i className="fas fa-cog text-xl"></i>
            </button>
          </div>
          <div className="hidden md:block  relative -ml-8">
            <button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="px-8 py-[5px] font-sans rounded-sm focus:outline-none focus:bg-white-700 bg-white text-slate-900"
            >
              Streams
            </button>

            {isMenuOpen && (
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="origin-top-right absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 text-center focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div className="py-1" role="none">
                  <Link
                    href="/commerce"
                    onMouseEnter={() => handleSubmenuEnter('commerce')}
                    onMouseLeave={handleSubmenuLeave}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"


                  >
                    Commerce
                  </Link>
                  {activeSubmenu === 'commerce' && (
                    <div className="pl-4">
                      <Link href="/commerce/accounting"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        B.Com/M.Com
                      </Link>
                      <Link href="/commerce/B.Com/M.Com"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        B.Com/M.com
                      </Link>
                    </div>
                  )}

                  <Link
                    href="/law"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    onMouseEnter={() => handleSubmenuEnter('law')}
                    onMouseLeave={handleSubmenuLeave}
                  >
                    Law
                  </Link>
                  {activeSubmenu === 'law' && (
                    <div className="pl-4">
                      <Link href="/law/civil"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        LLB/LLM
                      </Link>
                    </div>
                  )}

                  <Link href="/management"
                    onMouseEnter={() => handleSubmenuEnter('management')}
                    onMouseLeave={handleSubmenuLeave}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Management
                  </Link>
                  <div className=" block py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                    {activeSubmenu === 'management' && (
                      <div className="pl-4">
                        <Link href="/management/hr"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                          MBA/BBA
                        </Link>
                      </div>
                    )}
                  </div>
                  <Link href="/architecture"
                    onMouseEnter={() => handleSubmenuEnter('architecture')}
                    onMouseLeave={handleSubmenuLeave}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Architecture
                  </Link>
                  {activeSubmenu === 'architecture' && (
                    <div className="pl-4">
                      <Link href="/architecture/hr"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        B.Arch/M.Arch
                      </Link>
                    </div>
                  )}

                  <Link href="/engineering"
                    onMouseEnter={() => handleSubmenuEnter('engineering')}
                    onMouseLeave={handleSubmenuLeave}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Engineering
                  </Link>
                  {activeSubmenu === 'engineering' && (
                    <div className="pl-4">
                      <Link href="/engineering/hr"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        B.E/B.Tech/B.Arch
                      </Link>
                    </div>
                  )}

                  <Link href="/ayurvedic"
                    onMouseEnter={() => handleSubmenuEnter('ayurvedic')}
                    onMouseLeave={handleSubmenuLeave}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Ayurvedic
                  </Link>
                  {activeSubmenu === 'ayurvedic' && (
                    <div className="pl-4">
                      <Link href="/ayurvedic/hr"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        BAMS/MD in Ayurveda
                      </Link>
                    </div>
                  )}

                  <Link href="/dental"
                    onMouseEnter={() => handleSubmenuEnter('dental')}
                    onMouseLeave={handleSubmenuLeave}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Dental
                  </Link>
                  {activeSubmenu === 'dental' && (
                    <div className="pl-4">
                      <Link href="/dental/hr"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        BDS/MDS
                      </Link>
                    </div>
                  )}


                  <Link
                    href="/medical"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                    onClick={() => handleSubmenuClick('medical')}
                  >
                    Medical
                  </Link>
                  {activeSubmenu === 'medical' && (
                    <div className="absolute left-full top-0 w-48 bg-white shadow-lg">
                      <Link
                        href="/medical/hr"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        onClick={closeMenu}
                      >
                        MBBS/MD/MS/BPT
                      </Link>
                    </div>
                  )}

                  <Link
                    href="/all"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                    onClick={closeMenu}
                  >
                    All
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Search */}
          <div className="hidden md:block">
            <div className="flex items-center">
              <div className="hidden md:block relative">
                <div className="flex items-center">
                  <div className="-ml-11 relative flex items-center">
                    <i className="fas fa-search text-slate-100 absolute left-0 ml-4"></i>
                    <input
                      className="border border-zinc-500 bg-transparent text-white placeholder-gray-400 px-12 py-3 pl-24 font-normal font-sans shadow-md rounded-full"
                      type="text"
                      placeholder="Search Colleges..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-x-6 ml-4 pl-2 -mr-12 font-sans text-sm">
            <Link href="/our-story" className="text-white hover:text-gray-300">
              Our Story
            </Link>
            <Link href="/blog" className="text-white hover:text-gray-300">
              Blog
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </div>

          {/* Buttons */}
          <div className="space-x-2 font-bold font-sans -ml-3">
            <button className="text-white bg-indigo-600 py-[10px] px-6 rounded-sm font-mdm hover:bg-white hover:text-indigo-600">
              College Predictor
            </button>
            <button className="text-white bg-indigo-600 py-[10px] px-6 rounded-sm font-mdm hover:bg-white hover:text-indigo-600">
              Scholarship
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button className="focus:outline-none" onClick={handleGearIconClick}>
              <i className="fas fa-cog text-white text-2xl"></i>
            </button>
          </div>
          

        </div>
      </div>
      {isMenuPageOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg relative shadow-lg text-black">
            <h1 className="text-xl font-bold mb-4">Menu Page</h1>
            {/* Menu items and search functionality */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
