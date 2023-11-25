import { Link } from "react-scroll";

const links = [
  { path: "home", name: "Home" },
  { path: "tours", name: "Tours" },
  { path: "discography", name: "Discography" },
  { path: "contact", name: "Contact" },
];
function Nav({ containerStyle = "", linkStyles = "" }) {
  return (
    <nav className={`${containerStyle}`}>
      {links.map((link, index) => {
        return (
          <Link
            className={`${linkStyles} cursor-pointer border-b-2 border-transparent`}
            to={link.path}
            key={index}
            smooth
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
