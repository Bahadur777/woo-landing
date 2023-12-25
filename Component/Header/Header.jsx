import "./header.css";
import Image from "next/image";
import Link from "next/link";
import LOGO from "../../public/Images/LOGO.svg";
import HeaderNavLink from "./HeaderNavLink";
import Button from "../Button/Button";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header flex flex-row  ">
      <div className="header-n">
        <div className="header-logo">
          <div><Link href="/">
            <Image src={LOGO} />
          </Link></div>
        </div>
        <div className="header-links">
            {HeaderNavLink.map(({ href, title }) => {
              return (
                <Link key={title} href={href}>
                  <span>{title}</span>
                </Link>
              );
            })}
          </div>
      </div>

      <div className="header-right">
        <ul className="header-right-link">
          <li className="text-xl	">Log in</li>
          <li>
            <Button btnText="Get Started" />
          </li>
          <li>
            <FaSearch />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
