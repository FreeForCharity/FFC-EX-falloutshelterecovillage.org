'use client'

import React from 'react'
import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = React.useMemo(() => new Date().getFullYear(), [])

  return (
    <footer className="bg-[#2d3a26] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-2 md:px-6 lg:grid-cols-3 lg:px-8">
        {/* Column 1: About */}
        <div className="space-y-4 px-4 sm:px-0">
          <h3 className="font-faustina text-[26px] text-[#e6d6b1]">Endorsements</h3>
          <p className="font-lato text-[16px] leading-[170%] text-white/90">
            The Fallout Shelter Ecovillage is an intentional community in Slab City, California,
            modeling sustainable, cooperative desert life. Visitors and new members welcome by
            arrangement.
          </p>
          <p className="font-lato text-[14px] leading-[170%] text-white/70">
            A project hosted by{' '}
            <Link
              href="https://freeforcharity.org"
              className="underline decoration-[#c9a87c] underline-offset-2 hover:text-[#c9a87c]"
            >
              Free For Charity
            </Link>
            .
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4 px-4 sm:px-0">
          <h3 className="font-faustina text-[26px] text-[#e6d6b1]">Quick Links</h3>
          <ul className="font-lato space-y-2 text-[16px]">
            {[
              { name: 'Home', href: '/#hero' },
              { name: 'Mission', href: '/#mission' },
              { name: 'Programs', href: '/#programs' },
              { name: 'Visit', href: '/#visit' },
              { name: 'Events', href: '/#events' },
              { name: 'Donate', href: '/#donate' },
              { name: 'Contact', href: '/#contact' },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="font-[500] text-white/85 transition-colors hover:text-[#c9a87c]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="space-y-2 pt-4">
            <h4 className="font-faustina text-[22px] text-[#e6d6b1]">Policies</h4>
            <ul className="font-lato space-y-1 text-[15px]">
              {[
                { name: 'Privacy Policy', href: '/privacy-policy' },
                { name: 'Terms of Service', href: '/terms-of-service' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 transition-colors hover:text-[#c9a87c]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 3: Contact */}
        <div className="space-y-5 px-4 sm:px-0">
          <h3 className="font-faustina text-[26px] text-[#e6d6b1]">Contact Us</h3>

          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-8 w-8 flex-shrink-0 text-[#c9a87c]" aria-hidden="true" />
            <div>
              <p className="font-faustina text-[18px] font-[500] text-white">Email</p>
              <a
                href="mailto:info@falloutshelterecovillage.org"
                className="font-lato break-all text-[15px] text-white/85 transition-colors hover:text-[#c9a87c]"
              >
                info@falloutshelterecovillage.org
              </a>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Slab+City+CA+92257"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open mailing address in Google Maps"
            className="flex items-start gap-3 transition-opacity hover:opacity-90"
          >
            <MapPin className="mt-0.5 h-8 w-8 flex-shrink-0 text-[#c9a87c]" aria-hidden="true" />
            <div>
              <p className="font-faustina text-[18px] font-[500] text-white">Mailing Address</p>
              <p className="font-lato text-[15px] leading-[160%] text-white/85">
                PO Box 382
                <br />
                Niland, CA 92257
              </p>
            </div>
          </a>

          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-8 w-8 flex-shrink-0 text-[#c9a87c]" aria-hidden="true" />
            <div>
              <p className="font-faustina text-[18px] font-[500] text-white">Ship UPS / FedEx</p>
              <p className="font-lato text-[15px] leading-[160%] text-white/85">
                1420 Coachella Canal Rd
                <br />
                Slab City, CA 92257
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 px-4 text-center">
        <p className="font-lato text-[15px] text-white/75">
          © {currentYear} Fallout Shelter Ecovillage. A project hosted by{' '}
          <Link
            href="https://freeforcharity.org"
            className="underline decoration-[#c9a87c] underline-offset-2 hover:text-[#c9a87c]"
          >
            Free For Charity
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}

export default Footer
