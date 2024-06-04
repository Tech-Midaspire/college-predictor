import Link from 'next/link';
import Image from "next/legacy/image";

const Footer = ({ appLogo, eduaspire, facebookUrl, instagramUrl, linkedInUrl, footerLeftMenus, footerRightMenus, appContactNumber, appEmail, appCopyright }) => {
  return (
    <footer className="footer-area bg-slate-950  footer-gradient-bg position-relative  lg:pb-2  lg:pt-40  h-auto lg:mt-12">
      <div className="section-overlay ">
        <div className="container ">
          {/* footer-widget-area */}
          <div className="row footer-top-part section-p-t-b-90 grid  lg:grid-flow-col ">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
              <div className="footer-widget footer-about  grid-cols-4 ml-8 lg:ml-4 mr-0">
                <div className=" lg:pl-15 lg:ml-24 mb-2 lg:mb-7 shadow-md">
                  <Link className='' href={eduaspire}><Image
                    src={appLogo.src}
                    alt="App Logo"
                    width={appLogo.width}
                    height={appLogo.height}
                    className="object-contain"
                  /></Link>
                </div>
                <p className="text-white sm:ml-2 lg:pl-20">
                  Transforming aspirations into
                  <br /> achievements through personalised
                  <br /> educational consultancy.
                </p>
                <div className="footer-social mt-30  ">
                  <ul className="d-flex align-items-center flex  lg:ml-[90px]   mt-10 ">
                    {facebookUrl && (
                      <li className='mr-10'>
                        <Link href={facebookUrl}>
                          <i className="fa-brands fa-facebook-f text-white text-xl lg:text-2xl"></i>
                        </Link>
                      </li>
                    )}
                    {instagramUrl && (
                      <li className='mr-10'>
                        <Link href={instagramUrl}>
                          <i className="fab fa-instagram text-white text-xl lg:text-2xl"></i>
                        </Link>
                      </li>
                    )}
                    {linkedInUrl && (
                      <li>
                        <Link href={linkedInUrl}>
                          <i className="fa-brands fa-linkedin text-white text-xl lg:text-2xl" ></i>
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            {/* Other footer content */}
            <div className='lg:flex   lg:grid-cols-8  lg:mr-32  lg:justify-between '>
              <div className="col-12 col-sm-6 col-md-6 col-lg-2 offset-lg-2">
                <div className="footer-widget ">
                  <h6 className="footer-widget-title text-xl text-white font-bold ml-8 lg:-ml-5 mt-10 lg:mt-0 lg:-mr-3">Company</h6>
                  <div className="footer-links d-flex text-white font-sans ml-8 lg:-ml-5  mt-3 lg:mt-8">
                    <ul >
                      {footerLeftMenus?.map((menu, index) => (
                        <li className='mb-5 ' key={index}>
                          <Link href={menu.url}>
                            {menu.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-2">
                <div className="footer-widget">
                  <h6 className="footer-widget-title  text-xl text-white font-bold ml-8 lg:-ml-2 mt-10 lg:mt-0">Support</h6>
                  <div className="footer-links d-flex  ml-8 lg:-ml-2 mt-8 text-white font-sans">
                    <ul>
                      {footerRightMenus?.map((menu, index) => (
                        <li className='mb-5' key={index}>
                          <Link href={menu.url}>
                            {menu.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                <div className="footer-widget footer-contact-info -mr-3">


                  <h6 className="footer-widget-title  text-xl  text-white font-bold ml-8 lg:-ml-4 mt-10 lg:mt-0">Contact Info</h6>
                  <div className="footer-links d-flex text-white mt-8 ml-8 lg:-ml-4">
                    <ul className='-pl-2' >
                      <li className='mb-5'>
                        <i className="fa-solid fa-location-dot text-indigo-600 text-sm pr-2 lg:pr-2 "></i>
                        <span className='pl-4' >Level 15, Concord Tower - 1, UB City,<br /> <span className='pl-9 lg:pl-9'> Vittal Mallya Road, Bengaluru - 01</span></span>
                      </li>
                      <li className='mb-4'>
                        <i className="fa-solid fa-phone text-indigo-600 pr-5 text-xl"></i>
                        <Link href={`tel:${appContactNumber}`}>
                          {appContactNumber}
                        </Link>
                      </li>
                      <li className='mb-5'>
                        <i className="fa-regular fa-envelope text-indigo-600 pr-5 text-xl mt-1 lg:mt-2"></i>
                        <Link href={`mailto:${appEmail}`}>
                          {appEmail}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>




          {/*copyright-text*/}
          <div className="row copyright-wrapper mt-10">

            <div className="col-12 col-md-12 ">

              <div className="copyright-text text-center">
                <p className="text-white font-sans text-xs lg:text-sm pb-2 pt-10 lg:pt-20">

                  {appCopyright} Developed by{' '}
                  <span>
                    <Link href="https://corescent.in">
                      <span style={{ color: 'white' }}>Corescent Technologies</span>
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
