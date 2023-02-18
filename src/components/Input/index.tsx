import classNames from 'classnames'
import emailjs from '@emailjs/browser'
import { useEffect, useState } from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import styles from './Input.module.scss'
import Loading from '../Loader'

type InputType = {
  setOpenModal: any
  openModal: boolean
}

const Input: React.FC<InputType> = ({ setOpenModal, openModal }) => {
  const [email, setEmail] = useState('')
  const [emailDirty, setEmailDirty] = useState(false)
  const [emailError, setEmailError] = useState('*E-mail не может быть пустым')
  const [formValid, setForValid] = useState(false)
  const [status, setStatus] = useState('')

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'E-mail':
        setEmailDirty(true)
        break
    }
  }

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('*Некоректный емайл!')
    } else {
      setEmailError('')
    }
  }

  const onSendEmail = () => {
    setStatus('pending')
    const data = {
      email: email,
    }
    emailjs
      .send('service_w9eepyk', 'template_pwikoyu', data, '2R9kd93Ni3EE7BOYv')
      .then(
        (result) => {
          setStatus('fullfiled')
          setEmail('')
          if (result.text) {
            setOpenModal(true)
          }
        },
        (error) => {
          setEmail('')
          alert(error.text)
        }
      )
  }

  useEffect(() => {
    if (emailError) {
      setForValid(false)
    } else {
      setForValid(true)
    }
  }, [emailError])
  return (
    <div className={styles.inner}>
      <input
        type="text"
        placeholder="Enter your Email and get notified"
        onBlur={blurHandler}
        onChange={emailHandler}
        value={email}
        name={'E-mail'}
        className={classNames(styles.input, {
          [styles.errorInput]: emailDirty,
        })}
      />
      <div
        onClick={onSendEmail}
        className={classNames(styles.arrow, { [styles.error]: !formValid })}
      >
        <BiRightArrowAlt />
      </div>
      {emailDirty && emailError && (
        <div className={styles.errorMessage}>{emailError}</div>
      )}
      {status === 'pending' ? <Loading /> : null}
    </div>
  )
}

export default Input
