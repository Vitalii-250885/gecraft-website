import { useCallback, useEffect, useState } from 'react'

import services from '../../data/services.json'
import ModalWindow from './ModalWindow'
import ServiceModal from './ServiceModal'

function Services() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const [selectedService, setSelectedService] = useState(null)
  const [label, setLabel] = useState('')

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', modalIsOpen)
    return () => document.body.classList.remove('overflow-hidden')
  }, [modalIsOpen])

  const handleClick = useCallback((service) => {
    setSelectedService(service)
    setLabel(service.label)
    setModalIsOpen(true)
  }, [])

  const handleCloseModal = () => {
    setModalIsOpen(false)
  }

  return (
    <div
      id="services"
      className="block justify-between px-2 pb-20 pt-48 sm:pb-14 sm:pt-14 md:flex md:px-16 lg:pb-32 lg:pt-32"
    >
      <div className="flex w-1/4 flex-col items-start">
        <div className="inline-block flex-col sm:sticky sm:top-36 1076:top-16 lg:top-36 1400:top-20">
          <h3 className="ml-4 w-36 text-left text-xs font-extrabold uppercase before:mr-1.5 before:inline-flex before:h-2.5 before:w-2.5 before:rounded-full before:bg-basic sm:ml-0">
            Our services
          </h3>
          <h4 className="ml-4 mt-10 w-72 text-left text-3xl sm:ml-0 sm:mt-8 md:w-[21.5rem] md:text-2xl 1076:text-4xl lg:mt-12 2xl:w-[30rem] 2xl:text-5xl 3xl:w-[33.6rem]">
            Skills to enhance your performance
          </h4>
        </div>
      </div>

      <div className="mt-14 hover:text-ourServicesBtn hover:duration-300 md:mt-0">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => handleClick(service)}
            className="relative z-0 table whitespace-nowrap px-4 py-4 text-center text-2xl after:absolute after:left-0 after:top-0 after:-z-10 after:box-content after:h-full after:w-full after:rounded-full after:bg-buttonHover after:opacity-0 after:duration-300 hover:text-basic hover:duration-300 hover:after:opacity-100 357:text-3xl sm:after:-translate-x-[44.375rem] sm:after:rotate-12 sm:after:scale-[3] sm:after:transform sm:after:transition sm:after:hover:translate-x-0 sm:hover:after:rotate-[0] sm:hover:after:scale-100 500:text-4xl 600:text-5xl md:px-12 md:py-7 md:text-3xl md:after:pointer-events-none 800:text-4xl 900:text-5xl lg:px-7 lg:after:-translate-x-[50rem] xl:text-5xl xl:after:-translate-x-[44.375rem] 1400:text-6xl 1500:text-6xl 1600:text-6xl 2xl:text-8xl 2xl:after:-translate-x-[78.125rem] 3xl:text-[9.375rem] 3xl:after:-translate-x-[140.625rem] 4xl:text-[11.875]"
          >
            {service.label}
          </button>
        ))}
        {modalIsOpen && selectedService && (
          <ModalWindow
            onCloseModal={handleCloseModal}
            modalIsOpen={modalIsOpen}
            label={label}
          >
            <ServiceModal {...selectedService} />
          </ModalWindow>
        )}
      </div>
    </div>
  )
}

export default Services
