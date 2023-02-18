import Accordion from '../Accordion'
import styles from './AccordionContainer.module.scss'
import bg1 from '../../assets/bgAccordVer/Rectangle 29.png'
import bg2 from '../../assets/bgAccordVer/Rectangle 30.png'
import bg3 from '../../assets/bgAccordVer/Rectangle 31.png'
import bg4 from '../../assets/bgAccordVer/Rectangle 32.png'
import bg5 from '../../assets/bgAccordVer/Rectangle 33.png'
import bg6 from '../../assets/bgAccordVer/Rectangle 34.png'
import bg7 from '../../assets/bgAccordVer/Rectangle 28.png'
import bg8 from '../../assets/bgAccordVer/Rectangle 27.png'
import bgv1 from '../../assets/bgAccordVer/vertical/Rectangle 35 (1).png'
import bgv2 from '../../assets/bgAccordVer/vertical/Rectangle 35 (2).png'
import bgv3 from '../../assets/bgAccordVer/vertical/Rectangle 35 (3).png'
import bgv4 from '../../assets/bgAccordVer/vertical/Rectangle 35 (4).png'
import bgv5 from '../../assets/bgAccordVer/vertical/Rectangle 35 (5).png'
import bgv6 from '../../assets/bgAccordVer/vertical/Rectangle 35 (6).png'
import bgv7 from '../../assets/bgAccordVer/vertical/Rectangle 35.png'
import bgv8 from '../../assets/bgAccordVer/vertical/1.png'

import img from '../../assets/accord.png'

import { useState } from 'react'

const AccordionContainer = () => {
  const [accordIndex, setAccordIndex] = useState('01')
  const accordContent = [
    {
      title: 'Hawaiian party',
      images: img,
      data: '13.02.2023',
      bg: bg8,
      bgv: bgv8,
    },
    {
      title: 'Мafia party',
      images: img,
      data: '13.02.2023',
      bg: bg7,
      bgv: bgv1,
    },
    { title: 'Party', images: img, data: '13.02.2023', bg: bg1, bgv: bgv2 },
    {
      title: 'Party on the beach',
      images: img,
      data: '13.02.2023',
      bg: bg2,
      bgv: bgv3,
    },
    {
      title: 'Home Security',
      images: img,
      data: '13.02.2023',
      bg: bg3,
      bgv: bgv4,
    },
    {
      title: 'Network Design & Implementation',
      images: img,
      data: '13.02.2023',
      bg: bg4,
      bgv: bgv5,
    },
    {
      title: 'System Design & Engineering',
      images: img,
      data: '13.02.2023',
      bg: bg5,
      bgv: bgv6,
    },
    {
      title: 'Client Care Plans',
      images: img,
      data: '13.02.2023',
      bg: bg6,
      bgv: bgv7,
    },
  ]
  return (
    <>
      <h2 className={styles.title}>All events</h2>
      <div className={styles.container}>
        {accordContent.map((value, index, array) => (
          <Accordion
            key={index}
            title={value.title}
            images={value.images}
            data={value.data}
            number={`0${index + 1}`}
            onClick={() => setAccordIndex(`0${index + 1}`)}
            accordIndex={accordIndex}
            bg={value.bg}
            bgv={value.bgv}
          />
        ))}
      </div>
    </>
  )
}

export default AccordionContainer
