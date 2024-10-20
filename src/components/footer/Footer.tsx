import { footerLink } from "./FooterLink";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="icon-bar">
      {footerLink.map((links, key) => (
        <Link to={links.path}>
          <li key={key}>
          <img src={links.image} alt="Sports" />
          {links.Name}
        </li>
        </Link>
      ))}
    </div>
  );
};

export default Footer;
