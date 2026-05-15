import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Media Policy',
  description:
    'Guidelines for photographing, recording, and documenting the Fallout Shelter Ecovillage and its members.',
}

export default function MediaPolicy() {
  return (
    <main className="bg-[#f7f4ee] pt-[140px] pb-[80px]">
      <div className="mx-auto max-w-3xl px-6">
        <p className="font-lato mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#4a7c3a]">
          Media Policy
        </p>
        <h1 className="font-faustina mb-6 text-[40px] font-[400] text-[#2d3a26] sm:text-[48px]">
          Document with care.
        </h1>
        <div className="font-lato space-y-5 text-[18px] leading-[170%] text-[#3a4a32]">
          <p>
            The Fallout Shelter Ecovillage welcomes documentation of our sustainability work, while
            balancing our residents&rsquo; privacy needs. We describe this as a
            &ldquo;public-private privacy gradient&rdquo;: members are real people with real lives,
            and they hold varied expectations about being photographed or recorded.
          </p>

          <h2 className="font-faustina mt-8 mb-2 text-[28px] text-[#3f6b34]">
            If you plan to document
          </h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              Arrange hosting through the official{' '}
              <a className="underline" href="/visit-us">
                Visitor
              </a>{' '}
              process before you arrive.
            </li>
            <li>Tell your host about your documentation plans and intended use of materials.</li>
            <li>
              Ask permission first before photographing, interviewing, or recording any individual.
            </li>
            <li>
              Get explicit consent before photographing private spaces beyond public pathways.
            </li>
            <li>
              The hot springs are off-limits for photography unless you have arranged it with a
              specific person beforehand.
            </li>
          </ol>

          <h2 className="font-faustina mt-8 mb-2 text-[28px] text-[#3f6b34]">In practice</h2>
          <p>
            When in doubt, ask. Your host can introduce you to people who are happy to be
            interviewed and let you know where to be discreet. Open, mutual-respect communication
            keeps the community welcoming for everyone.
          </p>
        </div>
      </div>
    </main>
  )
}
