import Link from 'next/link';
import Image from "next/legacy/image";

const Footer = ({ appLogo, eduaspire, facebookUrl, instagramUrl, linkedInUrl, footerLeftMenus, footerRightMenus, appContactNumber, appEmail, appCopyright }) => {
  return (
    <footer className="footer-area bg-slate-950 footer-gradient-bg flex flex-col lg:pb-2 lg:pt-40 h-auto lg:mt-12">
      <div className="section-overlay h-full w-full flex m-0 p-0">
        <div className="container mx-auto">
          <div className="row footer-top-part section-p-t-b-90 flex flex-wrap">
            {/* Logo and About section */}
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-8 lg:mb-0">
              <div className="footer-widget footer-about text-16 font-normal">
                <div className="overflow-visible inline-block pl-5">
                  <Link href={eduaspire}>
                    <div className="relative mx-auto mb-8 w-24 h-24 overflow-visible">
                      <Image
                        src={appLogo.src}
                        alt="App Logo"
                        width={appLogo.width}
                        height={appLogo.height}
                        className="object-contain"
                      />
                    </div>
                  </Link>
                </div>
                <p className="text-white leading-6 text-16 mx-4">
                  Transforming aspirations into achievements through personalised educational consultancy.
                </p>
                <div className="footer-social mt-8 flex ">
                  <ul className="flex pl-[15px] space-x-8">
                    {facebookUrl && (
                      <li>
                        <Link href={facebookUrl}>
                          <i className="fa-brands fa-facebook-f text-white text-lg"></i>
                        </Link>
                      </li>
                    )}
                    {instagramUrl && (
                      <li>
                        <Link href={instagramUrl}>
                          <i className="fab fa-instagram text-white text-lg"></i>
                        </Link>
                      </li>
                    )}
                    {linkedInUrl && (
                      <li>
                        <Link href={linkedInUrl}>
                          <i className="fa-brands fa-linkedin text-white text-lg"></i>
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            {/* Company and Support section */}
            <div className="col-12 col-sm-6 col-md-6 col-lg-2 offset-lg-2 mb-8 lg:mb-0 pl-[15px] lg:pl-0">
              <div className="footer-widget text-16 font-normal ">
                <h6 className="footer-widget-title text-xl text-white font-bold mb-8 text-21">Company</h6>
                <ul className="footer-links text-white">
                  {footerLeftMenus?.map((menu, index) => (
                    <li className="mb-5 text-16 leading-6" key={index}>
                      <Link href={menu.url}>
                        {menu.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-2 mb-8 lg:mb-0 pl-[15px] lg:pl-0">
              <div className="footer-widget">
                <h6 className="footer-widget-title text-xl text-white font-bold mb-8 text-21">Support</h6>
                <ul className="footer-links text-white">
                  {footerRightMenus?.map((menu, index) => (
                    <li className="mb-5 text-16 leading-6" key={index}>
                      <Link href={menu.url}>
                        {menu.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Contact Info */}
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 pl-[15px] lg:pl-0">
              <div className="footer-widget">
                <h6 className="footer-widget-title text-xl text-white font-bold mb-8 text-21">Contact Info</h6>
                <ul className="footer-links text-white">
                  <li className="pb-5 text-16 leading-6">
                    <i className="fa-solid fa-location-dot text-indigo-600 mr-5 text-23 align-middle"></i>
                    <span>Level 15, Concord Tower - 1, UB City, Vittal Mallya Road, Bengaluru - 01</span>
                  </li>
                  <li className="pb-5 text-16 leading-6">
                    <i className="fa-solid fa-phone text-indigo-600 mr-5 text-23 align-middle"></i>
                    <Link href={`tel:${appContactNumber}`}>{appContactNumber}</Link>
                  </li>
                  <li className="pb-5 text-16 leading-6">
                    <i className="fa-regular fa-envelope text-indigo-600 mr-5 text-23 align-middle"></i>
                    <Link href={`mailto:${appEmail}`}>{appEmail}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Copyright */}
          <div className="row copyright wrapper text-[16px] flex p-0 m-0 py-[27px] border-t-[1px] border-solid border-[rgba(255,255,255,0.14)]	">

            <div className="col-12 col-md-12">
              <div className="copyright-text text-center ">
                <p className="text-white font-13 al leading-[20px]">
                  {appCopyright} Developed by{' '}
                  <Link href="https://corescent.in">
                    <span className="text-white ">Corescent Technologies |</span>
                  </Link>
                  <Link href="https://eduaspire.xyz/privacy-policy">
                    <span className="text-white ">Privacy Policy |</span>
                  </Link>
                  <Link href="https://eduaspire.xyz/refund-policy">
                    <span className="text-white ">Refund Policy |</span>
                  </Link>
                  <Link href="https://eduaspire.xyz/terms-conditions">
                    <span className="text-white ">Terms and Conditions</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
