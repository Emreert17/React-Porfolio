import { useTheme } from "../context/ThemeContext";
import { LuSun } from "react-icons/lu";
import { MdOutlineNightlight } from "react-icons/md";

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <button className="btn-theme" onClick={toggleTheme}>
        {theme === "light" ? (
          <LuSun size={25} />
        ) : (
          <MdOutlineNightlight size={25} />
        )}
      </button>
    </>
  );
}
