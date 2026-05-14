import React from 'react'

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#3f6b34] via-[#4a7c3a] to-[#2d4f24] pt-[140px] pb-[100px]"
    >
      {/* Subtle desert-textured overlay using SVG noise */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\")",
        }}
      />
      {/* Sun-bleached horizon band */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#c9a87c]/40 to-transparent"
      />

      <div className="relative z-10 mx-auto w-[90%] max-w-[1080px] text-center text-white">
        <p className="font-lato mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#e6d6b1]">
          Slab City, California
        </p>
        <h1 className="font-faustina mb-6 text-[42px] font-[500] leading-[110%] sm:text-[54px] lg:text-[64px]">
          Welcome to the
          <br />
          Fallout Shelter Ecovillage
        </h1>
        <p className="font-lato mx-auto mb-10 max-w-[720px] text-[20px] font-[400] leading-[150%] text-white/90 lg:text-[24px]">
          A desert intentional community modeling sustainable living, ecological covenants, and
          cooperative life. Visitors, learners, and new members welcome — by arrangement.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#visit"
            className="font-lato inline-flex h-[54px] w-[260px] items-center justify-center rounded-[27px] bg-[#f7f4ee] px-8 text-[18px] font-[500] text-[#2d3a26] shadow-sm transition hover:bg-white"
          >
            Plan a Visit
          </a>
          <a
            href="#donate"
            className="font-lato inline-flex h-[54px] w-[260px] items-center justify-center rounded-[27px] border-2 border-white/80 px-8 text-[18px] font-[500] text-white transition hover:bg-white/10"
          >
            Support FoSE
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
