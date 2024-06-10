import React, { useState, useEffect } from "react";
import Script from "next/script";
import Dropdown from "../components/dropdown";
import { useRouter } from "next/router";
import getConstants from "../constants";
import Footer from "../components/Footer";

const ScholarshipPage = () => {
  const categoryOptions = getConstants().SCHOLARSHIP_CATEGORY_OPTIONS || [];
  const genderOptions = getConstants().SCHOLARSHIP_GENDER_OPTIONS || [];
  const statusOptions = getConstants().SCHOLARSHIP_STATUS_OPTIONS;
  const gradeOptions = getConstants().GRADE_OPTIONS;
  const stateOptions = getConstants().STATE_OPTIONS;
  const familyincomeOptions = getConstants().FAMILY_INCOME_OPTIONS;
  const cityOptions = getConstants().CITY_OPTIONS;
  const streamOptions = getConstants().STREAM_OPTIONS;
  const examOptions = getConstants().EXAM_OPTIONS;

  const [familyIncome, setFamilyIncome] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [grade, setGrade] = useState("");
  const [stream, setStream] = useState("");
  const [stateName, setStateName] = useState("");
  const [cityName, setCityName] = useState("");
  const [isClient, setIsClient] = useState(false);

  const footerLeftMenus = [
    { url: '/about', name: 'About' },
    { url: '/faq', name: 'FAQ' },
    { url: '/blogs', name: 'Blogs' },
  ];

  const footerRightMenus = [
    { url: '/contact', name: 'Contact' },
    { url: '/support-ticket-faq', name: 'Support' },
    { url: '/courses', name: 'Courses' },
  ];

  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  function incomeValueToFloat(value) {
    return parseFloat(value.split("_")[0]);
  }

  const handleCategoryDropdownChange = (selectedOption) => {
    setCategory(selectedOption.label);
  };

  const handleStatusDropdownChange = (selectedOption) => {
    setStatus(selectedOption.label);
  };

  const handleGradeDropdownChange = (selectedOption) => {
    setGrade(selectedOption.label);
  };

  const handleGenderDropdownChange = (selectedOption) => {
    setGender(selectedOption.label);
  };

  const handleStreamDropdownChange = (selectedOption) => {
    setStream(selectedOption.label);
  };

  const handleStateNameDropdownChange = (selectedOption) => {
    setStateName(selectedOption.label);
  };

  const handleCityNameDropdownChange = (selectedOption) => {
    setCityName(selectedOption.label);
  };

  const handleFamilyIncomeChange = (selectedOption) => {
    const floatValue = incomeValueToFloat(selectedOption.value);
    setFamilyIncome(floatValue);
  };

  const handleSubmit = () => {
    router.push(
      `/scholarship_finder?status=${status}&category=${category}&familyIncome=${familyIncome}&stream=${stream}&grade=${grade}&stateName=${stateName}&cityName=${cityName}&gender=${gender}`
    );
  };

  const isSubmitDisabled =
    !familyIncome ||
    !category ||
    !status ||
    !gender ||
    !stateName ||
    !cityName ||
    !stream ||
    !grade;

  const dropdownProps = {
    menuPortalTarget: isClient ? document.body : null,
    styles: isClient
      ? {
          menuPortal: (base) => ({ ...base, zIndex: 9999 }),
        }
      : {},
    className: "w-full",
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <div className="flex flex-col justify-start items-center w-full pt-8 pb-10 ">
        <div className="text-center flex flex-col items-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2 px-4">
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-FHGVRT52L7"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-FHGVRT52L7');
            `}
          </Script>
          <Script src="https://kit.fontawesome.com/0a5626b05a.js" crossorigin="anonymous"></Script>
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center text-zinc-100">
            {getConstants().SCHOLARSHIP_TITLE}
          </h1>
          <div className="flex flex-wrap gap-6 w-full justify-center">
            <div className="flex flex-col sm:flex-row gap-6 w-full">
              <div className="w-full sm:w-1/2">
                <label className="block text-md font-semibold text-zinc-100 mb-2">
                  {getConstants().STATUS_LABEL}
                </label>
                <Dropdown
                  options={statusOptions}
                  onChange={handleStatusDropdownChange}
                  {...dropdownProps}
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block text-md font-semibold text-zinc-100 mb-2">
                  {getConstants().GRADE_LABEL}
                </label>
                <Dropdown
                  options={gradeOptions}
                  onChange={handleGradeDropdownChange}
                  {...dropdownProps}
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 w-full">
              <div className="w-full sm:w-1/2">
                <label className="block text-md font-semibold text-zinc-100 mb-2">
                  {getConstants().STREAM_LABEL}
                </label>
                <Dropdown
                  options={streamOptions}
                  onChange={handleStreamDropdownChange}
                  {...dropdownProps}
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block text-md font-semibold text-zinc-100 mb-2">
                  {getConstants().CATEGORY_LABEL}
                </label>
                <Dropdown
                  options={categoryOptions}
                  onChange={handleCategoryDropdownChange}
                  {...dropdownProps}
                />
                <p className="text-sm text-zinc-50 mt-1">
                  {getConstants().CATEGORY_HELP_TEXT}
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 w-full">
              <div className="w-full sm:w-1/2">
                <label className="block text-md font-semibold text-zinc-100 mb-2">
                  {getConstants().FAMILY_INCOME_LABEL}
                </label>
                <Dropdown
                  options={familyincomeOptions}
                  onChange={handleFamilyIncomeChange}
                  {...dropdownProps}
                />
                <p className="text-sm text-zinc-50 mt-1">
                  {getConstants().FAMILY_INCOME_HELP_TEXT}
                </p>
                <p className="text-sm text-zinc-50">
                  {getConstants().FAMILY_INCOME_HELP_TEXT_TWO}
                </p>
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block text-md font-semibold text-zinc-100 mb-8 lg:mb-2  ">
                  {getConstants().GENDER_LABEL}
                </label>
                <Dropdown
                  options={genderOptions}
                  onChange={handleGenderDropdownChange}
                  {...dropdownProps}
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 w-full">
              <div className="w-full sm:w-1/2">
                <label className="block text-md font-semibold text-zinc-100 mb-2">
                  {getConstants().STATE_LABEL}
                </label>
                <Dropdown
                  options={stateOptions}
                  onChange={handleStateNameDropdownChange}
                  {...dropdownProps}
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block text-md font-semibold text-zinc-100 mb-2">
                  {getConstants().CITY_LABEL}
                </label>
                <Dropdown
                  options={cityOptions}
                  onChange={handleCityNameDropdownChange}
                  {...dropdownProps}
                />
              </div>
            </div>
          </div>
          <button
            className="mt-10 px-5 py-2 rounded-lg bg-red-600 text-zinc-100 hover:cursor-pointer hover:bg-red-700 active:bg-red-800 disabled:bg-indigo-700 disabled:text-white disabled:cursor-not-allowed"
            onClick={handleSubmit}
            disabled={isSubmitDisabled}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="w-full bg-slate-950 px-4 lg:px-0">
        <Footer
          appLogo={{ src: "/logo.webp", width: 100, height: 100 }}
          eduaspire="https://eduaspire.xyz/"
          facebookUrl="https://www.facebook.com/eduaspiresolutions/"
          instagramUrl="https://instagram.com"
          linkedInUrl="https://linkedin.com"
          footerLeftMenus={footerLeftMenus}
          footerRightMenus={footerRightMenus}
          appContactNumber="080 - 69409312"
          appEmail="care@eduaspire.xyz"
          appCopyright="© 2024 | Eduaspire. All Rights Reserved. "
        />
      </div>
    </div>
  );
};

export default ScholarshipPage;
