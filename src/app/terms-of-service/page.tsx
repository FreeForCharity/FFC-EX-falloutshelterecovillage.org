import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for the Fallout Shelter Ecovillage website.',
}

export default function TermsOfService() {
  return (
    <main className="bg-[#f7f4ee] pt-[140px] pb-[80px]">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="font-faustina mb-6 text-[40px] font-[400] text-[#2d3a26]">
          Terms of Service
        </h1>
        <p className="font-lato mb-4 text-[15px] text-[#3a4a32]">
          <em>Effective Date: 2026-01-01</em>
        </p>
        <div className="font-lato space-y-4 text-[16px] leading-[170%] text-[#3a4a32]">
          <p>
            This website provides general information about the Fallout Shelter Ecovillage. By using
            the site, you agree to use it for personal, non-commercial purposes and to not
            misrepresent the organization, its members, or its programs.
          </p>
          <h2 className="font-faustina mt-8 mb-2 text-[24px] text-[#3f6b34]">
            Visits and programs
          </h2>
          <p>
            Visits to the ecovillage require advance scheduling. The information on this site
            describes our programs in general terms; specific arrangements, costs, and expectations
            are agreed in writing with your host before any visit.
          </p>
          <h2 className="font-faustina mt-8 mb-2 text-[24px] text-[#3f6b34]">Donations</h2>
          <p>
            Donated supplies are accepted at the mailing addresses listed on the site. Financial
            gift instructions are provided on request by email. We are unable to issue tax receipts
            unless the gift is processed through a fiscal sponsor or registered partner.
          </p>
          <h2 className="font-faustina mt-8 mb-2 text-[24px] text-[#3f6b34]">External links</h2>
          <p>
            The site links to external services (such as map providers). We are not responsible for
            the content or practices of those external sites.
          </p>
          <h2 className="font-faustina mt-8 mb-2 text-[24px] text-[#3f6b34]">Contact</h2>
          <p>
            Questions about these terms? Email{' '}
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
