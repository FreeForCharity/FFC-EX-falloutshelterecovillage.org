import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact the Fallout Shelter Ecovillage by email or postal mail.',
}

export default function ContactUs() {
  return (
    <main className="bg-[#f7f4ee] pt-[140px] pb-[80px]">
      <div className="mx-auto w-[90%] max-w-[820px]">
        <p className="font-lato mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#4a7c3a]">
          Contact
        </p>
        <h1 className="font-faustina mb-6 text-[40px] font-[400] text-[#2d3a26] sm:text-[48px]">
          Get in touch.
        </h1>
        <div className="font-lato space-y-5 text-[18px] leading-[170%] text-[#3a4a32]">
          <p>
            The best way to reach us is by email. We respond to thoughtful, specific messages —
            please tell us a bit about yourself and what you are hoping to learn or arrange.
          </p>

          <h2 className="font-faustina mt-8 mb-2 text-[28px] text-[#3f6b34]">Email</h2>
          <p>
            <a className="underline" href="mailto:info@falloutshelterecovillage.org">
              info@falloutshelterecovillage.org
            </a>
          </p>
          <p>
            For visit applications, see the{' '}
            <a className="underline" href="/visit-us">
              Visit Us
            </a>{' '}
            page for what to include in your email.
          </p>

          <h2 className="font-faustina mt-8 mb-2 text-[28px] text-[#3f6b34]">Postal mail</h2>
          <p>
            Fallout Shelter Ecovillage
            <br />
            PO Box 382
            <br />
            Niland, CA 92257
          </p>

          <h2 className="font-faustina mt-8 mb-2 text-[28px] text-[#3f6b34]">
            UPS / FedEx deliveries
          </h2>
          <p>
            Fallout Shelter Ecovillage
            <br />
            1420 Coachella Canal Rd
            <br />
            Slab City, CA 92257
          </p>
        </div>
      </div>
    </main>
  )
}
