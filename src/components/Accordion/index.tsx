import classNames from 'classnames'
import React, { useEffect } from 'react'
import styles from './Accordion.module.scss'
import bgFon from '../../assets/bgAccordVer/Rectangle 35.png'
import bgFonGorizont from '../../assets/bgAccordVer/vertical/Rectangle 37.png'

type AccordionType = {
  title: string
  images: string
  data: string
  number: string
  accordIndex: string
  bg: string
  bgv: string
  onClick: () => void
}

const Accordion: React.FC<AccordionType> = ({
  title,
  images,
  data,
  number,
  accordIndex,
  onClick,
  bg,
  bgv,
}) => {
  const widthWindow = window.innerWidth
  useEffect(() => {}, [widthWindow])
  return (
    <div className={styles.wrap}>
      <div
        className={classNames(styles.accordionWrapper, {
          [styles.active]: accordIndex === number,
        })}
        onClick={onClick}
      >
        <div className={styles.content}>
          <div className={styles.AcNumber}>{number}</div>
          <div className={styles.AcTitle}>{title}</div>
        </div>
        {accordIndex !== number && (
          <>
            <div className={styles.accordionWrapperImg}>
              <img
                src={widthWindow < 1500 ? bgv : bg}
                alt=""
              />
            </div>
            <div className={styles.accordionWrapperImg}>
              <img
                src={widthWindow < 1500 ? bgFonGorizont : bgFon}
                alt=""
              />
            </div>
          </>
        )}
      </div>
      <div
        className={classNames(styles.img, {
          [styles.active]: accordIndex === number,
        })}
      >
        <img
          src={images}
          alt="photo"
        />
        <div className={styles.imgbg}>
          <div className={styles.imgNumber}> {number}</div>
          <div className={styles.imgTitle}>{title}</div>
          <p className={styles.imgText}>{data}</p>
          <a href="https://google.com/">
            <div className={styles.imgBtn}>More information</div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Accordion
