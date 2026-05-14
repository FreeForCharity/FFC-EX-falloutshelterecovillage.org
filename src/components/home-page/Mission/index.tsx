import React from 'react'

const Mission = () => {
  return (
    <section id="mission" className="bg-[#f7f4ee] py-[80px]">
      <div className="mx-auto w-[90%] max-w-[1080px]">
        <div className="mb-12 text-center">
          <p className="font-lato mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#4a7c3a]">
            Our Mission
          </p>
          <h2 className="font-faustina mx-auto max-w-[820px] text-[34px] font-[400] leading-[120%] text-[#2d3a26] sm:text-[42px] lg:text-[48px]">
            A model for sustainable, cooperative desert life.
          </h2>
        </div>

        <div className="font-lato mx-auto max-w-[820px] space-y-6 text-[19px] leading-[170%] text-[#3a4a32] lg:text-[20px]">
          <p>
            We understand how many people find it difficult to live sustainably and responsibly
            within modern US culture. The Fallout Shelter Ecovillage exists to build a healthy
            alternative — and to share what we learn.
          </p>
          <p>
            Members follow ecological covenants and sustainability guidelines as we pursue
            environmentally sound practices. We welcome individuals, families, and income-sharing
            communities, and encourage co-housing and cooperatives that promote economic diversity
            and simple living.
          </p>
          <p>
            Rather than isolating ourselves, we work as a model for social change — actively sharing
            discoveries and ideas of sustainable living with people across many different
            lifestyles.
          </p>
        </div>

        <ul className="mt-16 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: 'Ecological Covenants',
              body: 'Shared guidelines that keep the land and our practices in balance.',
            },
            {
              title: 'Cooperative Living',
              body: 'Co-housing, work exchange, and income sharing as paths to simpler living.',
            },
            {
              title: 'Open Knowledge',
              body: 'We share what works — and what does not — with visitors and the wider world.',
            },
          ].map((card) => (
            <li
              key={card.title}
              className="rounded-2xl border border-[#cbb999] bg-white/70 px-6 py-7 shadow-sm backdrop-blur-sm"
            >
              <h3 className="font-faustina mb-3 text-[22px] font-[500] text-[#3f6b34]">
                {card.title}
              </h3>
              <p className="font-lato text-[16px] leading-[160%] text-[#3a4a32]">{card.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Mission
