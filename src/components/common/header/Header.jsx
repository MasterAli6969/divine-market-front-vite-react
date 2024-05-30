import DotaIcon from "../../../assets/icons/DotaIcon.svg";
import SteamIcon from "../../../assets/icons/SteamIcon.svg";
import CartIcon from "../../../assets/icons-svg-code/CartIcon";
import classNames from "classnames";
import styles from "./header.module.scss";

function Header() {
  return (
    <nav
      className={`navbar navbar-expand-lg px-5 py-2 mx-4 mt-2   ${styles.custom_background}`}
    >
      <div className="container-fluid ">
        <div>
          <a
            className={classNames("navbar-brand text-white", styles.logo)}
            href="/"
          >
            <h2>Divine Market</h2>
          </a>
        </div>
        <div className={classNames("dropdown", styles.dropdown_button)}>
          <a
            className="nav-link dropdown-toggle text-white"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src={DotaIcon} />
            <h4>Dota 2</h4>
          </a>
          <ul className={classNames("dropdown-menu", styles.custom_background)}>
            <li>
              <a href="#">Drop item</a>
            </li>
          </ul>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.header_nav_menu_links}`}
          >
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="/catalog"
              >
                Купить предметы
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/faq">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/advantages">
                Гарантии
              </a>
            </li>
          </ul>
          <div className={styles.used_cart_div}>
            <button>
              <CartIcon calor={"#fff"} />
            </button>
            <a href="/account">
              <button>
                <img src={SteamIcon} />
                <p>Войти через Steam</p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
