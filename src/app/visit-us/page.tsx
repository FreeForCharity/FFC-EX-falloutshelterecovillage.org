import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Visit Us',
  description:
    'Plan a visit to the Fallout Shelter Ecovillage in Slab City, California. Scheduling, costs, and how to apply.',
}

export default function VisitUs() {
  return (
    <main className="bg-[#f7f4ee] pt-[140px] pb-[80px]">
      <div className="mx-auto w-[90%] max-w-[820px]">
        <p className="font-lato mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#4a7c3a]">
          Visit
        </p>
        <h1 className="font-faustina mb-6 text-[40px] font-[400] text-[#2d3a26] sm:text-[48px]">
          Scheduled visitors welcome.
        </h1>
        <div className="font-lato space-y-5 text-[18px] leading-[170%] text-[#3a4a32]">
          <p>
            The Fallout Shelter Ecovillage welcomes scheduled visitors only. Plan on a five-to-seven
            day minimum stay so we can host you well and so you can experience community life beyond
            the first day.
          </p>

          <h2 className="font-faustina mt-8 mb-2 text-[28px] text-[#3f6b34]">What to expect</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>A desert setting with strong focus on self-sufficiency and sustainability.</li>
            <li>Daily participation in community tasks and projects.</li>
            <li>Camping on-site — bring your own tent, sleeping gear, and personal supplies.</li>
            <li>Simple shared meals; tell us your dietary needs in advance.</li>
          </ul>

          <h2 className="font-faustina mt-8 mb-2 text-[28px] text-[#3f6b34]">Costs</h2>
          <p>
            We ask for voluntary contributions rather than fixed fees. Basic daily expenses average
            about $7 per person per day for food and facilities. Vehicle pickups are $0.60 per mile.
            Alternative arrangements are available for those facing financial hardship — just ask.
          </p>

          <h2 className="font-faustina mt-8 mb-2 text-[28px] text-[#3f6b34]">How to apply</h2>
          <p>Email us a letter (in the body of the message, not an attachment) that covers:</p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Who you are and your background.</li>
            <li>What draws you to FoSE.</li>
            <li>Your motivation and what you hope to learn.</li>
            <li>Dietary needs.</li>
            <li>Any physical limitations we should plan around.</li>
            <li>Skills and interests you can share.</li>
            <li>Projects you are curious about.</li>
            <li>Planned arrival and departure dates.</li>
            <li>Method of travel.</li>
            <li>Whether you need pickup service or directions.</li>
            <li>Length of stay you are hoping for.</li>
            <li>References, if you have them.</li>
            <li>Reliable contact information.</li>
          </ol>
          <p>
            Send your letter to{' '}
            <a
              className="underline"
              href="mailto:info@falloutshelterecovillage.org?subject=Visit%20application"
            >
              info@falloutshelterecovillage.org
            </a>{' '}
            with the subject &ldquo;Visit application&rdquo;.
          </p>
        </div>
      </div>
    </main>
  )
}
