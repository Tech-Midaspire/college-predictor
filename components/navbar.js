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

  const toggleStreams = () => {
    if (activeSubmenu === "streams") {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu("streams");
    }
  };

  return (
    <nav className="bg-slate-950 text-white" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <div className="max-w-7xl mx-auto  px-0 lg:px-3 h-100px ">
        <div className="flex justify-between items-center w-full">
          {/* Left side for logo and streams button */}
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-16 -ml-10 lg:-ml-7">
              <Link href="https://eduaspire.xyz/">
                <Image src="/logo.webp" alt="Logo" width={100} height={100} />
              </Link>
            </div>
            <div className="relative z-20 hidden md:block">
              {/* Streams button */}
              <button
                onMouseEnter={() => handleMouseEnter("streams")}
                onMouseLeave={handleMouseLeave}
                className="px-4 py-2 font-sans rounded-sm focus:outline-none bg-white text-slate-900"
              >
                Streams <i className="fa-solid fa-angle-down ml-1"></i>
              </button>
              {/* Streams submenu */}
              {activeSubmenu === "streams" && (
                <div
                  onMouseEnter={() => handleMouseEnter("streams")}
                  onMouseLeave={handleMouseLeave}
                  className="origin-top-right absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 text-left"
                  role="menu"
                  aria-orientation="vertical"
                >
                  <div className="py-1" role="none">
                    {[
                      {
                        label: "Commerce",
                        link: "https://eduaspire.xyz/category/courses/Commerce",
                        subLink: "https://eduaspire.xyz/subcategory/courses/BCom-MCom",
                        subLabel: "B.Com/M.Com",
                      },
                      {
                        label: "Law",
                        link: "https://eduaspire.xyz/category/courses/law",
                        subLink: "https://eduaspire.xyz/subcategory/courses/LLB-LLM",
                        subLabel: "LLB/LLM",
                      },
                      {
                        label: "Management",
                        link: "https://eduaspire.xyz/category/courses/management",
                        subLink: "https://eduaspire.xyz/subcategory/courses/MBA-BBA",
                        subLabel: "MBA/BBA",
                      },
                      {
                        label: "Architecture",
                        link: "https://eduaspire.xyz/category/courses/architecture",
                        subLink: "https://eduaspire.xyz/subcategory/courses/BArch-MArch",
                        subLabel: "B.Arch/M.Arch",
                      },
                      {
                        label: "Engineering",
                        link: "https://eduaspire.xyz/category/courses/engineering",
                        subLink: "https://eduaspire.xyz/subcategory/courses/BE-BTech-MTech",
                        subLabel: "B.E/B.Tech/B.Arch",
                      },
                      {
                        label: "Ayurvedic",
                        link: "https://eduaspire.xyz/category/courses/ayurvedic",
                        subLink: "https://eduaspire.xyz/subcategory/courses/BAMS-MD-in-Ayurveda",
                        subLabel: "BAMS/MD in Ayurveda",
                      },
                      {
                        label: "Dental",
                        link: "https://eduaspire.xyz/category/courses/dental",
                        subLink: "https://eduaspire.xyz/subcategory/courses/BDS-MDS",
                        subLabel: "BDS/MDS",
                      },
                      {
                        label: "Medical",
                        link: "https://eduaspire.xyz/category/courses/medical",
                        subLink: "https://eduaspire.xyz/subcategory/courses/MBBS-MD-MS-BPT",
                        subLabel: "MBBS/MD",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        onMouseEnter={() => handleSubSubmenuEnter(item.label)}
                        onMouseLeave={handleSubSubmenuLeave}
                        className="relative flex justify-between"
                      >
                        <Link href={item.link} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                          {item.label}
                        </Link>
                        <i className="fa-solid fa-angle-right text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"></i>
                        {/* Submenu for each stream */}
                        {activeSubSubmenu === item.label && (
                          <div className="absolute left-full top-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <Link href={item.subLink} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                              {item.subLabel}
                            </Link>
                          </div>
                        )}
                      </div>
                    ))}
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
                    <input className="border border-zinc-600 border-solid bg-transparent text-white placeholder-gray-400 px-20 py-3 pl-12  font-normal   shadow-lg rounded-full"
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
            <Link href="https://eduaspire.xyz/about-us" className="block px-4 py-2 text-base text-white font-sans">
              Our Story
            </Link>
            <Link href="https://eduaspire.xyz/blogs" className="block px-4 py-2 text-base text-white font-sans">
              Blog
            </Link>
            <Link href="https://eduaspire.xyz/contact-us" className="block px-4 py-2 text-base text-white font-sans">
              Contact
            </Link>
            <Link href="https://eduaspire.online/">
              <button className="ml-2 px-6 py-2 font-sans font-semibold rounded-sm focus:outline-none focus:bg-white-700 bg-indigo-700 hover:bg-white hover:text-indigo-700">
                College Predictor
              </button>
            </Link>
            <Link href="https://eduaspire.online/scholarships">
              <button className="ml-2 px-8 py-2 font-sans font-semibold rounded-sm focus:outline-none focus:bg-white-700 bg-indigo-700 hover:bg-white hover:text-indigo-700">
                Scholarship
              </button>
            </Link>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={handleMenuToggle}
              className="text-white focus:outline-none"
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
        <div className="md:hidden bg-slate-900 h-screen overflow-y-auto">
          <div className="py-2 px-2">
            <div className="relative">
              <div className="flex items-center">
                <i className="fas fa-search text-slate-100 absolute left-0 ml-4"></i>
                <input
                  className="border border-zinc-600 border-solid bg-transparent text-white placeholder-gray-400 px-20 py-3 pl-12 font-normal shadow-lg rounded-full"
                  type="text"
                  placeholder="Search Colleges..."
                />
              </div>
            </div>
          </div>
          <div className="py-2 space-y-1 px-2">
            <Link href="https://eduaspire.xyz/about-us" className="block px-4 py-2 text-base text-white" onClick={closeMenu}>
              Our Story
            </Link>
            <Link href="https://eduaspire.xyz/blogs" className="block px-4 py-2 text-base text-white" onClick={closeMenu}>
              Blog
            </Link>
            <Link href="https://eduaspire.xyz/contact-us" className="block px-4 py-2 text-base text-white" onClick={closeMenu}>
              Contact
            </Link>
          </div>

          {/* Streams section */}
          <div className="px-2">
            <div className="relative">
              <button
                onClick={toggleStreams}
                className="w-full text-white bg-indigo-600 py-2 rounded-sm hover:bg-white hover:text-indigo-600"
              >
                Streams <i className="fa-solid fa-angle-down ml-1"></i>
              </button>
              {activeSubmenu === "streams" && (
                <div className="mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 max-h-80 overflow-y-auto">
                  <div className="py-1">
                    {[
                      {
                        label: "Commerce",
                        link: "https://eduaspire.xyz/category/courses/Commerce",
                        subLink: "https://eduaspire.xyz/subcategory/courses/BCom-MCom",
                        subLabel: "B.Com/M.Com",
                      },
                      {
                        label: "Law",
                        link: "https://eduaspire.xyz/category/courses/law",
                        subLink: "https://eduaspire.xyz/subcategory/courses/LLB-LLM",
                        subLabel: "LLB/LLM",
                      },
                      {
                        label: "Management",
                        link: "https://eduaspire.xyz/category/courses/management",
                        subLink: "https://eduaspire.xyz/subcategory/courses/MBA-BBA",
                        subLabel: "MBA/BBA",
                      },
                      {
                        label: "Architecture",
                        link: "https://eduaspire.xyz/category/courses/architecture",
                        subLink: "https://eduaspire.xyz/subcategory/courses/BArch-MArch",
                        subLabel: "B.Arch/M.Arch",
                      },
                      {
                        label: "Engineering",
                        link: "https://eduaspire.xyz/category/courses/engineering",
                        subLink: "https://eduaspire.xyz/subcategory/courses/BE-BTech-MTech",
                        subLabel: "B.E/B.Tech/B.Arch",
                      },
                      {
                        label: "Ayurvedic",
                        link: "https://eduaspire.xyz/category/courses/ayurvedic",
                        subLink: "https://eduaspire.xyz/subcategory/courses/BAMS-MD-in-Ayurveda",
                        subLabel: "BAMS/MD in Ayurveda",
                      },
                      {
                        label: "Dental",
                        link: "https://eduaspire.xyz/category/courses/dental",
                        subLink: "https://eduaspire.xyz/subcategory/courses/BDS-MDS",
                        subLabel: "BDS/MDS",
                      },
                      {
                        label: "Medical",
                        link: "https://eduaspire.xyz/category/courses/medical",
                        subLink: "https://eduaspire.xyz/subcategory/courses/MBBS-MD-MS-BPT",
                        subLabel: "MBBS/MD",
                      },
                    ].map((item) => (
                      <div key={item.label}>
                        <Link
                          href={item.link}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          onClick={closeMenu}
                        >
                          {item.label}
                        </Link>
                        <Link
                          href={item.subLink}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ml-4"
                          onClick={closeMenu}
                        >
                          {item.subLabel}
                        </Link>
                      </div>
                    ))}
                    <Link
                      href="https://eduaspire.xyz/courses"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      onClick={closeMenu}
                    >
                      All
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="py-2 space-y-1 px-2">
            <Link href="https://eduaspire.online/">
              <button className="w-full text-white bg-indigo-600 py-2 rounded-sm hover:bg-white hover:text-indigo-600" onClick={closeMenu}>
                College Predictor
              </button>
            </Link>
            <Link href="https://eduaspire.online/scholarships">
              <button className="w-full text-white bg-indigo-600 py-2 rounded-sm hover:bg-white hover:text-indigo-600" onClick={closeMenu}>
                Scholarship
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


