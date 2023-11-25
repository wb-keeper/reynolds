import { useContext } from "react";
import { NavContext } from "@/context/NavContext";

function NavMobile(props) {
  const { isOpen, setIsOpen } = useContext(NavContext);
  return (
    <nav
      className={`${
        isOpen ? "right-0" : "-right-full"
      } xl:hidden bg-primary w-full top-0 fixed z-20 bottom-0 transition-all duration-500`}
    >
      NavMobile
    </nav>
  );
}

export default NavMobile;
