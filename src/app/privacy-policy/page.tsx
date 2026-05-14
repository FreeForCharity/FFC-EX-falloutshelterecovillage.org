import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for the Fallout Shelter Ecovillage website.',
}

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#f7f4ee] pt-[140px] pb-[80px]">
      <div className="mx-auto w-[90%] max-w-[820px]">
        <h1 className="font-faustina mb-6 text-[40px] font-[400] text-[#2d3a26]">Privacy Policy</h1>
        <p className="font-lato mb-4 text-[15px] text-[#3a4a32]">
          <em>Effective Date: 2026-01-01</em>
        </p>
        <div className="font-lato space-y-4 text-[16px] leading-[170%] text-[#3a4a32]">
          <p>
            The Fallout Shelter Ecovillage (&ldquo;FoSE&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;)
            operates this website as a public-facing introduction to our intentional community in
            Slab City, California. We do not collect personal information through this site beyond
            the contents of any email you choose to send us.
          </p>
          <h2 className="font-faustina mt-8 mb-2 text-[24px] text-[#3f6b34]">
            Information we collect
          </h2>
          <p>
            This site does not host forms or accounts. When you contact us by email, we receive the
            information you provide in that email (typically your name, your email address, and the
            contents of your message). We use that information only to respond to you and to
            coordinate visits, donations, or media requests.
          </p>
          <h2 className="font-faustina mt-8 mb-2 text-[24px] text-[#3f6b34]">Analytics</h2>
          <p>
            This site may include privacy-conscious analytics (such as anonymized page views) to
            help us understand which pages are most useful. We do not sell or share your data with
            third parties for marketing.
          </p>
          <h2 className="font-faustina mt-8 mb-2 text-[24px] text-[#3f6b34]">Contact</h2>
          <p>
            Questions about this policy? Email{' '}
            <a className="underline" href="mailto:info@falloutshelterecovillage.org">
              info@falloutshelterecovillage.org
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  )
}
