import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeSubSubmenu, setActiveSubSubmenu] = useState(null);

  const handleMouseEnter = (submenu) => {
    setActiveSubmenu(submenu);
    setActiveSubSubmenu(null); // Reset sub-submenu when entering a new submenu
  };

  const handleMouseLeave = () => {
    setActiveSubmenu(null);
    setActiveSubSubmenu(null);
  };

  const handleSubSubmenuEnter = (subSubmenu) => {
    setActiveSubSubmenu(subSubmenu);
  };

  const handleSubSubmenuLeave = () => {
    setActiveSubSubmenu(null);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-3 h-100px">
        <div className="flex justify-between items-center">
          {/* Left side for logo and streams button */}
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-16 -ml-5">
              <Link href="/">
                <Image src="/logo.webp" alt="Logo" width={100} height={100} />
              </Link>
            </div>

            <div className="relative">
              <button
                onMouseEnter={() => handleMouseEnter('streams')}
                onMouseLeave={handleMouseLeave}
                className="px-8 py-[5px] font-sans rounded-sm focus:outline-none focus:bg-white-700 bg-white text-slate-900"
              >
                Streams
              </button>
              {activeSubmenu === 'streams' && (
                <div
                  onMouseEnter={() => handleMouseEnter('streams')}
                  onMouseLeave={handleMouseLeave}
                  className="origin-top-right absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 text-center focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                >
                  <div className="py-1" role="none">
                    <div
                      onMouseEnter={() => handleSubSubmenuEnter('commerce')}
                      onMouseLeave={handleSubSubmenuLeave}
                      className="relative"
                    >
                      <Link href="/commerce" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        Commerce
                      </Link>
                      {activeSubSubmenu === 'commerce' && (
                        <div className="absolute left-full top-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <Link href="/commerce/accounting" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                            B.Com/M.Com
                          </Link>
                        </div>
                      )}
                    </div>

                    <div
                      onMouseEnter={() => handleSubSubmenuEnter('law')}
                      onMouseLeave={handleSubSubmenuLeave}
                      className="relative"
                    >
                      <Link href="/law" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        Law
                      </Link>
                      {activeSubSubmenu === 'law' && (
                        <div className="absolute left-full top-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <Link href="/law/civil" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                            LLB/LLM
                          </Link>
                        </div>
                      )}
                    </div>

                    <div
                      onMouseEnter={() => handleSubSubmenuEnter('management')}
                      onMouseLeave={handleSubSubmenuLeave}
                      className="relative"
                    >
                      <Link href="/management" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        Management
                      </Link>
                      {activeSubSubmenu === 'management' && (
                        <div className="absolute left-full top-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <Link href="/management/hr" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                            MBA/BBA
                          </Link>
                        </div>
                      )}
                    </div>

                    <div
                      onMouseEnter={() => handleSubSubmenuEnter('architecture')}
                      onMouseLeave={handleSubSubmenuLeave}
                      className="relative"
                    >
                      <Link href="/architecture" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        Architecture
                      </Link>
                      {activeSubSubmenu === 'architecture' && (
                        <div className="absolute left-full top-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <Link href="/architecture/hr" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                            B.Arch/M.Arch
                          </Link>
                        </div>
                      )}
                    </div>

                    <div
                      onMouseEnter={() => handleSubSubmenuEnter('engineering')}
                      onMouseLeave={handleSubSubmenuLeave}
                      className="relative"
                    >
                      <Link href="/engineering" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        Engineering
                      </Link>
                      {activeSubSubmenu === 'engineering' && (
                        <div className="absolute left-full top-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <Link href="/engineering/hr" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                            B.E/B.Tech/B.Arch
                          </Link>
                        </div>
                      )}
                    </div>

                    <div
                      onMouseEnter={() => handleSubSubmenuEnter('ayurvedic')}
                      onMouseLeave={handleSubSubmenuLeave}
                      className="relative"
                    >
                      <Link href="/ayurvedic" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        Ayurvedic
                      </Link>
                      {activeSubSubmenu === 'ayurvedic' && (
                        <div className="absolute left-full top-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <Link href="/ayurvedic/hr" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                            BAMS/MD in Ayurveda
                          </Link>
                        </div>
                      )}
                    </div>

                    <div
                      onMouseEnter={() => handleSubSubmenuEnter('dental')}
                      onMouseLeave={handleSubSubmenuLeave}
                      className="relative"
                    >
                      <Link href="/dental" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        Dental
                      </Link>
                      {activeSubSubmenu === 'dental' && (
                        <div className="absolute left-full top-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <Link href="/dental/hr" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                            BDS/MDS
                          </Link>
                        </div>
                      )}
                    </div>

                    <div
                      onMouseEnter={() => handleSubSubmenuEnter('medical')}
                      onMouseLeave={handleSubSubmenuLeave}
                      className="relative"
                    >
                      <Link href="/medical" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        Medical
                      </Link>
                      {activeSubSubmenu === 'medical' && (
                        <div className="absolute left-full top-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <Link href="/medical/hr" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                            MBBS/MD
                          </Link>
                        </div>
                      )}
                    </div>
                    <Link href="/all" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                      All
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Search */}
          <div className="hidden md:block">
            <div className="flex items-center -ml-4">
              <div className="hidden md:block relative">
                <div className="flex items-center">
                  <div className="-ml-11 relative flex items-center">
                    <i className="fas fa-search text-slate-100 absolute left-0 ml-4"></i>
                    <input
                      className="border border-zinc-600 border-solid bg-transparent text-white placeholder-gray-400 px-20 py-3 pl-12  font-normal   shadow-lg rounded-full"
                      type="text"
                      placeholder="Search Colleges..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>








          {/* Right side for links and buttons */}
          <div className="hidden md:flex items-center ">
            <Link href="/our-story" className="block px-4 lg:-mr-4 py-2  text-base text-white 100 font-sans  ">
              Our Story
            </Link>
            <Link href="/blog" className="block px-4 py-2 lg:-mr-4  text-base  text-white font-sans ">
              Blog
            </Link>
            <Link href="/contact" className="block px-4 py-2 lg:-mr-3 text-base text-white font-sans ">
              Contact
            </Link>
            <button className="ml-2 px-6 py-[10px] font-sans font-semibold rounded-sm focus:outline-none focus:bg-white-700 bg-indigo-700 hover:bg-white hover:text-indigo-700">
              College Predictor
            </button>
            <button className="ml-2 px-8 py-[10px] font-sans font-semibold rounded-sm focus:outline-none focus:bg-white-700 bg-indigo-700 hover:bg-white hover:text-indigo-700">
              Scholarship
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={handleMenuToggle}
              className="text-white focus:outline-none focus:bg-gray-700"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900">
          <div className="py-2 space-y-1 px-2">
            <Link href="/our-story" className="block" onClick={closeMenu}>
              Our Story
            </Link>
            <Link href="/blog" className="block" onClick={closeMenu}>
              Blog
            </Link>
            <Link href="/contact" className="block" onClick={closeMenu}>
              Contact
            </Link>
          </div>

          <div className="py-2 px-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Colleges..."
                className="w-full px-4 py-2 rounded-full focus:outline-none bg-transparent border border-gray-300 text-gray-700 placeholder-gray-500"
              />
            </div>
          </div>

          <div className="py-2 space-y-1 px-2">
            <button className="w-full text-white bg-indigo-600 py-2 rounded-sm hover:bg-white hover:text-indigo-600">
              College Predictor
            </button>
            <button className="w-full text-white bg-indigo-600 py-2 rounded-sm hover:bg-white hover:text-indigo-600">
              Scholarship
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

