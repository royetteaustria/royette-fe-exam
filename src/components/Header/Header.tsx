import menu from "../../assets/svg/header/hamburgerMenu.svg";
import logo from "../../assets/svg/header/logo.svg";
import wallet from "../../assets/svg/header/wallet.svg";
import profile from "../../assets/svg/header/profile.svg";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="app-header">
        <span className="button">
          <img src={menu} className="menu" />
          <img src={logo} className="logo" />
        </span>
        <span className="left-section">
          <img src={wallet} className="wallet" />
          <span className="balance">$1990.6</span>
          <img src={profile} className="profile" />
        </span>
      </header>
    </>
  );
};

export default Header;
