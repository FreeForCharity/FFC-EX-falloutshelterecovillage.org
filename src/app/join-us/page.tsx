import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join Us',
  description:
    'Visit, intern, or apply to join the Fallout Shelter Ecovillage. Three paths to engaging with our community.',
}

export default function JoinUs() {
  return (
    <main className="bg-[#f7f4ee] pt-[140px] pb-[80px]">
      <div className="mx-auto max-w-3xl px-6">
        <p className="font-lato mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#4a7c3a]">
          Join Us
        </p>
        <h1 className="font-faustina mb-6 text-[40px] font-[400] text-[#2d3a26] sm:text-[48px]">
          Three paths into community life.
        </h1>
        <div className="font-lato space-y-5 text-[18px] leading-[170%] text-[#3a4a32]">
          <p>
            We offer several ways to engage with the Fallout Shelter Ecovillage: a guided tour, an
            in-depth Visitor Program experience, and a multi-month internship. All require advance
            scheduling — we are not able to accommodate drop-ins.
          </p>

          <h2 className="font-faustina mt-8 mb-2 text-[28px] text-[#3f6b34]">Guided tour</h2>
          <p>
            A short visit for media, researchers, and people exploring whether the Visitor Program
            is for them. Arranged in advance with a specific host.
          </p>

          <h2 className="font-faustina mt-8 mb-2 text-[28px] text-[#3f6b34]">Visitor Program</h2>
          <p>
            A five-to-seven day minimum stay participating in daily tasks, cooking, and projects.
            Visitors camp on-site (bring your own gear). This is the best way to experience the
            rhythm of community life.
          </p>

          <h2 className="font-faustina mt-8 mb-2 text-[28px] text-[#3f6b34]">
            Multi-month internship
          </h2>
          <p>
            For people serious about ecovillage life. Internships combine longer-term residence with
            deeper participation in our ecological and cooperative work.
          </p>

          <h2 className="font-faustina mt-8 mb-2 text-[28px] text-[#3f6b34]">Before you arrive</h2>
          <p>
            See{' '}
            <a className="underline" href="/visit-us">
              Visit Us
            </a>{' '}
            for the full application process and what to expect, and our{' '}
            <a className="underline" href="/media-policy">
              Media Policy
            </a>{' '}
            if you plan to document your time here.
          </p>
        </div>
      </div>
    </main>
  )
}
