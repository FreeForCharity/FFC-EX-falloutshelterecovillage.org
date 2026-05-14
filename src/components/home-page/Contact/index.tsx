import React from 'react'
import { Mail, MapPin } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-[80px]">
      <div className="mx-auto w-[90%] max-w-[1080px]">
        <div className="mb-10 text-center">
          <p className="font-lato mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#4a7c3a]">
            Get in Touch
          </p>
          <h2 className="font-faustina text-[34px] font-[400] leading-[120%] text-[#2d3a26] sm:text-[42px] lg:text-[48px]">
            Contact us
          </h2>
          <p className="font-lato mx-auto mt-5 max-w-[700px] text-[18px] leading-[170%] text-[#3a4a32]">
            We respond to thoughtful, specific messages. Please tell us a bit about yourself and
            what you are hoping to learn or arrange.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <a
            href="mailto:info@falloutshelterecovillage.org"
            className="group flex items-start gap-4 rounded-2xl border border-[#dcd2c0] bg-[#f7f4ee] p-7 transition hover:border-[#4a7c3a]"
          >
            <Mail className="mt-1 h-10 w-10 flex-shrink-0 text-[#4a7c3a]" aria-hidden="true" />
            <div>
              <p className="font-faustina text-[22px] font-[500] text-[#2d3a26]">Email</p>
              <span className="font-lato break-all text-[16px] text-[#3f6b34] underline-offset-2 group-hover:underline">
                info@falloutshelterecovillage.org
              </span>
              <p className="font-lato mt-2 text-[14px] text-[#3a4a32]">
                Best for visit applications, donation inquiries, and media requests.
              </p>
            </div>
          </a>

          <div className="flex items-start gap-4 rounded-2xl border border-[#dcd2c0] bg-[#f7f4ee] p-7">
            <MapPin className="mt-1 h-10 w-10 flex-shrink-0 text-[#b85c38]" aria-hidden="true" />
            <div>
              <p className="font-faustina text-[22px] font-[500] text-[#2d3a26]">Find us</p>
              <p className="font-lato text-[16px] leading-[170%] text-[#3a4a32]">
                Slab City, California
                <br />
                Mailing: PO Box 382, Niland, CA 92257
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Slab+City+CA+92257"
                target="_blank"
                rel="noopener noreferrer"
                className="font-lato mt-2 inline-block text-[15px] text-[#3f6b34] underline"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
