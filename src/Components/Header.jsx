import { useMediaQuery } from "usehooks-ts";
import IconPhone from "/Users/strashevskyelisey/Desktop/coding/TestTasks/scrollTest/src/assets/svg/IconPhone.jsx";
import Logo from "/Users/strashevskyelisey/Desktop/coding/TestTasks/scrollTest/src/assets/svg/Logo.jsx";
function Header() {
  const mobile = useMediaQuery("(min-width: 1200px)");

  return (
    <nav className="mob:pl-0 pl-52 gap-[40vw] mob:gap-0 z-10 fixed w-full h-[7%] bg-gradient-to-b from-[#010101] to-[#464341] text-white flex justify-left mob:justify-between items-center">
      <Logo />
      <div className="text-lg mob:mr-4">
        {mobile ? "+7 (495) 495-49-54" : <IconPhone />}
      </div>
    </nav>
  );
}

export default Header;
