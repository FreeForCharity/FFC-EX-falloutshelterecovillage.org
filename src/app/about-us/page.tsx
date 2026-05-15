import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'About the Fallout Shelter Ecovillage — our mission, ecological covenants, and community life in Slab City, California.',
}

export default function AboutUs() {
  return (
    <main className="bg-[#f7f4ee] pt-[140px] pb-[80px]">
      <div className="mx-auto max-w-3xl px-6">
        <p className="font-lato mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#4a7c3a]">
          About
        </p>
        <h1 className="font-faustina mb-6 text-[40px] font-[400] text-[#2d3a26] sm:text-[48px]">
          A community building a healthy alternative.
        </h1>
        <div className="font-lato space-y-5 text-[18px] leading-[170%] text-[#3a4a32]">
          <p>
            The Fallout Shelter Ecovillage (FoSE) is an intentional community in Slab City,
            California. We understand how many people find it difficult to live sustainably and
            responsibly within modern US culture — and we exist to build, demonstrate, and share a
            healthier alternative.
          </p>
          <h2 className="font-faustina mt-8 mb-2 text-[28px] text-[#3f6b34]">
            Our ecological covenants
          </h2>
          <p>
            Members follow shared ecological covenants and sustainability guidelines. These keep our
            daily practices aligned with the land we live on, the resources we have, and the
            commitments we have made to each other.
          </p>
          <h2 className="font-faustina mt-8 mb-2 text-[28px] text-[#3f6b34]">
            Diversity and inclusion
          </h2>
          <p>
            We welcome individuals, families, and income-sharing communities, and we encourage
            co-housing and cooperatives. Economic diversity and simple living are part of what make
            our community resilient.
          </p>
          <h2 className="font-faustina mt-8 mb-2 text-[28px] text-[#3f6b34]">
            A model for social change
          </h2>
          <p>
            Rather than isolating ourselves, we work as a public-facing model for sustainable
            living. We actively share what we are learning with visitors, researchers, and anyone
            curious about a different way of inhabiting the desert.
          </p>
          <p>
            To learn more, see{' '}
            <a className="underline" href="/visit-us">
              Visit Us
            </a>{' '}
            or{' '}
            <a className="underline" href="/join-us">
              Join Us
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  )
}
