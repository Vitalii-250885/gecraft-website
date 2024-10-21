import FormContactUs from './FormContactUs'

function ContactUs() {
  return (
    <div className="px-[5.14vw] pb-[57.95vw] pt-[22.57vw] text-left md:flex md:gap-x-[13.02vw] md:px-[5.92vw] md:py-[5.3vw] lg:gap-x-[15.95vw] lg:px-[3.13vw] lg:pb-[5.21vw] lg:pt-[3.86vw] 2xl:gap-x-[15.61vw]">
      <div>
        <h3 className="ml-[2.84vw] whitespace-nowrap text-left text-[3.08vw] font-extrabold uppercase before:mr-[1.3vw] before:inline-flex before:h-[2.31vw] before:w-[2.31vw] before:rounded-full before:bg-basic md:ml-0 md:text-[1.06vw] md:before:mr-[0.45vw] md:before:h-[0.8vw] md:before:w-[0.8vw] lg:text-[0.63vw] lg:before:mr-[0.27vw] lg:before:h-[0.47vw] lg:before:w-[0.47vw] 2xl:text-[0.35vw] 2xl:before:mr-[0.15vw] 2xl:before:h-[0.263vw] 2xl:before:w-[0.263vw]">
          Contact us
        </h3>
        <p className="mt-[7.7vw] text-[5.15vw] font-bold uppercase md:mt-[2.65vw] md:text-[1.77vw] lg:mt-[1.57vw] lg:text-[1.05vw] 2xl:mt-[1.46vw] 2xl:text-[0.59vw]">
          Phone
        </p>
        <p className="mt-[1.3vw] text-[6.7vw] font-bold md:mt-[0.45vw] md:text-[2.3vw] lg:mt-[0.27vw] lg:text-[1.36vw] 2xl:mt-[0.15vw] 2xl:text-[1.4vw]">
          +995 558 599 550
        </p>
        <p className="mt-[1.3vw] text-[6.7vw] font-bold md:mt-[0.45vw] md:text-[2.3vw] lg:mt-[0.27vw] lg:text-[1.36vw] 2xl:mt-[0.15vw] 2xl:text-[1.4vw]">
          +1 647 594 0256
        </p>
        <p className="mt-[5.15vw] text-[5.15vw] font-bold uppercase md:mt-[1.77vw] md:text-[1.77vw] lg:mt-[1.05vw] lg:text-[1.05vw] 2xl:mt-[0.59vw] 2xl:text-[0.59vw]">
          Email
        </p>
        <p className="mt-[1.3vw] text-[6.7vw] font-bold md:mt-[0.45vw] md:text-[2.3vw] lg:mt-[0.27vw] lg:text-[1.36vw] 2xl:mt-[0.15vw] 2xl:text-[1.4vw]">
          info@gecraft.com
        </p>
        <img
          src="img/logo_green.svg"
          alt="logo"
          className="mt-[5.15vw] w-[33.35vw] md:mt-[3.53vw] md:w-[11.48vw] lg:mt-[2.09vw] lg:w-[6.77vw] 2xl:mt-[1.17vw] 2xl:w-[5.17vw]"
        />
      </div>
      <FormContactUs />
    </div>
  )
}

export default ContactUs
