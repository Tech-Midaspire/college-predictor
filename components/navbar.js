import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeSubSubmenu, setActiveSubSubmenu] = useState(null);

  let submenuTimeout;
  let subSubmenuTimeout;

  const handleMouseEnter = (submenu) => {
    clearTimeout(submenuTimeout);
    setActiveSubmenu(submenu);
    setActiveSubSubmenu(null);
  };

  const handleMouseLeave = () => {
    submenuTimeout = setTimeout(() => {
      setActiveSubmenu(null);
      setActiveSubSubmenu(null);
    }, 300);
  };


  const handleSubSubmenuEnter = (subSubmenu) => {
    clearTimeout(subSubmenuTimeout);
    setActiveSubSubmenu(subSubmenu);
  };

  const handleSubSubmenuLeave = () => {
    subSubmenuTimeout = setTimeout(() => {
      setActiveSubSubmenu(null);
    }, 300);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {

      document.body.style.overflow = "hidden";
    } else {

      document.body.style.overflow = "auto";
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <nav className="bg-slate-950 text-white pb-5 lg:pb-0 -mr-3 lg:mr-0">
      <div className="max-w-7xl mx-auto px-4 lg:px-3 h-100px">
        <div className="flex justify-between items-center">
          {/* Left side for logo and streams button */}
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-16 -ml-4 lg:-ml-7">
              <Link href="https://eduaspire.xyz/">
                <Image src="/logo.webp" alt="Logo" width={100} height={100} />
              </Link>
            </div>

            <div className="relative z-20  ">
              <button
                onMouseEnter={() => handleMouseEnter('streams')}
                onMouseLeave={handleMouseLeave}
                className="px-6 =ml-4 py-[5px] font-sans rounded-sm focus:outline-none focus:bg-white-700 bg-white text-slate-900"
              >
                Streams<i class="fa-solid fa-angle-down ml-1"></i>

              </button>
              {activeSubmenu === 'streams' && (
                <div
                  onMouseEnter={() => handleMouseEnter('streams')}
                  onMouseLeave={handleMouseLeave}
                  className="origin-top-right absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 text-center focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                >
                  <div className="py-1" role="none">
                    <div
                      onMouseEnter={() => handleSubSubmenuEnter('commerce')}
                      onMouseLeave={handleSubSubmenuLeave}
                      className="relative flex justify-between"
                    >
                      <Link href="https://eduaspire.xyz/category/courses/Commerce" className="block ml-4 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        Commerce<i class="fa-solid fa-angle-right ml-5"></i>
                      </Link>
                      {activeSubSubmenu === 'commerce' && (
                        <div className="absolute left-full top-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <Link href="https://eduaspire.xyz/subcategory/courses/BCom-MCom" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
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
                      <Link href="https://eduaspire.xyz/category/courses/law" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        Law <i class="fa-solid fa-angle-right"></i>
                      </Link>
                      {activeSubSubmenu === 'law' && (
                        <div className="flex justify-between absolute left-full top-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <Link href="https://eduaspire.xyz/subcategory/courses/LLB-LLM" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
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
                      <Link href="https://eduaspire.xyz/category/courses/management" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        Management<i class="fa-solid fa-angle-right"></i>
                      </Link>
                      {activeSubSubmenu === 'management' && (
                        <div className="flex justify-between absolute left-full top-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <Link href="https://eduaspire.xyz/subcategory/courses/MBA-BBA" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
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
                      <Link href="https://eduaspire.xyz/category/courses/architecture" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        Architecture<i class="fa-solid fa-angle-right"></i>
                      </Link>
                      {activeSubSubmenu === 'architecture' && (
                        <div className="flex justify-between absolute left-full top-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <Link href="https://eduaspire.xyz/subcategory/courses/BArch-MArch" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
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
                      <Link href="https://eduaspire.xyz/category/courses/engineering" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        Engineering<i class="fa-solid fa-angle-right"></i>
                      </Link>
                      {activeSubSubmenu === 'engineering' && (
                        <div className="flex justify-between absolute left-full top-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <Link href="https://eduaspire.xyz/subcategory/courses/BE-BTech-MTech" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
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
                      <Link href="https://eduaspire.xyz/category/courses/ayurvedic" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        Ayurvedic <i class="fa-solid fa-angle-right"></i>
                      </Link>
                      {activeSubSubmenu === 'ayurvedic' && (
                        <div className="flex justify-between absolute left-full top-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">

                          <Link href="https://eduaspire.xyz/subcategory/courses/BAMS-MD-in-Ayurveda" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
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
                      <Link href="https://eduaspire.xyz/category/courses/dental" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        Dental<i class="fa-solid fa-angle-right"></i>
                      </Link>
                      {activeSubSubmenu === 'dental' && (
                        <div className="flex justify-between absolute left-full top-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <Link href="https://eduaspire.xyz/subcategory/courses/BDS-MDS" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
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
                      <Link href="https://eduaspire.xyz/category/courses/medical" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        Medical<i class="fa-solid fa-angle-right"></i>
                      </Link>
                      {activeSubSubmenu === 'medical' && (
                        <div className="flex justify-between absolute left-full top-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <Link href="https://eduaspire.xyz/subcategory/courses/MBBS-MD-MS-BPT" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                            MBBS/MD
                          </Link>
                        </div>
                      )}
                    </div>
                    <Link href="https://eduaspire.xyz/courses" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
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
            <Link href="https://eduaspire.xyz/about-us" className="block px-4 lg:-mr-4 py-2  text-base text-white 100 font-sans  ">
              Our Story
            </Link>
            <Link href="https://eduaspire.xyz/blogs" className="block px-4 py-2 lg:-mr-4  text-base  text-white font-sans ">
              Blog
            </Link>
            <Link href="https://eduaspire.xyz/contact-us" className="block px-4 py-2 lg:-mr-3 text-base text-white font-sans ">
              Contact
            </Link>
            <Link href="https://college-predictor-beta.vercel.app/"><button className="ml-2 px-6 py-[10px] font-sans font-semibold rounded-sm focus:outline-none focus:bg-white-700 bg-indigo-700 hover:bg-white hover:text-indigo-700">
              College Predictor
            </button></Link>

            <Link href="https://college-predictor-beta.vercel.app/scholarships">
              <button className="ml-2 px-8 py-[10px] font-sans font-semibold rounded-sm focus:outline-none focus:bg-white-700 bg-indigo-700 hover:bg-white hover:text-indigo-700">
                Scholarship
              </button>
            </Link>

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
        <>
          <div className="md:hidden bg-slate-900 h-screen ">
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
              <button className="w-full text-white bg-indigo-600 py-2 rounded-sm hover:bg-white hover:text-indigo-600" onClick={closeMenu}>
                College Predictor
              </button>
              <button className="w-full text-white bg-indigo-600 py-2 rounded-sm hover:bg-white hover:text-indigo-600" onClick={closeMenu}>
                Scholarship
              </button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;

