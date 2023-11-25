import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";

const links = [
  { path: "home", name: "Home" },
  { path: "tours", name: "Tours" },
  { path: "discography", name: "Discography" },
  { path: "contact", name: "Contact" },
];
function Nav({ containerStyle, linkStyles }) {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1310px)",
  });
  return (
    <nav className={`${containerStyle}`}>
      {links.map((link, index) => {
        return (
          <Link
            className={`${linkStyles} cursor-pointer border-b-2 border-transparent`}
            to={link.path}
            key={index}
            smooth={isDesktop}
            spy
            offset={-50}
            activeClass="active"
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}

export default Nav;
