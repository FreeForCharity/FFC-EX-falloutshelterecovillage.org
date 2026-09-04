import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for the Fallout Shelter Ecovillage website.',
}

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#f7f4ee] pt-[140px] pb-[80px]">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="font-faustina mb-6 text-[40px] font-[400] text-[#2d3a26]">Privacy Policy</h1>
        <p className="font-lato mb-4 text-[15px] text-[#3a4a32]">
          <em>Effective Date: 2026-08-30</em>
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
          <h2 className="font-faustina mt-8 mb-2 text-[24px] text-[#3f6b34]">
            Cookies and analytics
          </h2>
          <p>
            We use Google Analytics (delivered through Google Tag Manager) to understand which pages
            are most useful, governed by Google Consent Mode. Google Analytics runs cookie-free
            until you accept through the consent banner, wherever in the world you are — until then
            only aggregate, cookieless measurement takes place. (Switzerland is included because
            Google&apos;s consent defaults cover it; the data of visitors in Switzerland is
            protected by Switzerland&apos;s Federal Act on Data Protection (FADP) rather than the
            GDPR.) There is no country in which analytics cookies are set before you choose. The
            same rule applies to every visitor, so nothing depends on where you are. You can change
            your choice at any time via the Cookie Preferences link in the footer — withdrawing
            consent deletes the analytics cookies this site set. Session-recording analytics
            (Microsoft Clarity) and marketing tags (Meta Pixel) load only if you explicitly opt in
            through the consent banner, everywhere in the world. We do not sell or share your data
            with third parties for marketing.
          </p>
          <h2 className="font-faustina mt-8 mb-2 text-[24px] text-[#3f6b34]">
            Your rights in the European Union, United Kingdom, and EEA (GDPR)
          </h2>
          <p>
            If you visit from the European Union, the United Kingdom, or the wider European Economic
            Area, the EU General Data Protection Regulation (GDPR) or the UK GDPR applies to our
            handling of your personal data. We process personal data only with your consent
            (analytics and marketing cookies, as described above), on our legitimate interests in
            operating, securing, and improving this website, or where the law requires it. You have
            the right to: access the personal data we hold about you; have inaccurate data
            rectified; have your data erased; restrict or object to processing; receive your data in
            a portable format; and withdraw any consent you have given, at any time, without
            affecting the lawfulness of processing before withdrawal. To exercise these rights,
            contact us using the email address in the Contact section below; we will respond within
            the time limits the GDPR sets. You also have the right to lodge a complaint with your
            national data protection supervisory authority (in the UK, the Information
            Commissioner&rsquo;s Office).
          </p>
          <h2 className="font-faustina mt-8 mb-2 text-[24px] text-[#3f6b34]">
            Your California privacy rights (CCPA/CPRA)
          </h2>
          <p>
            If you are a California resident, the California Consumer Privacy Act, as amended by the
            California Privacy Rights Act (CCPA/CPRA), gives you specific rights. We do not sell
            personal information, and do not share it for cross-context behavioral advertising, as
            those terms are defined by California law — and have not done so in the preceding 12
            months. You have the right to know what personal information we collect, use, and
            disclose, and to access it; to delete personal information we collected from you; to
            correct inaccurate personal information; to opt out of any sale or sharing (not
            applicable, since we do neither); to limit the use of sensitive personal information;
            and not to be discriminated against for exercising any of these rights. This site does
            not read or respond to the Global Privacy Control or Do Not Track browser signals — we
            do not sell or share personal information, so there is nothing for those signals to opt
            out of. To submit a request, use the email address in the Contact section below; we will
            respond within the timeframes California law requires.
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
