import React from 'react'

interface Program {
  title: string
  blurb: string
  detail: string
}

const programs: Program[] = [
  {
    title: 'Guided Tours',
    blurb: 'A first look at FoSE.',
    detail:
      'A short, pre-arranged tour of the ecovillage. Best for media, researchers, and people exploring whether the visitor program is for them.',
  },
  {
    title: 'Visitor Program',
    blurb: 'Five to seven days, hands-on.',
    detail:
      'An in-depth stay (5–7 day minimum) participating in daily tasks, cooking, and projects. Visitors camp on-site and bring their own equipment.',
  },
  {
    title: 'Multi-Month Internships',
    blurb: 'Live, build, and learn.',
    detail:
      'For people serious about ecovillage life. Internships combine longer-term residence with deeper participation in our ecological and cooperative work.',
  },
]

const Programs = () => {
  return (
    <section id="programs" className="bg-white py-[80px]">
      <div className="mx-auto w-[90%] max-w-[1080px]">
        <div className="mb-12 text-center">
          <p className="font-lato mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#b85c38]">
            Ways to Engage
          </p>
          <h2 className="font-faustina text-[34px] font-[400] leading-[120%] text-[#2d3a26] sm:text-[42px] lg:text-[48px]">
            Programs
          </h2>
        </div>

        <ol className="grid gap-6 md:grid-cols-3">
          {programs.map((p, idx) => (
            <li
              key={p.title}
              className="relative flex flex-col rounded-2xl border border-[#dcd2c0] bg-[#f7f4ee] p-7"
            >
              <span
                aria-hidden="true"
                className="font-faustina mb-4 text-[40px] font-[300] leading-none text-[#b85c38]"
              >
                {String(idx + 1).padStart(2, '0')}
              </span>
              <h3 className="font-faustina mb-2 text-[24px] font-[500] text-[#3f6b34]">
                {p.title}
              </h3>
              <p className="font-lato mb-3 text-[16px] font-[600] text-[#2d3a26]">{p.blurb}</p>
              <p className="font-lato text-[15px] leading-[160%] text-[#3a4a32]">{p.detail}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 text-center">
          <a
            href="#visit"
            className="font-lato inline-flex h-[52px] items-center justify-center rounded-[27px] bg-[#4a7c3a] px-8 text-[17px] font-[500] text-white shadow-sm transition hover:bg-[#3f6b34]"
          >
            How to plan your visit
          </a>
        </div>
      </div>
    </section>
  )
}

export default Programs
