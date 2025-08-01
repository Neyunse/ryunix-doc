import config from "../config";
import { NavLink, useRouter, Image } from "@unsetsoft/ryunixjs";
import { useSideBarContext } from "../pages/context.ryx";
import Logo from "../resources/logo-min.svg";
const Header = () => {
  const router = useRouter();
  const cxt = useSideBarContext("sidebar");

  return (
    <header ryunix-class="site-header">
      <div ryunix-class="container header-container">
        <NavLink to="/" ryunix-class="logo">
          <Image src={Logo} width={40} height={40} fill="#fff" alt="" />
        </NavLink>
        <nav ryunix-class="main-nav">
          <ul ryunix-class="ul-nav">
            <li>
              <a
                href={config.repo}
                target="_blank"
                rel="noopener noreferrer"
                ryunix-class="nav-link"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
        {router.location !== "/" ? (
          <button
            ryunix-class="mobile-menu-toggle"
            aria-label="Abrir menú"
            aria-expanded="false"
            onClick={() => cxt.toggleSidebar()}
          >
            ☰
          </button>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

export default Header;
