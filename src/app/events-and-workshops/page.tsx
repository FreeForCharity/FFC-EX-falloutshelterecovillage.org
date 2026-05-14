import type { Metadata } from 'next'
import { upcoming, recurring } from '@/data/events'

export const metadata: Metadata = {
  title: 'Events and Workshops',
  description:
    'Events, workshops, and recurring community gatherings at the Fallout Shelter Ecovillage.',
}

export default function EventsAndWorkshops() {
  return (
    <main className="bg-[#f7f4ee] pt-[140px] pb-[80px]">
      <div className="mx-auto w-[90%] max-w-[820px]">
        <p className="font-lato mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#4a7c3a]">
          Community Life
        </p>
        <h1 className="font-faustina mb-6 text-[40px] font-[400] text-[#2d3a26] sm:text-[48px]">
          Events and Workshops
        </h1>
        <div className="font-lato space-y-5 text-[18px] leading-[170%] text-[#3a4a32]">
          <p>
            Members of the Fallout Shelter Ecovillage are passionate about sharing the skills we
            gain while crafting our homes and our lives here. Events and workshops happen as
            interest and timing allow — reach out if you would like to be notified when something is
            on the calendar.
          </p>

          <h2 className="font-faustina mt-8 mb-2 text-[28px] text-[#3f6b34]">Upcoming</h2>
          {upcoming.length === 0 ? (
            <p>
              No scheduled events at the moment. Check back soon, or{' '}
              <a className="underline" href="/contact-us">
                get in touch
              </a>{' '}
              to ask about visiting during regular community life.
            </p>
          ) : (
            <ul className="space-y-4">
              {upcoming.map((e) => (
                <li
                  key={`${e.title}-${e.date}`}
                  className="rounded-2xl border border-[#dcd2c0] bg-white p-5"
                >
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#b85c38]">
                    {e.date}
                  </p>
                  <h3 className="font-faustina mt-1 text-[22px] font-[500] text-[#2d3a26]">
                    {e.title}
                  </h3>
                  <p className="mt-1 text-[14px] text-[#3a4a32]">{e.location}</p>
                  <p className="mt-2 text-[15px] leading-[160%]">{e.description}</p>
                </li>
              ))}
            </ul>
          )}

          <h2 className="font-faustina mt-10 mb-2 text-[28px] text-[#3f6b34]">
            Recurring gatherings
          </h2>
          <ul className="space-y-4">
            {recurring.map((e) => (
              <li key={e.title} className="rounded-2xl border border-[#dcd2c0] bg-white p-5">
                <h3 className="font-faustina text-[22px] font-[500] text-[#2d3a26]">{e.title}</h3>
                <p className="mt-1 text-[14px] text-[#3a4a32]">
                  {e.cadence} &middot; {e.location}
                </p>
                <p className="mt-2 text-[15px] leading-[160%]">{e.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
