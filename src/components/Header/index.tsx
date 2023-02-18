import Logo from '../../assets/Logo'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <Logo />
      </a>
    </header>
  )
}

export default Header
