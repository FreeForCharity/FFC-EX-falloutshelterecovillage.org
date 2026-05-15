import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Donate to FoSE',
  description:
    'Support the Fallout Shelter Ecovillage with mailed supplies, wishlist items, or a financial gift.',
}

export default function Donate() {
  return (
    <main className="bg-[#f7f4ee] pt-[140px] pb-[80px]">
      <div className="mx-auto max-w-3xl px-6">
        <p className="font-lato mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#b85c38]">
          Support FoSE
        </p>
        <h1 className="font-faustina mb-6 text-[40px] font-[400] text-[#2d3a26] sm:text-[48px]">
          Help us share sustainable living skills.
        </h1>
        <div className="font-lato space-y-5 text-[18px] leading-[170%] text-[#3a4a32]">
          <p>
            The Fallout Shelter Ecovillage accepts donated supplies, mailed contributions, and
            direct financial support. Every gift helps us share the practices and skills we have
            developed for sustainable desert life.
          </p>

          <h2 className="font-faustina mt-8 mb-2 text-[28px] text-[#3f6b34]">
            Ship supplies (UPS or FedEx)
          </h2>
          <address className="not-italic">
            Fallout Shelter Ecovillage
            <br />
            1420 Coachella Canal Rd
            <br />
            Slab City, CA 92257
          </address>

          <h2 className="font-faustina mt-8 mb-2 text-[28px] text-[#3f6b34]">
            Mail letters or supplies (USPS)
          </h2>
          <address className="not-italic">
            Fallout Shelter Ecovillage
            <br />
            PO Box 382
            <br />
            Niland, CA 92257
          </address>

          <h2 className="font-faustina mt-8 mb-2 text-[28px] text-[#3f6b34]">Amazon wishlist</h2>
          <p>
            We maintain a wishlist of items that help us most. Email{' '}
            <a
              className="underline"
              href="mailto:info@falloutshelterecovillage.org?subject=Amazon%20Wishlist"
            >
              info@falloutshelterecovillage.org
            </a>{' '}
            and we will share the current link.
          </p>

          <h2 className="font-faustina mt-8 mb-2 text-[28px] text-[#3f6b34]">Financial gifts</h2>
          <p>
            For monetary donations, email{' '}
            <a
              className="underline"
              href="mailto:info@falloutshelterecovillage.org?subject=Financial%20donation"
            >
              info@falloutshelterecovillage.org
            </a>{' '}
            and we will follow up with current giving options.
          </p>
        </div>
      </div>
    </main>
  )
}
