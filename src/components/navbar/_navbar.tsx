import styles from './_navbar.module.css';

const NavBar = () => {
  return (
    <nav className={`${styles.nav} flex justify-center items-center`}>
      <h1>Anh Hiếu Traveling!</h1>
    </nav>
  );
};

export default NavBar;