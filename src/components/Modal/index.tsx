import { AiOutlineClose } from 'react-icons/ai'
import styles from './Modal.module.scss'
import classNames from 'classnames'
import Button from '../Button'

type Modal = {
  isOpenModal: boolean
  setOpenModal: () => void
}

const Modal: React.FC<Modal> = ({ isOpenModal, setOpenModal }) => {
  return (
    <>
      <div
        className={classNames(styles.wrapper, {
          [styles.showModal]: isOpenModal,
        })}
      >
        <div className={classNames(styles.container)}>
          <AiOutlineClose
            className={styles.closes}
            onClick={setOpenModal}
          />
          <h3 className={styles.title}>SUCCESS!</h3>
          <p className={styles.text}>
            You have successfully subscribed to the email newsletter
          </p>
          <button
            onClick={setOpenModal}
            className={styles.btn}
          >
            Close
          </button>
        </div>
      </div>
    </>
  )
}

export default Modal
