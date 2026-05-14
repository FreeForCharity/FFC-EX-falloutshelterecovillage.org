import React from 'react'
import { upcoming, recurring } from '@/data/events'

const Events = () => {
  return (
    <section id="events" className="bg-[#f7f4ee] py-[80px]">
      <div className="mx-auto w-[90%] max-w-[1080px]">
        <div className="mb-12 text-center">
          <p className="font-lato mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#4a7c3a]">
            Community Life
          </p>
          <h2 className="font-faustina text-[34px] font-[400] leading-[120%] text-[#2d3a26] sm:text-[42px] lg:text-[48px]">
            Events &amp; Gatherings
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-faustina mb-4 text-[22px] font-[500] text-[#3f6b34]">
              Upcoming events
            </h3>
            {upcoming.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-[#cbb999] bg-white/60 p-6 text-center">
                <p className="font-lato text-[16px] leading-[170%] text-[#3a4a32]">
                  No scheduled events at the moment. Check back soon, or reach out about visiting
                  during our regular community life.
                </p>
              </div>
            ) : (
              <ul className="space-y-4">
                {upcoming.map((e) => (
                  <li
                    key={`${e.title}-${e.date}`}
                    className="rounded-2xl border border-[#dcd2c0] bg-white p-5"
                  >
                    <p className="font-lato text-sm font-semibold uppercase tracking-wider text-[#b85c38]">
                      {e.date}
                    </p>
                    <h4 className="font-faustina mt-1 text-[20px] font-[500] text-[#2d3a26]">
                      {e.title}
                    </h4>
                    <p className="font-lato mt-1 text-[14px] text-[#3a4a32]">{e.location}</p>
                    <p className="font-lato mt-2 text-[15px] leading-[160%] text-[#3a4a32]">
                      {e.description}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <h3 className="font-faustina mb-4 text-[22px] font-[500] text-[#3f6b34]">
              Recurring gatherings
            </h3>
            <ul className="space-y-4">
              {recurring.map((e) => (
                <li key={e.title} className="rounded-2xl border border-[#dcd2c0] bg-white p-5">
                  <h4 className="font-faustina text-[20px] font-[500] text-[#2d3a26]">{e.title}</h4>
                  <p className="font-lato mt-1 text-[14px] text-[#3a4a32]">
                    {e.cadence} &middot; {e.location}
                  </p>
                  <p className="font-lato mt-2 text-[15px] leading-[160%] text-[#3a4a32]">
                    {e.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events
