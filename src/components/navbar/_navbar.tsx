'use client'
import { motion } from 'framer-motion';
import styles from './_navbar.module.css';
import { useEffect, useState } from 'react';

const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav className={`${styles.nav} ${scrollPosition > 100 ? styles.show : ''} flex justify-between items-center`}
    >
      <h6>Anh Hiếu<br></br>Traveling</h6>
      <ul>
        <li>
          <a href='#banner'>Trang chủ</a>
        </li>
        <li>
          <a href='#4cho'>Xe 4 chỗ</a>
        </li>
        <li>
          <a href='#7cho'>Xe 7 chỗ</a>
        </li>
        <li>
          <a href='#16cho'>Xe 16 chỗ</a>
        </li>
        <li>
          <a href='#29cho'>Xe 29 chỗ</a>
        </li>
      </ul>
      <h6>Khu vực<br></br>Tây Nguyên</h6>
    </motion.nav>
  );
};

export default NavBar;