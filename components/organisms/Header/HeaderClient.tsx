"use client";

import { useEffect, useState } from "react";
import { FaArrowLeft, FaBars, FaSearch, FaUser } from "react-icons/fa";
import Logo from "@/components/atoms/Logo/Logo";
import IconButton from "@/components/atoms/IconButton/IconButton";
import { NavMenu } from "@/components/molecules/NavMenu/NavMenu";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../../../src/utils/i18n";

import {
  toggleMobileMenu,
  toggleTabletMenu,
  closeMenus,
  setLanguage,
} from "../../../src/store/slices/headerSlice";
import { useAppDispatch, useAppSelector } from "../../../src/store/hooks";
import ThemeToggleButton from "@/components/atoms/ThemeToggleButton/ThemeToggleButton";

type NavItem = { label: string; href: string };
type MultilingualNavItems = { [key: string]: NavItem[] };
type MultilingualLabel = { [key: string]: string };

type HeaderConfig = {
  navItems: MultilingualNavItems;
  showSearchIcon: boolean;
  showUserIcon: boolean;
  contactLabel: MultilingualLabel;
  logoUrl: string;
};

interface Props {
  headerConfig: HeaderConfig;
}

const HeaderClient = ({ headerConfig }: Props) => {
  const dispatch = useAppDispatch();
  const { isOpen, isOpen335, language } = useAppSelector((state) => state.header);

  const [windowWidth, setWindowWidth] = useState(0);
  const isMobile = windowWidth <= 1024;
  const isTabletNav = windowWidth > 1024 && windowWidth <= 1335;
  const isDesktop = windowWidth > 1335;

  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const lang = headerConfig.navItems[currentLang] ? currentLang : "en";

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
        if (window.innerWidth > 1024 && isOpen) dispatch(closeMenus());
        if ((window.innerWidth <= 1024 || window.innerWidth > 1335) && isOpen335) {
          dispatch(closeMenus());
        }
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [dispatch, isOpen, isOpen335]);

  if (!headerConfig) return null;

  const handleLangChange = (lng: string) => {
    i18n.changeLanguage(lng);
    dispatch(setLanguage(lng));
  };

  return (
    <header className="block mx-auto justify-center pt-[20px] ">
      <div className="justify-center m-auto w-full flex gap-[20px] text-gray-500 bg-white dark:bg-black">
        <ThemeToggleButton/>
        <button onClick={() => handleLangChange("en")}>EN</button>
        <button onClick={() => handleLangChange("fr")}>FR</button>
        <button onClick={() => handleLangChange("ar")}>AR</button>
      </div>

      <div className="hidden max-w-[1296px] w-[100vw] h-[60px] p-10 m-auto box-border justify-between items-center max-[1335px]:flex">
        <div className={`${isOpen ? "hidden" : ""}`}>
          <Logo src={headerConfig.logoUrl} />
        </div>

        {isTabletNav && (
          <button
            className="w-[45px] h-[45px] text-gray-500 rounded-full flex items-center justify-center text-xl"
            onClick={() => dispatch(toggleTabletMenu())}
          >
            <IconButton Icon={isOpen335 ? FaArrowLeft : FaBars} />
          </button>
        )}

        {isMobile && (
          <button
            className="z-2000 text-[18px] w-[42px] h-[42px] text-gray-500 rounded-full flex items-center justify-center"
            onClick={() => dispatch(toggleMobileMenu())}
          >
            <IconButton Icon={isOpen ? FaArrowLeft : FaBars} />
          </button>
        )}
      </div>

      {isDesktop && (
        <nav className="flex items-center justify-center text-sm bg-gray-100 rounded-full max-w-[1295px] w-screen h-[80px]">
          <Logo src={headerConfig.logoUrl} />
          <NavMenu items={headerConfig.navItems[lang]} />
          <li className="bg-[#eb6f2d] text-white rounded-full py-2 px-4 list-none">
            {headerConfig.contactLabel[currentLang]}
          </li>
          <div className="pr-6 pl-5 flex gap-2">
            {headerConfig.showSearchIcon && (
              <IconButton
                className="bg-gray-200 text-gray-500 rounded-full w-[50px] h-[50px] flex items-center justify-center ml-2"
                Icon={FaSearch}
              />
            )}
            {headerConfig.showUserIcon && (
              <IconButton
                className="bg-gray-200 text-gray-500 rounded-full w-[50px] h-[50px] flex items-center justify-center ml-2"
                Icon={FaUser}
              />
            )}
          </div>
        </nav>
      )}

      {isTabletNav && isOpen335 && (
        <motion.nav
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed top-[20px] right-[5%] bottom-0 mt-[20px] w-[70vw] flex items-center rounded-[100px] h-[80px] left-[20%] justify-center bg-gray-200 z-[1000] overflow-y-auto"
        >
          <NavMenu items={headerConfig.navItems[lang]} />
          <li className="bg-[#eb6f2d] text-white rounded-full text-sm py-1.5 px-3.5 list-none">
            {headerConfig.contactLabel[currentLang]}
          </li>
          <div className="flex gap-3">
            {headerConfig.showSearchIcon && (
              <IconButton className="bg-gray-200 flex text-gray-500 w-[46px] h-[46px] text-sm justify-center items-center" Icon={FaSearch} />
            )}
            {headerConfig.showUserIcon && (
              <IconButton className="bg-gray-200 flex text-gray-500 w-[46px] h-[46px] text-sm justify-center items-center" Icon={FaUser} />
            )}
          </div>
        </motion.nav>
      )}

      {isMobile && isOpen && (
        <motion.nav
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 right-0 left-0 bottom-0 pt-[200px] flex flex-col justify-start bg-gray-200 z-[1000] overflow-y-auto animate-slideDown rounded-t-[30%] w-[100vw] items-center"
        >
          <Logo src={headerConfig.logoUrl} />
          <NavMenu items={headerConfig.navItems[lang]} />
          <li className="bg-[#eb6f2d] text-white rounded-full text-sm py-1.5 px-2.5 mb-2 list-none items-center justify-center">
            {headerConfig.contactLabel[currentLang]}
          </li>
          <div className="flex items-center gap-4 px-4">
            {headerConfig.showSearchIcon && (
              <IconButton className="bg-gray-200 flex text-gray-500 w-[40px] h-[40px] text-base justify-center items-center" Icon={FaSearch} />
            )}
            {headerConfig.showUserIcon && (
              <IconButton className="bg-gray-200 flex text-gray-500 w-[40px] h-[40px] text-base justify-center items-center" Icon={FaUser} />
            )}
          </div>
        </motion.nav>
      )}
    </header>
  );
};

export default HeaderClient;
