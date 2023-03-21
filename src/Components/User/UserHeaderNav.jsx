import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import ImgMinhaConta from "../../Assets/feed.svg";
import ImgEstatisticas from "../../Assets/estatisticas.svg";
import ImgAdicionarFoto from "../../Assets/adicionar.svg";
import ImgSair from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end>
          <img src={ImgMinhaConta} alt="" />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <img src={ImgEstatisticas} alt="" />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <img src={ImgAdicionarFoto} alt="" />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={userLogout}>
          <img src={ImgSair} alt="" />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
