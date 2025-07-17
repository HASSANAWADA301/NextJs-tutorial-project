"use client";

import { useAppDispatch, useAppSelector } from "../../../src/store/hooks";
import { toggleTheme } from "../../../src/store/slices/darkSlice";


const ThemeToggleButton = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.ui.theme);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="p-2 px-4 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
    >
      {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default ThemeToggleButton;
