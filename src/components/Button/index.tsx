import { BiRightArrowAlt } from 'react-icons/bi'
import classNames from 'classnames'
import styles from './Button.module.scss'

const Button = () => {
  return (
    <div className={styles.wrapper}>
      <a href="https://google.com/">
        <div className={classNames(styles.button)}>
          Go to the event
          <BiRightArrowAlt />
        </div>
      </a>
    </div>
  )
}

export default Button
