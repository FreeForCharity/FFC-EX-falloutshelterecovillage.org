import React from 'react'

const DonateCTA = () => {
  return (
    <section
      id="donate"
      className="bg-gradient-to-br from-[#b85c38] via-[#a85230] to-[#8a3f23] py-[80px] text-white"
    >
      <div className="mx-auto w-[90%] max-w-[1080px]">
        <div className="mb-10 text-center">
          <p className="font-lato mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#f4d9b8]">
            Support FoSE
          </p>
          <h2 className="font-faustina text-[34px] font-[400] leading-[120%] sm:text-[42px] lg:text-[48px]">
            Help us share sustainable living skills.
          </h2>
          <p className="font-lato mx-auto mt-5 max-w-[700px] text-[18px] leading-[170%] text-white/90">
            FoSE accepts donated supplies, mailed contributions, and direct financial support. Reach
            out via the contact form for monetary donation instructions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white/10 p-7 backdrop-blur-sm ring-1 ring-white/15">
            <h3 className="font-faustina mb-2 text-[22px] font-[500] text-[#f4d9b8]">
              Ship via UPS or FedEx
            </h3>
            <address className="font-lato not-italic text-[16px] leading-[170%] text-white/95">
              Fallout Shelter Ecovillage
              <br />
              1420 Coachella Canal Rd
              <br />
              Slab City, CA 92257
            </address>
          </div>

          <div className="rounded-2xl bg-white/10 p-7 backdrop-blur-sm ring-1 ring-white/15">
            <h3 className="font-faustina mb-2 text-[22px] font-[500] text-[#f4d9b8]">
              Mail via USPS
            </h3>
            <address className="font-lato not-italic text-[16px] leading-[170%] text-white/95">
              Fallout Shelter Ecovillage
              <br />
              PO Box 382
              <br />
              Niland, CA 92257
            </address>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="font-lato inline-flex h-[54px] w-[280px] items-center justify-center rounded-[27px] bg-white px-8 text-[17px] font-[500] text-[#8a3f23] shadow-sm transition hover:bg-[#f7f4ee]"
          >
            Ask about financial gifts
          </a>
          <a
            href="mailto:info@falloutshelterecovillage.org?subject=Amazon%20Wishlist"
            className="font-lato inline-flex h-[54px] w-[280px] items-center justify-center rounded-[27px] border-2 border-white/85 px-8 text-[17px] font-[500] text-white transition hover:bg-white/10"
          >
            Request the wishlist
          </a>
        </div>
      </div>
    </section>
  )
}

export default DonateCTA
