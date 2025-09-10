import React from 'react'
import IcecreamCard from './IcecreamCard.jsx'
import coneImage from '../../assets/cone.png'
import cone1Image from '../../assets/cone1.png'
import cone2Image from '../../assets/cone2.png'
import cone3Image from '../../assets/cone3.png'
import cone4Image from '../../assets/cone4.png'

const dummyCone = coneImage
const option1 = cone1Image
const option2 = cone2Image
const option3 = cone3Image
const option4 = cone4Image

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start pt-8 pb-16 lg:pt-12 lg:pb-24">
          <div className="lg:col-span-6 xl:col-span-5 text-white order-2 lg:order-1 flex flex-col">
            <h1 className="font-lobster leading-none text-[64px] sm:text-[80px] lg:text-[96px] xl:text-[112px] text-white">icecream</h1>
            <h2 className="mt-1 font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-white">Strawberry cone</h2>
            <p className="mt-4 max-w-md text-white/90 font-poppins font-normal leading-relaxed text-xs sm:text-sm lg:text-base">
              Embark on a culinary journey of delight as you immerse yourself in our artisan-crafted ice cream collection—each flavor a story, each scoop an unforgettable chapter in your sweet odyssey!
            </p>
            <p className="mt-3 max-w-md text-white/90 font-poppins font-normal leading-relaxed text-xs sm:text-sm lg:text-base">
              Indulge in a world of imagination, where every scoop unveils a new taste adventure! choose your favorite
            </p>

            <div className="mt-20 flex gap-10 sm:gap-20 max-w-xs items-center">
              <IcecreamCard image={option1} selected />
              <IcecreamCard image={option2} />
              <IcecreamCard image={option3} />
              <IcecreamCard image={option4} />
            </div>
          </div>

          <div className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-end order-1 lg:order-2 lg:items-center">
            <img
              src={dummyCone}
              alt="Strawberry Icecream Cone"
              className="w-[320px] sm:w-[380px] md:w-[420px] lg:w-[480px] xl:w-[520px] object-contain drop-shadow-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}


