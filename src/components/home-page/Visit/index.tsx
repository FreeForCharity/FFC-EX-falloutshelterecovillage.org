import React from 'react'

const Visit = () => {
  return (
    <section id="visit" className="bg-[#2d3a26] py-[80px] text-white">
      <div className="mx-auto w-[90%] max-w-[1080px] grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="font-lato mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a87c]">
            Plan a Visit
          </p>
          <h2 className="font-faustina mb-6 text-[34px] font-[400] leading-[120%] sm:text-[42px] lg:text-[48px]">
            Scheduled visitors welcome — no drop-ins.
          </h2>
          <p className="font-lato mb-4 text-[18px] leading-[170%] text-white/90">
            FoSE welcomes scheduled visitors only. Plan on a five-to-seven day minimum stay so we
            can host you well and so you can experience the rhythm of community life. Visitors
            participate in daily tasks and camp on-site (bring your own gear).
          </p>
          <p className="font-lato text-[18px] leading-[170%] text-white/90">
            We ask for voluntary contributions rather than fixed fees — typically about $7 per
            person per day for food and facilities, and $0.60 per mile for vehicle pickups.
            Alternative arrangements are available for those facing financial hardship.
          </p>
        </div>

        <div className="rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur-sm">
          <h3 className="font-faustina mb-4 text-[24px] font-[500] text-[#e6d6b1]">
            Apply to visit
          </h3>
          <p className="font-lato mb-4 text-[16px] leading-[170%] text-white/85">
            Email us a letter (in the body of the message, not an attachment) covering the
            following:
          </p>
          <ul className="font-lato mb-6 list-disc space-y-2 pl-5 text-[15px] leading-[160%] text-white/80">
            <li>Who you are and your background</li>
            <li>What draws you to FoSE</li>
            <li>Dietary needs and any physical limitations</li>
            <li>Skills, interests, and what you hope to contribute</li>
            <li>Planned arrival dates and method of travel</li>
            <li>Whether you need pickup service or directions</li>
            <li>Reliable contact information</li>
          </ul>
          <a
            href="mailto:info@falloutshelterecovillage.org?subject=Visit%20application"
            className="font-lato inline-flex h-[52px] items-center justify-center rounded-[27px] bg-[#c9a87c] px-8 text-[16px] font-[500] text-[#2d3a26] transition hover:bg-[#d8b88c]"
          >
            Email your application
          </a>
        </div>
      </div>
    </section>
  )
}

export default Visit
