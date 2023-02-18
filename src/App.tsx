import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import AccordionContainer from './components/AccordionContainer.module.scss'
import Button from './components/Button'
import Content from './components/Content'
import Header from './components/Header'
import Input from './components/Input'
import Modal from './components/Modal'
import Time from './components/Time'
import './scss/app.scss'

const App = () => {
  const [openModal, setOpenModal] = useState(false)
  const [openAccord, setOpenAccord] = useState(false)
  const [loadingPage, setLoadingPage] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(true)
    }, 1000)
  }, [loadingPage])

  useEffect(() => {
    if (openAccord) {
      window.scrollTo({
        top: 1000,
        behavior: 'smooth',
      })
    }
  }, [openAccord])
  return (
    <div
      className={classNames('container', { containerAnimation: loadingPage })}
    >
      <Header />
      <div className="main">
        <Content />
        <Time />
        <div className="text">Check our event page when you wait:</div>
        <Button />
      </div>
      <footer className="footer">
        <Input
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
        <div
          className="accord"
          onClick={() => setOpenAccord(!openAccord)}
        >
          Other Events
          {openAccord ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
        </div>
      </footer>
      {openAccord ? <AccordionContainer /> : null}
      <Modal
        isOpenModal={openModal}
        setOpenModal={() => setOpenModal(false)}
      />
    </div>
  )
}

export default App
