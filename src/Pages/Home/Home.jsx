import React from 'react'
import Table from '../../Table'
import Header from '../Header/Header'
import Section from '../Section/Section'
import Form from '../Form/Form'
import Accordion from '../Accordion/Accordion'
import Collage from '../Collage/Collage'
import Service from '../Service/Service'
import Footer from '../Footer/Footer'
import { useTranslation } from 'react-i18next'

const Home = () => {

  const { t } = useTranslation()

  return (
    <div className='main'>

      <Header />

      <Collage />

      <Section />

      <Service />

      <Table />

      <section className='accordion max-w-7xl px-3 mx-auto'>
        <h1 className="lg:text-[33px] lg:py-[10px] md:text-[27px] md:py-8 py-5 text-[23px] font-semibold text-center">{t('Mijozlar tomonidan berilgan savollar')}</h1>
        <div className="md:py-5 mb-5">
          <div className="md:p-6 p-3">
            <main className="max-w-2xl mx-auto">
              <Accordion />
            </main>
          </div>
        </div>

      </section>

      <section id="contact" className="md:py-10 py-5 px-5 bg-[#f9f9f9]">
        <div className="max-w-7xl px-3 mx-auto">
          <div className="md:w-[80%] w-[95%] flex lg:flex-row flex-col items-center justify-center mx-auto">
            <Form />
          </div>
        </div>
      </section>

      <Footer/>

    </div>
  )
}

export default Home