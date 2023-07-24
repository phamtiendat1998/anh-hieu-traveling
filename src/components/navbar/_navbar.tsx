import styles from './_navbar.module.css';

const NavBar = () => {
  return (
    <nav className={`${styles.nav} flex justify-center items-center`}>
      <p>Anh Hiếu Traveling!</p>
    </nav>
  );
};

export default NavBar;